import Realtime from 'feathers-offline-realtime';

export default (store, socketClient, services) => {

  const companies = socketClient.service('/companies');
  const companiesRealtime = new Realtime(companies, { sort: Realtime.sort('title') });

  companiesRealtime.on('events', (records, last) => {
    store.dispatch(services.companies.store({ connected: companiesRealtime.connected, last, records, whatever: [1,2,3,4,5] }));
  });

  /**
  |--------------------------------------------------
  | Enable realtime. It will start with a snapshot.
  |--------------------------------------------------
  */

  companiesRealtime.connect()
    .then(() => console.log('[products] Realtime replication started'));

};