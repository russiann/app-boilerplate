import Realtime from 'feathers-offline-realtime';
import syncService from '../helpers/sync-service';

export default (store, socketClient, services) => {

  const syncronizer = syncService(store, socketClient, services);

  syncronizer([
    {
      service: 'users',
      config: { sort: Realtime.sort('title') }
    },
    {
      service: 'roles',
      config: { sort: Realtime.sort('title') }
    },
  ]);

};
