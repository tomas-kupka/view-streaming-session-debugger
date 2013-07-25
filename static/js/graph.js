function getSessions(sessions_table, user_id) {
  $.ajax({
    url: './getSessions',
    data: "userid=" + user_id,
    success: function(data) {
      var sessions = JSON.parse(data);
      // clear the sessions table
      $(sessions_table + ' > tbody').empty();
      // creates sessions table
      for (var i = 0; i < sessions.length; i++) {
        var tr = $('<tr id="' + sessions[i].video_session_id + '">');
        var td1 = $('<td>').html(sessions[i].video_session_id);
        var td2 = $('<td>').html(sessions[i].content_id);
        var td3 = $('<td>').html(new Date(parseInt(sessions[i].ts)));
        $(tr).append(td1).append(td2).append(td3);
        // make each session clickable
        $(tr).click(function(event) {
          $(sessions_table + ' tr').css('background-color', 'white');
          $(this).css('background-color', 'yellow');
          var video_session_id = $(this).attr("id");
          // let's print the events and plot the graph
          visualizeEvents('#sessionGraph', '#sessionEvents', video_session_id);
        });
        // add the session to the table
        $(sessions_table + ' > tbody').append(tr);
      }
    },
  });
}

function getEvents(url, video_session_id) {
  var ret = [];

  $.ajax({
    url: url,
    data: "video_session_id=" + video_session_id,
    async: false,
    success: function(data) {
      ret = JSON.parse(data);
      console.log(ret);
      console.log(data);
    }
  });

  return ret;
}

function createEventGraphPoints(data) {
  var points = [];
  for (var i = 0; i < data.length; i++) {
    data[i].x = data[i].app_ts;
    data[i].y = 8000;
    points.push(data[i]);
  }
  return points;
}

function findBitrateInTimeT(t, bitrate_events) {
  for (var i = bitrate_events.length - 1; i >= 0; i--) {
    if (bitrate_events[i].app_ts <= t) {
      return parseInt(bitrate_events[i].bitrate);
    }
  }
  return 0;
}

function insertStartPlaybackEvent(events, bitrate_events, playback_bitrate) {
  for (var i = 0; i < events.length; i++) {
    var t = events[i].app_ts;
    var b = findBitrateInTimeT(events[i].app_ts, bitrate_events);
    playback_bitrate.push([t,b]);
  }
}

function insertStopPlaybackEvent(events, bitrate_events, playback_bitrate) {
  for (var i = 0; i < events.length; i++) {
    var t = events[i].app_ts;
    var b = findBitrateInTimeT(events[i].app_ts, bitrate_events);
    playback_bitrate.push([t,b]);
    playback_bitrate.push([t+1,0]);
  }
}

/*
 * Summary event is only send when the player is playing.
 */
function insertSummaryPlaybackEvent(summary_events, bitrate_events, playback_bitrate) {
  for (var i = 0; i < summary_events.length; i++) {
    var t = summary_events[i].app_ts;
    var b = findBitrateInTimeT(summary_events[i].app_ts, bitrate_events);
    playback_bitrate.push([t,b]);
  }
}

function createGraph(eventGraph, session) {

  // create data for the playback bitrate graph
  // 1. insert all bitrate events
  // 2. insert all summary events that confirm that the player is playing
  //    (not send when the player is not playing)
  // 3. insert all buffer, pause, stop, seek, error events
  //    with the bitrate equal to the first bitrate event that
  //    occured just before them. Insert an event with bitrate
  //    "null" one 1ms after them to "break" the graph.
  // 4. insert all play events with the bitrate equal to the
  //    first bitrate event that occured just before them.
  // 5. optionally sort playback_bitrate
  var playback_bitrate = [];
  for (var i = 0; i < session.bitrate.length; i++) {
    var t = session.bitrate[i].app_ts;
    var b = parseInt(session.bitrate[i].bitrate);
    playback_bitrate.push([t,b]);
  }
  console.log("bitrate: " + playback_bitrate);
  // 2.
  insertSummaryPlaybackEvent(session.summary, session.bitrate, playback_bitrate);
  // 3.
  insertStopPlaybackEvent(session.buffer, session.bitrate, playback_bitrate);
  console.log("buffer: " + playback_bitrate);
  insertStopPlaybackEvent(session.pause, session.bitrate, playback_bitrate);
  console.log("pause: " + playback_bitrate);
  insertStopPlaybackEvent(session.stop, session.bitrate, playback_bitrate);
  console.log("stop: " + playback_bitrate);
  insertStopPlaybackEvent(session.seek, session.bitrate, playback_bitrate);
  console.log("seek: " + playback_bitrate);
  insertStopPlaybackEvent(session.error, session.bitrate, playback_bitrate);
  console.log("error: " + playback_bitrate);
  // 4.
  insertStartPlaybackEvent(session.play, session.bitrate, playback_bitrate);
  console.log("play: " + playback_bitrate);
  // 5.
  playback_bitrate.sort(function(a, b) { return a[0] - b[0] });
  console.log("final: " + playback_bitrate);

  // create data for the perceived bandwidth graph
  var perceived_bitrate = [];
  for (var i = 0; i < session.summary.length; i++) {
    var t = session.summary[i].app_ts;
    var b = parseInt(session.summary[i].avg_event_perceived_bandwidth);
    if (b < 100000) {
      perceived_bitrate.push([t,b]);
    }
  }

  $(eventGraph).highcharts({
    chart: {
      height: 500,
      width: 1000,
      zoomType: 'x'
    },
    title: {
      text: 'Session' + session.video_session_id + 'graph'
    },
    xAxis: {
      title: {
        enabled: true,
        text: 'Application timestamp [ms]'
      },
      startOnTick: true,
      endOnTick: true,
      showLastLabel: true
    },
    yAxis: {
      title: {
        text: 'Bitrate [kbps]'
      }
    },
    series: [{
      type: 'line',
      name: 'Playback bitrate',
      data: playback_bitrate,
      step: 'left'
    },{
      type: 'line',
      name: 'Perceived bitrate',
      data: perceived_bitrate,
      step: 'right'
    },{
      type: 'column',
      name: 'Session start',
      data: createEventGraphPoints(session.session_start),
      tooltip: {
        useHTML: true,
        headerFormat: 'session_start: {point.x} playback: {point.playback_position}<br/>',
        pointFormat:
          'content_id: {point.content_id}<br/>'
          +
          'gpu_device_id: {point.gpu_device_id}<br/>'
          +
          'gpu_vendor_id: {point.gpu_vendor_id}<br/>'
          +
          'gpu_driver_version: {point.gpu_driver_version}<br/>'
      },
      pointWidth: 1
    },{
      type: 'column',
      name: 'Summary',
      data: createEventGraphPoints(session.summary),
      tooltip: {
        useHTML: true,
        headerFormat: 'summary: {point.x} playback: {point.playback_position}<br/>',
        pointFormat:
          'avg_perceived_bw: {point.avg_event_perceived_bandwidth}bps<br/>'
          +
          'avg_playback: {point.avg_event_bitrate}bps<br/>'
          +
          'avg_rendered_frames: {point.avg_event_rendered_frames}<br/>'
          +
          'avg_dropped_frames: {point.avg_event_dropped_frames}<br/>'
          +
          'sum_bitrate_changes: {point.sum_event_bitrate_changes}<br/>'
          +
          'avg_system_cpu: {point.avg_event_system_cpu_percentage}<br/>'
          +
          'avg_process_cpu: {point.avg_event_process_cpu_percentage}<br/>'
      },
      pointWidth: 1
    },{
      type: 'column',
      name: 'Pre-buffer',
      data: createEventGraphPoints(session.pre_buffer),
      tooltip: {
        headerFormat: 'pre-buffer: {point.x} playback: {point.playback_position}',
        pointFormat: ''
      },
      pointWidth: 1
    },{
      type: 'column',
      name: 'Pre-buffer time',
      data: createEventGraphPoints(session.pre_buffer_time),
      tooltip: {
        useHTML: true,
        headerFormat: 'pre-buffer time: {point.x} playback: {point.playback_position}<br/>',
        pointFormat:
          'duration: {point.duration}s',
      },
      pointWidth: 1
    },{
      type: 'column',
      name: 'Seek',
      data: createEventGraphPoints(session.seek),
      tooltip: {
        useHTML: true,
        headerFormat: 'seek: {point.x} playback: {point.playback_position}<br/>',
        pointFormat:
          'toPosition: {point.to_position}ms',
      },
      pointWidth: 1
    },{
      type: 'column',
      name: 'Buffer',
      data: createEventGraphPoints(session.buffer),
      tooltip: {
        headerFormat: 'buffer: ',
        pointFormat: '{point.x} playback: {point.playback_position}'
      },
      pointWidth: 1
    },{
      type: 'column',
      name: 'Buffer time',
      data: createEventGraphPoints(session.buffer_time),
      tooltip: {
        useHTML: true,
        headerFormat: 'buffer time: {point.x} playback: {point.playback_position}<br/>',
        pointFormat:
          'duration: {point.duration}s',
      },
      pointWidth: 1
    },{
      type: 'column',
      name: 'Play',
      data: createEventGraphPoints(session.play),
      tooltip: {
        headerFormat: 'play: ',
        pointFormat: '{point.x} playback: {point.playback_position}'
      },
      pointWidth: 1
    },{
      type: 'column',
      name: 'Pause',
      data: createEventGraphPoints(session.pause),
      tooltip: {
        headerFormat: 'pause: ',
        pointFormat: '{point.x} playback: {point.playback_position}'
      },
      pointWidth: 1
    },{
      type: 'column',
      name: 'Stop',
      data: createEventGraphPoints(session.stop),
      tooltip: {
        headerFormat: 'stop: ',
        pointFormat: '{point.x} playback: {point.playback_position}'
      },
      pointWidth: 1
    }]
  });
}

function createEventTable(eventTable, session) {
//  $(eventTable).html('<tr><td>' + session_start + '</td></tr>');
//  $(eventTable).append('<tr><td>' + bitrate + '</td></tr>');
}

function appTs2Int(events) {
  $.each(events, function(index, value) {
    value.app_ts = parseInt(value.app_ts);
  });
  return events;
}

function visualizeEvents(eventTable, eventGraph, video_session_id) {
  // get all the events from the server
  var session = new Object();
  session.video_session_id = video_session_id;
  session.session_start = appTs2Int(getEvents('/getsl_session_start', video_session_id));
  session.pause = appTs2Int(getEvents('/getsl_pause', video_session_id));
  session.bitrate = appTs2Int(getEvents('/getsl_bitrate', video_session_id));
  session.pre_buffer = appTs2Int(getEvents('/getsl_pre_buffer', video_session_id));
  session.pre_buffer_time = appTs2Int(getEvents('/getsl_pre_buffer_time', video_session_id));
  session.buffer = appTs2Int(getEvents('/getsl_buffer', video_session_id));
  session.buffer_time = appTs2Int(getEvents('/getsl_buffer_time', video_session_id));
  session.seek = appTs2Int(getEvents('/getsl_seek', video_session_id));
  session.summary = appTs2Int(getEvents('/getsl_summary', video_session_id));
  session.stop = appTs2Int(getEvents('/getsl_stop', video_session_id));
  session.error = appTs2Int(getEvents('/getsl_error', video_session_id));
  session.play = appTs2Int(getEvents('/getsl_play', video_session_id));

  console.log("session.play: " + createEventGraphPoints(session.play));

  createGraph(eventGraph, session);
  createEventTable(eventTable, session);
}

