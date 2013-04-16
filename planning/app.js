
Ext.Loader.setConfig({ enabled: true });

Ext.application({

//    requires: ['Ext.container.Viewport'],

    name: 'App',

    autoCreateViewport: true,

//    appFolder: 'app',

    models:      ['User'],
    stores:      ['Users'],
    controllers: ['Users', 'MyController', 'MySecondController'],
    views:       ['user.List'],

    launch: function() {
//        Ext.create('Ext.container.Viewport', {
//            layout: 'fit',
//            items: {
//                xtype: 'userlist'
//            }
//        });
    }
});