Ext.define('MyExtGenApp.store.ExtraApi', {
  extend: 'Ext.data.Store',
  alias: 'store.extraApi',
  pageSize: 2,
  itemId: 'extraApi',
  storeId: 'extraApi',
  remoteFilter: true,
  proxy: {
    type: 'ajax',
    url: 'http://jsonplaceholder.typicode.com/users',
  },
  autoLoad: true,
})
