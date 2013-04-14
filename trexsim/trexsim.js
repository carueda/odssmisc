#!/usr/bin/env node

/*
trex - ODSS web API "simulator" to start testing on ODSS side.

API spec: (under development)
  https://oceana.mbari.org/confluence/display/AUV/trex+-+ODSS+web+API

VERY PRELIMINARY

Run:
    $ node trexsim.js
    trexsim listening at http://0.0.0.0:5050

From other terminal:
    $ curl http://localhost:5050/timelines
    {"timelines":[{"name":"bar","href":"/timeline/bar"},{"name":"baz","href":"/timeline/baz"},{"name":"blop","href":"/timeline/blop"},{"name":"foo","href":"/timeline/foo"}]}

    $ curl http://localhost:5050/timeline/baz?from=hoy\&to=tomorrow
    {"timeline":{"name":"baz","from":"hoy","to":"tomorrow","NOTE":"TODO actual response format"}}

    $ curl -X POST http://localhost:5050/goal
    {"id":"0x29ee90df","href":"/goal/0x29ee90df"}

    $ curl -X DELETE http://localhost:5050/goal/0x29ee90df
    "OK: fake removal of goal 0x29ee90df"

*/

var argv = require('optimist')
    .default('port', 5050)
    .argv;

var port = argv.port;

var restify = require('restify');

var server = restify.createServer();
server.name = "trexsim";
server.pre(restify.pre.userAgentConnection());

server.use(restify.queryParser());

// -----------------------------------------------------------------
// List of trex existing timelines
// GET /timelines
server.get('/timelines', function (req, res, next) {
  res.send({
    "timelines":
    [
        {
            "name": "bar",
            "href": "/timeline/bar"
        },
        {
            "name": "baz",
            "href": "/timeline/baz"
        },
        {
            "name": "blop",
            "href": "/timeline/blop"
        },
        {
            "name": "foo",
            "href": "/timeline/foo"
        }
    ]
  });
});

// -----------------------------------------------------------------
// Content of a timeline
// GET /timeline/{name}?from=xx&to=xx
server.get('/timeline/:name', function (req, res, next) {
  res.send({
  		  "timeline": {
  		  	  "name" : req.params.name,
  		  	  "from" : req.params.from,
  		  	  "to"   : req.params.to,
  		  	  "NOTE" : "TODO actual response format"
  		  }
  });
});

// -----------------------------------------------------------------
// Post a new goal
// POST /goal ....
server.post('/goal', function (req, res, next) {
  res.send({
	  "id": "0x29ee90df",
	  "href": "/goal/0x29ee90df"
  });
});

// -----------------------------------------------------------------
// Cancel a goal
// DELETE /goal/:id
server.del('/goal/:id', function (req, res, next) {
		res.send("OK: fake removal of goal " + req.params.id);
});


server.listen(port, function() {
  console.log('%s listening at %s', server.name, server.url);
});
