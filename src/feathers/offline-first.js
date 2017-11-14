import Realtime from 'feathers-offline-realtime';

export default (store, socketClient, services) => {

  const users = socketClient.service('/users');
  const usersRealtime = new Realtime(users, { sort: Realtime.sort('title') });

  usersRealtime.on('events', (records, last) => {
    store.dispatch(services.users.store({ connected: usersRealtime.connected, last, records }));
  });
  
  const roles = socketClient.service('/roles');
  const rolesRealtime = new Realtime(roles, { sort: Realtime.sort('title') });

  rolesRealtime.on('events', (records, last) => {
    store.dispatch(services.roles.store({ connected: rolesRealtime.connected, last, records }));
  });

  /**
  |--------------------------------------------------
  | Enable realtime. It will start with a snapshot.
  |--------------------------------------------------
  */

  usersRealtime.connect()
    .then(() => console.log('[users] Realtime replication started'));
  
  rolesRealtime.connect()
    .then(() => console.log('[roles] Realtime replication started'));

};