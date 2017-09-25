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

const API_ENDPOINT = 'http://localhost:3030';

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
    ...obj, [serviceName]: services[serviceName].reducer
  }), {})
}

export const reducers = extractAllReducers(servicesConfig, services);

/**
|--------------------------------------------------
| Configure Offline-firt Realtime
|--------------------------------------------------
*/

export const configureOfflineFirstRealtime = (store) => {
  configureFeathersOfflineFirstRealtime(store, socketClient, services);
}