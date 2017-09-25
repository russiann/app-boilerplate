import Realtime from 'feathers-offline-realtime';

export default (store, socketClient, services) => {

  const products = socketClient.service('/company/products');
  const administrators = socketClient.service('/company/administrators');

  const productsRealtime = new Realtime(products, { sort: Realtime.sort('title') });
  const administratorsRealtime = new Realtime(administrators, { sort: Realtime.sort('name') });

  productsRealtime.on('events', (records, last) => {
    store.dispatch(services.products.store({ connected: productsRealtime.connected, last, records }));
  });
  administratorsRealtime.on('events', (records, last) => {
    store.dispatch(services.administrators.store({ connected: administratorsRealtime.connected, last, records }));
  });

  /**
  |--------------------------------------------------
  | Enable realtime. It will start with a snapshot.
  |--------------------------------------------------
  */

  productsRealtime.connect()
    .then(() => console.log('[products] Realtime replication started'));

  administratorsRealtime.connect()
    .then(() => console.log('[administrators] Realtime replication started'));

};