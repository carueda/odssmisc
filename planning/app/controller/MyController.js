Ext.define('App.controller.MyController', {
	extend:'Ext.app.Controller',
	init:function(){
		this.control({
			'button':{
				click:this.onButtonClick
			}
		});

		this.application.on({

		});
	},

	onButtonClick:function(button, event, eOpts){
		this.application.fireEvent('sendTheClick');
	}
});