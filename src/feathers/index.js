import { omit } from 'lodash';
import reduxifyServices from 'feathers-redux';
import feathers from 'feathers-client';
import rest from 'feathers-rest/client';
import io from 'socket.io-client';
import axios from 'axios';

import servicesConfig from './services';
import configureFeathersOfflineFirstRealtime from './offline-first';

/**
|--------------------------------------------------
| Clients Configuration
|--------------------------------------------------
*/

// const API_ENDPOINT = 'http://138.197.109.16:4000';
const API_ENDPOINT = 'http://localhost:5000';

export const socketClient = feathers()
  .configure(feathers.socketio(io(API_ENDPOINT)))
  .configure(feathers.hooks());

export const restClient = feathers()
  .configure(rest(API_ENDPOINT).axios(axios))
  .configure(feathers.hooks());

/**
|--------------------------------------------------
| Redux Integration
|--------------------------------------------------
*/

export const services = reduxifyServices(restClient, servicesConfig);
window.services = services;

/**
|--------------------------------------------------
| Extract all service reducers
|--------------------------------------------------
*/

const extractAllReducers = (servicesConfig, services) => {
  const keys = Object.values(servicesConfig);
  return keys.reduce((obj, serviceName) => ({
    ...obj, [serviceName]: extractResults(services[serviceName].reducer, serviceName)
  }), {})
}

/**
|--------------------------------------------------
| Extract service results to a individual object
|--------------------------------------------------
*/

const targetActions = ['find','get','create','update','patch','remove','reset','store','authenticate','logout'];

export const extractResults = (reducer, serviceName) => (state = {}, action) => {
  const [prefix, name, method, status] = action.type.split('_');

  if (prefix !== 'SERVICES') {
    return reducer(state, action);  
  }

  if (status && name.toLowerCase() === serviceName) {
    console.log(serviceName)
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

export const reducers = extractAllReducers(servicesConfig, services);

/**
|--------------------------------------------------
| Configure Offline-firt Realtime
|--------------------------------------------------
*/

export const configureOfflineFirstRealtime = (store) => {
  configureFeathersOfflineFirstRealtime(store, socketClient, services);
}