Ext.define('MyExtGenApp.view.main.Search', {
  extend: 'Ext.form.Panel',
  title: 'Form tutorial',
  defaultType: 'textfield',
  items: [
    {
      filedLabel: 'First Name',
      name: 'firstName',
    },
    {
      filedLabel: 'Last Name',
      name: 'lastName',
    },
    {
      filedLabel: 'Email',
      name: 'email',
    },
    {
      xtype: 'datefield',
      filedLabel: 'DOB',
      name: 'dob',
    },
  ],
  buttons: [
    {
      text: 'Submit Me',
      handler: function (btn) {
        var data = this.up('form')
        console.warn('print form data', data.getForm().getValues())
      },
    },
  ],
})
