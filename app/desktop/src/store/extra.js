Ext.define('MyExtGenApp.store.Extra', {
  extend: 'Ext.data.Store',
  alias: 'store.extra',
  model: 'MyExtGenApp.model.Extra',
  data: {
    item: [
      { name: 'nani', email: 'email', phone: '00000' },
      { name: 'nani', email: 'email', phone: '00000' },
      { name: 'nani', email: 'email', phone: '00000' },
    ],
  },
  proxy: {
    type: 'memory',
    reader: {
      type: 'json',
      rootProperty: 'item',
    },
  },
})
