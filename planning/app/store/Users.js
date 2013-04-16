
Ext.define('App.store.Users', {
    extend: 'Ext.data.Store',
    model: 'App.model.User',

    data: [
        {name: 'Ed',    email: 'ed@sencha.com'},
        {name: 'Tommy', email: 'tommy@sencha.com'}
    ]
});
