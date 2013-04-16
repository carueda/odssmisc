Ext.define('App.controller.MySecondController', {
	extend:'Ext.app.Controller',

	init:function(){

		/*this.control({

		});*/

		this.application.on({
			sendTheClick:this.caughtTheClick,
			scope:this
		});
	},

	caughtTheClick:function(button, event, eOpts){
		alert('The button has been clicked and we\'re in the controller MySecondController');
	}

});