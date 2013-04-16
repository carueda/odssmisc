
Ext.onReady(function() {

    scheduler.locale.labels.timeline_tab = "Timeline";
    scheduler.locale.labels.section_custom="Section";
    scheduler.config.details_on_create=true;
    scheduler.config.details_on_dblclick=true;
    scheduler.config.xml_date="%Y-%m-%d %H:%i";

    scheduler.xy.bar_height = 20;
    scheduler.xy.nav_height = 32;

    //===============
    //Configuration
    //===============
    var sections=[
    {key:1, label:"ESPs"},
    {key:2, label:"LRAUV Tethys"},
    {key:3, label:"LRAUV Daphne"},
    {key:4, label:"Rachel Carson"},
    {key:5, label:"AUV Dorado"}
    ];

    scheduler.createTimelineView({
        //section_autoheight: false,
        round_position: true,
        dy:         26,
        name:	    "timeline",
        x_unit:	    "day",
        x_date:	    "%d",
        x_step:	    1,
        x_size:     40,
        x_start:    0,
        y_unit:	    sections,
        y_property:	"section_id",
        render:     "bar"
    });


    //===============
    //Data loading
    //===============
    scheduler.config.lightbox.sections=[
    {name:"description", height:130, map_to:"text", type:"textarea" , focus:true},
    {name:"custom", height:23, type:"select", options:sections, map_to:"section_id" },
    {name:"time", height:72, type:"time", map_to:"auto"}
    ];

    scheduler.init('scheduler_here',new Date(2013,2,3),"timeline");
    scheduler.parse([
    { start_date: "2013-03-08", end_date: "2013-04-05 23:00", text:"X", section_id:1},

    { start_date: "2013-03-10", end_date: "2013-03-11 23:00", text:"T", section_id:2},
    { start_date: "2013-03-12", end_date: "2013-03-12 23:00", text:"D", section_id:2},
    { start_date: "2013-03-13", end_date: "2013-03-18 23:00", text:"X", section_id:2},
    { start_date: "2013-03-19", end_date: "2013-03-19 23:00", text:"R", section_id:2},
    { start_date: "2013-03-20", end_date: "2013-03-20 23:00", text:"D", section_id:2},
    { start_date: "2013-03-21", end_date: "2013-03-27 23:00", text:"X", section_id:2},
    { start_date: "2013-03-28", end_date: "2013-03-28 23:00", text:"R", section_id:2},
    { start_date: "2013-03-29", end_date: "2013-03-29 23:00", text:"T", section_id:2},

    { start_date: "2013-03-10", end_date: "2013-03-11 23:00", text:"T", section_id:3},
    { start_date: "2013-03-12", end_date: "2013-03-12 23:00", text:"D", section_id:3},
    { start_date: "2013-03-13", end_date: "2013-03-18 23:00", text:"X", section_id:3},
    { start_date: "2013-03-19", end_date: "2013-03-19 23:00", text:"R", section_id:3},
    { start_date: "2013-03-20", end_date: "2013-03-20 23:00", text:"D", section_id:3},
    { start_date: "2013-03-21", end_date: "2013-03-27 23:00", text:"X", section_id:3},
    { start_date: "2013-03-28", end_date: "2013-03-28 23:00", text:"R", section_id:3},
    { start_date: "2013-03-29", end_date: "2013-03-29 23:00", text:"T", section_id:3},

    { start_date: "2013-03-04", end_date: "2013-03-05 23:00", text:"T", section_id:4},
    { start_date: "2013-03-15", end_date: "2013-03-17 23:00", text:"X", section_id:4},
    { start_date: "2013-03-20", end_date: "2013-03-22 23:00", text:"X", section_id:4}
    ,

    { start_date: "2013-03-15", end_date: "2013-03-17 23:00", text:"X", section_id:5},
    { start_date: "2013-03-20", end_date: "2013-03-22 23:00", text:"X", section_id:5}



    ],"json");

});
