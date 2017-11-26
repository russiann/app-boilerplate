import { omit } from 'lodash';
import reduxifyServices from 'feathers-redux';
import feathers from '@feathersjs/feathers';
import feathersAuth from '@feathersjs/authentication-client';
import rest from '@feathersjs/rest-client';
import socketio from '@feathersjs/socketio-client';
import io from 'socket.io-client';
import axios from 'axios';
import feathersReduxifyAuthentication from 'feathers-reduxify-authentication'
import servicesConfig from './services';
import configureFeathersOfflineFirstRealtime from './offline-first';
import methodReducer from './methodReducer';

/**
|--------------------------------------------------
| Clients Configuration
|--------------------------------------------------
*/

// const API_ENDPOINT = 'http://138.197.109.16:4000';
const API_ENDPOINT = 'http://localhost:3030';

export const socketClient = feathers()
  .configure(socketio(io(API_ENDPOINT)))
  .configure(feathersAuth({ storage: localStorage }));

export const restClient = feathers()
  .configure(rest(API_ENDPOINT).axios(axios))
  .configure(feathersAuth({ storage: localStorage }));


/**
|--------------------------------------------------
| Feathers Authentication
|--------------------------------------------------
*/

/*
  For real-time works on Feathers v3 you must use socketClient
  in authentication and new Channels features will works
*/ 
export const authentication = feathersReduxifyAuthentication(socketClient, {});

/**
|--------------------------------------------------
| Redux Integration
|--------------------------------------------------
*/

export const services = {
  authentication, 
  ...reduxifyServices(restClient, servicesConfig)
};
window.services = services;

/**
|--------------------------------------------------
| Extract all service reducers
|--------------------------------------------------
*/

const extractAllReducers = (servicesConfig, services) => {
  const keys = Object.values(servicesConfig);
  return keys.reduce((obj, serviceName) => ({
    ...obj, [serviceName]: methodReducer(services[serviceName].reducer, {
      find:     'find',
      get:      'get',
      create:   'create',
      update:   'update',
      patch:    'patch',
      delete:   'delete',
      snapshot: 'store'
    })
  }), {})
}

/**
|--------------------------------------------------
| Extract service results to a individual object
|--------------------------------------------------
*/

const targetActions = ['results','find','get','create','update','patch','remove','reset','store','authenticate','logout'];

export const extractResults = (reducer, serviceName) => (state = {}, action) => {
  const [prefix, name, method, targetAction] = action.type.split('_');

  if (prefix !== 'SERVICES') {
    return reducer(state, action);  
  }

  if (targetAction && name.toLowerCase() === serviceName) {
    const newState = {
      ...state,
      results: {
        ...state.results,
        [method.toLowerCase()]: omit(reducer(state, action), targetActions)
      }
    };
    return newState;
  }

  return reducer(state, action);
}

/**
|--------------------------------------------------
| Exports reducers
|--------------------------------------------------
*/

export const reducers = {
  authentication: authentication.reducer,
  ...extractAllReducers(servicesConfig, services)
};

/**
|--------------------------------------------------
| Configure Offline-firt Realtime
|--------------------------------------------------
*/

export const configureOfflineFirstRealtime = (store) => {
  configureFeathersOfflineFirstRealtime(store, socketClient, services);
}

/**
|--------------------------------------------------
| Temporary Fix
|--------------------------------------------------
*/

export const startAuthentication = () => {
  return new Promise((resolve, reject) => {
    if (window.store.getState().authentication.isSignedIn) {
      return true;
    }

    if (localStorage['feathers-jwt']) {
      return resolve(window.store.dispatch(authentication.authenticate()).payload.promise)
    }

    return reject(false);
  });
}
