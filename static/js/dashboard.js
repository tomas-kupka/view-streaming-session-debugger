function CDFGraph(title, xlab, xlim, xscale, ylab, ylim, yscale, tooltip, query_template) {
  this.url = '/getCDF';
  this.title = title;
  this.xlab = xlab;
  this.xlim = xlim;
  this.xscale = xscale;
  this.ylab = ylab;
  this.yscale = yscale;
  this.ylim = ylim;
  this.tooltip = tooltip;
  this.query_template = query_template;
  this.data = [];
}

function copyGraph(graph) {
  return (new CDFGraph(graph.title,
      graph.xlab, graph.xlim, graph.xscale,
      graph.ylab, graph.ylim, graph.yscale,
      graph.tooltip, graph.query_template));
}

var graphs = [

  new CDFGraph('Sessions with less than x buffering events',
               'Number of events',
               -1,
               'logarithmic',
               'CDF',
               1.2,
               'normal',
              '({point.y} * 100) % of sessions had less than {point.x} buffering events',
              'select count(b.duration) as cdf from sl_sessions as s, sl_buffer_time as b' +
                ' where b.video_session_id = s.video_session_id' +
                '  and b.ts >= FROM and b.ts <= TO' +
                '  and s.ts >= FROM and s.ts <= TO' +
                ' group by s.video_session_id' +
                ' order by cdf'
              )
  ,
  new CDFGraph('Buffering events shorter than x seconds',
               'Duration [s]',
               -1,
               'logarithmic',
               'CDF',
               1.2,
               'normal',
               '({point.y} * 100) % of events shorter than {point.x} seconds',
               'select duration as cdf from sl_buffer_time' +
                ' where viewer like \'%%ilver%%\'' +
                '  and duration is not null' +
                '  and ts >= FROM and ts <= TO' +
                ' order by cdf'
               ),
  new CDFGraph('PRE-Buffer events shorter than x seconds',
               'Duration [s]',
               -1,
               'logarithmic',
               'CDF',
               1.2,
               'normal',
               '({point.y} * 100) % of events shorter than {point.x} seconds',
               'select duration as cdf from sl_pre_buffer_time' +
                ' where viewer like \'%%ilver%%\'' +
                '  and duration is not null' +
                '  and ts >= FROM and ts <= TO' +
                ' order by cdf'
               ),
  new CDFGraph('When does buffering occure from the start of the content (Silverlight)',
              'Occurance time [s]',
              -1,
              'logarithmic',
              'CDF',
              1.2,
              'normal',
              '({point.y} * 100) % of events occured before {point.x} second',
              'select playback_position as cdf from sl_buffer' +
                ' where viewer like \'%%ilver%%\'' +
                '  and playback_position is not null' +
                '  and ts >= FROM and ts <= TO' +
                ' order by cdf'
              ),
  new CDFGraph('When does buffering occure from the start of the content (Other)',
              'Occurance time [s]',
              -1,
              'logarithmic',
              'CDF',
              1.2,
              'normal',
              '({point.y} * 100) % of events occured before {point.x} second',
              'select playback_position as cdf from sl_buffer' +
                ' where viewer not like \'%%ilver%%\'' +
                '  and playback_position is not null' +
                '  and ts >= FROM and ts <= TO' +
                ' order by cdf'
              ),
  new CDFGraph('Sessions with less than x errors',
               'Number of errors',
               -1,
               'logarithmic',
               'CDF',
               1.2,
               'normal',
              '({point.y} * 100) % of sessions had less than {point.x} errors',
              'select count(b.ts) as cdf from sl_sessions as s, sl_error as b' +
                ' where b.video_session_id = s.video_session_id' +
                '  and b.ts >= FROM and b.ts <= TO' +
                '  and s.ts >= FROM and s.ts <= TO' +
                ' group by s.video_session_id' +
                ' order by cdf'
              )
  ,
  new CDFGraph('Sessions with less than x warnings',
               'Number of warnings',
               -1,
               'logarithmic',
               'CDF',
               1.2,
               'normal',
              '({point.y} * 100) % of sessions had less than {point.x} warnings',
              'select count(b.ts) as cdf from sl_sessions as s, sl_warning as b' +
                ' where b.video_session_id = s.video_session_id' +
                '  and b.ts >= FROM and b.ts <= TO' +
                '  and s.ts >= FROM and s.ts <= TO' +
                ' group by s.video_session_id' +
                ' order by cdf'
              )
  ,
  new CDFGraph('Sessions with less than x kbps of bandwidth available',
              'Available bandwidth [kbps]',
              -1,
              'logarithmic',
              'CDF',
              1.2,
              'normal',
              '({point.y} * 100) % of sessions had less than {point.x} kbps',
              'select video_session_id, avg(avg_event_perceived_bandwidth) as cdf from sl_summary' +
               ' where avg_event_perceived_bandwidth > 0 and avg_event_perceived_bandwidth < 100000000' +
                '  and ts >= FROM and ts <= TO' +
               ' group by video_session_id' +
               ' order by cdf'
              )
]

function plotCDF(graph, div) {

  var data = [];
  for (var i = 0; i < graph.data.length; i++) {
    if (graph.data[i].y > graph.ylim) {
      continue;
    }

    if (graph.xscale == 'logarithmic' &&
        graph.data[i].x == 0) {
      continue;
    }

    data.push([graph.data[i].x, graph.data[i].y]);
  }

  $(div).highcharts({
    chart: {
      height: 380,
      width: 680,
      zoomType: 'x'
    },
    title: {
      text: graph.title
    },
    xAxis: {
      title: {
        enabled: true,
        text: graph.xlab
      },
      type: graph.xscale,
      startOnTick: true,
      endOnTick: true,
      showLastLabel: true
    },
    yAxis: {
      title: {
        enabled: true,
        text: graph.ylab
      },
      min: 0,
      max: graph.ylim
    },
    plotOptions: {
     line: {
       marker: {
          enabled: false
        }
      }
    },
    series: [{
      type: 'line',
      name: graph.title,
      data: data,
      tooltip: {
        headerFormat: '',
        pointFormat: graph.tooltip
      }
    }]
  });
}

function plotCDF2(graph1, graph2, div) {

  var data1 = [];
  for (var i = 0; i < graph1.data.length; i++) {
    if (graph1.data[i].y > graph1.ylim) {
      continue;
    }

    if (graph1.xscale == 'logarithmic' &&
        graph1.data[i].x == 0) {
      continue;
    }

    data1.push([graph1.data[i].x, graph1.data[i].y]);
  }

  var data2 = [];
  for (var i = 0; i < graph2.data.length; i++) {
    if (graph2.data[i].y > graph2.ylim) {
      continue;
    }

    if (graph2.xscale == 'logarithmic' &&
        graph2.data[i].x == 0) {
      continue;
    }

    data2.push([graph2.data[i].x, graph2.data[i].y]);
  }

  $(div).highcharts({
    chart: {
      height: 380,
      width: 680,
      zoomType: 'x'
    },
    title: {
      text: graph1.title
    },
    xAxis: {
      title: {
        enabled: true,
        text: graph1.xlab
      },
      type: graph1.xscale,
      startOnTick: true,
      endOnTick: true,
      showLastLabel: true
    },
    yAxis: {
      title: {
        enabled: true,
        text: graph1.ylab
      },
      min: 0,
      max: graph1.ylim
    },
    plotOptions: {
     line: {
       marker: {
          enabled: false
        }
      }
    },
    series: [{
      type: 'line',
      name: '[1]' + graph1.title,
      data: data1,
      tooltip: {
        headerFormat: '',
        pointFormat: graph1.tooltip
      }
    },{
      type: 'line',
      name: '[2]' + graph2.title,
      data: data2,
      tooltip: {
        headerFormat: '',
        pointFormat: graph2.tooltip
      }
    }]
  });
}
function getGraphData(graph, from, to) {
  var query = graph.query_template;
  query = query.replace(/FROM/g, from);
  query = query.replace(/TO/g, to);
  $.ajax({
    url: graph.url,
    data: 'q=' + query,
    async: false,
    success: function(data) {
      graph.data = JSON.parse(data);
    }
  });
}

