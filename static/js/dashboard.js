function CDFGraph(title, xlab, xlim, xscale, ylab, yscale, ylim, tooltip, query) {
  this.url = '/getCDF';
  this.title = title;
  this.xlab = xlab;
  this.xlim = xlim;
  this.xscale = xscale;
  this.ylab = ylab;
  this.yscale = yscale;
  this.ylim = ylim;
  this.tooltip = tooltip;
  this.query = query;
  this.data = [];

  getGraphData(this);
}

var graphs = [

  new CDFGraph('Sessions (%) with less than x buffering events',
               'Number of events',
               -1,
               'logarithmic',
               'CDF',
               'normal',
               1.2,
              '({point.y} * 100) % of sessions had less than {point.x} buffering events',
              'select count(b.duration) as cdf from sl_sessions as s, sl_buffer_time as b' +
                ' where b.video_session_id = s.video_session_id' +
                ' group by s.video_session_id' +
                ' order by cdf'
              ),
  new CDFGraph('Buffering events shorter than x seconds',
               'Duration [s]',
               -1,
               'logarithmic',
               'CDF',
               'normal',
               1.2,
               '({point.y} * 100) % of events shorter than {point.x} seconds',
               'select duration as cdf from sl_buffer_time' +
                ' where viewer like \'%%ilver%%\'' +
                '  and duration is not null' +
                ' order by cdf'
               ),
  new CDFGraph('When does buffering occure from the start of the content (Silverlight)',
              'Occurance time [s]',
              -1,
              'logarithmic',
              'CDF',
              'normal',
              1.2,
              '({point.y} * 100) % of events occured before {point.x} second',
              'select playback_position as cdf from sl_buffer' +
                ' where viewer like \'%%ilver%%\'' +
                '  and playback_position is not null' +
                ' order by cdf'
              ),
  new CDFGraph('When does buffering occure from the start of the content (Other)',
              'Occurance time [s]',
              -1,
              'logarithmic',
              'CDF',
              'normal',
              1.2,
              '({point.y} * 100) % of events occured before {point.x} second',
              'select playback_position as cdf from sl_buffer' +
                ' where viewer not like \'%%ilver%%\'' +
                '  and playback_position is not null' +
                ' order by cdf'
              ),
  new CDFGraph('Sessions with less than x kbps of bandwidth available',
              'Available bandwidth [kbps]',
              -1,
              'logarithmic',
              'CDF',
              'normal',
              1.2,
              '({point.y} * 100) % of sessions had less than {point.x} kbps',
              'select video_session_id, avg(avg_event_perceived_bandwidth) as cdf from sl_summary' +
               ' where avg_event_perceived_bandwidth > 0 and avg_event_perceived_bandwidth < 100000000' +
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
      height: 500,
      width: 1000,
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

function getGraphData(graph) {
  $.ajax({
    url: graph.url,
    data: 'q=' + graph.query,
    async: false,
    success: function(data) {
      graph.data = JSON.parse(data);
    }
  });
}

