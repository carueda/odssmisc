Ext.define('App.view.MyPanel', {
	extend:'Ext.panel.Panel',
	alias: 'widget.mypanel',
	title:'MyPanel',
	items:[{
		xtype:'button',
		text:'button1'
	},{
		xtype:'button',
		text:'button2'
	}]
});