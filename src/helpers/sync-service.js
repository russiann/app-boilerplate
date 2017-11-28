import Realtime from 'feathers-offline-realtime';

export default (store, socketClient, services) => (realtimes = []) => {

  realtimes.forEach(realtime => {
    const service = socketClient.service(realtime.service);
    const serviceRealtime = new Realtime(service, realtime.config);

    serviceRealtime.on('events', (records, last) => {
      store.dispatch(services[realtime.service].store({ connected: serviceRealtime.connected, last, records }));
      if (realtime.listener) {
        realtime.listener(records, last);
      }
    });

    serviceRealtime
      .connect()
      .then((...args) => {
        console.log('[users] Realtime replication started');
        if (realtime.onConnect) {
          realtime.onConnect(...args);
        }
      });
  });

}