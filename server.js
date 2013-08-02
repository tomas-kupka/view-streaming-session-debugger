var url = require('url');
var static = require('node-static');
var http = require('http');
var pg = require('pg');

function createCDF(result, column) {
  var cdf = [];
  var c = 0;
  var last = 0;
  for (var i = 0; i < result.rows.length; i++) {
    c++;
    var n = parseFloat(result.rows[i][column]);
    if (last == n) {
      continue;
    }
    var e = new Object();
    e.x = last;
    e.y = c / result.rows.length;
    cdf.push(e);
    last = n;
  }
  return cdf;
}

function getDbCDF(response, query) {
  var client = new pg.Client(conString);

  client.connect(function(err) {
    if (err) {
      return console.error('Could not connect to postgres', err);
    }

    client.query(query, function (err, result) {
      if (err) {
        return console.error('Error running query', err);
      }

      console.log(result.rows.length);

      var cdf = createCDF(result, 'cdf');

      var json = JSON.stringify(cdf);
      response.write(json);
      response.end();
      client.end();
    });
  });
}

function getSessions(response, userid) {
  var client = new pg.Client(conString);

  client.connect(function(err) {
    if (err) {
      return console.error('Could not connect to postgres', err);
    }

    client.query('select * from sl_sessions where user_id=\''
      + userid + '\' order by ts', function (err, result) {
      if (err) {
        return console.error('Error running query', err);
      }

      var sessions = [];
      for (var i = 0; i < result.rows.length; i++) {
        sessions.push(result.rows[i]);
      }

      var json = JSON.stringify(sessions);
      console.log(json);
      response.write(json);
      response.end();
      client.end();
    });
  });
}

function getEvents(response, table, video_session_id) {
  var client = new pg.Client(conString);

  client.connect(function(err) {
    if (err) {
      return console.error('Could not connect to postgres', err);
    }

    var q = 'select * from ' + table + ' where video_session_id=\'' +
      video_session_id + '\' order by ts';

    client.query(q, function (err, results) {
      if (err) {
        return console.error('Error running query', err);
      }

      var rets = [];
      for (var i = 0; i < results.rows.length; i++) {
        var ret = results.rows[i];
        rets.push(ret);
      }

      console.log(JSON.stringify(rets));
      response.write(JSON.stringify(rets));
      response.end();
      client.end();
    });
  });
}

// ----- MAIN PROGRAM -----

if (process.argv.length != 7) {
  console.error('Usage: node server.js dbHost dbUser dbPwd dbDB serverPort');
  return 1;
}

var dbHost = process.argv[2];
var dbUser = process.argv[3];
var dbPwd = process.argv[4];
var dbDB = process.argv[5];
var serverPort = process.argv[6];
var conString = 'tcp://' + dbUser + ":" + dbPwd + '@' + dbHost + '/' + dbDB;

var file = new (static.Server)('./static');

var server = http.createServer(function (request, response) {
  console.log('Received request for: ' + request.url);

  var url_parts = url.parse(request.url, true);
  var pathname = url_parts.pathname;

  if (pathname == '/getSessions') {
    getSessions(response, url_parts.query.userid);
  } else if (pathname == '/getCDF') {
    console.log(url_parts.query['q']);
    getDbCDF(response, url_parts.query['q']);
  } else if (pathname.substr(0,4) == '/get') {
    getEvents(response, pathname.substr(4), url_parts.query.video_session_id);
  } else {
    request.addListener('end', function () {
      file.serve(request, response);
    }).resume();
  }
});

server.listen(serverPort);

console.log('Server running at port ' + serverPort);

