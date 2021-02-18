Ext.define('MyExtGenApp.view.personnel.PersonnelViewStore', {
  extend: 'Ext.data.Store',
  alias: 'store.personnelviewstore',
  fields: ['name', 'email', 'phone', 'dept', 'temp'],
  //groupField: 'dept',
  data: {
    items: [
      {
        name: 'Jean Luc',
        email: 'jeanluc.picard@enterprise.com',
        phone: '555-111-1111',
        dept: 'bridge',
        temp: 'temp',
      },
      {
        name: 'ModernWorf',
        email: 'worf.moghsson@enterprise.com',
        phone: '555-222-2222',
        dept: 'engine',
        temp: 'temp',
      },
      {
        name: 'Deanna',
        email: 'deanna.troi@enterprise.com',
        phone: '555-333-3333',
        dept: 'bridge',
        temp: 'temp',
      },
      {
        name: 'Data',
        email: 'mr.data@enterprise.com',
        phone: '555-444-4444',
        dept: 'bridge',
        temp: 'temp',
      },
    ],
  },
  proxy: {
    type: 'memory',
    reader: {
      type: 'json',
      rootProperty: 'items',
    },
  },
})
