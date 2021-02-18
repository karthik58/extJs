Ext.define('MyExtGenApp.view.main.Extra', {
  extend: 'Ext.grid.Grid',
  xtype: 'Extra',
  cls: 'extra',
  title: 'Grid Testing',
  store: {
    type: 'extraApi',
  },

  bbar: {
    xtype: 'pagingtoolbar',
    displayInfo: true,
  },

  columns: [
    { text: 'Name', dataIndex: 'name', flex: 1, filter: { type: 'string' } },
    { text: 'Email', dataIndex: 'email', flex: 1 },
    { text: 'Phone', dataIndex: 'phone', flex: 1 },
    { text: 'Website', dataIndex: 'website', flex: 1 },
  ],

  plugind: 'gridfilters',

  id: 'testGrid',
  selModel: {
    injectCheckbox: 'first',
    checkOnly: true,
    model: 'SIMPLE ',
    type: 'checkboxmodel',
  },
  buttons: [
    {
      text: 'Select All',
      handler: function () {
        Ext.getCmp('testGrid').getSelectionModel().selectAll()
      },
    },
  ],
})
