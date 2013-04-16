
Ext.define('App.view.Viewport', {
	extend: 'Ext.container.Viewport',
    layout: 'fit',
	requires:['App.view.user.List'],
	items:[
        {
            xtype:'userlist'
        }
    ]
});