module.exports = function (grunt, options) {

  var port = grunt.option('port') || 3000;
  var host = grunt.option('host') || "54.205.249.200";

  return {
    server: {
      options: {
        port: port,
        base: '<%= outputdir %>',
        keepalive:true,
        open:true
      }
    },
    spoorOffline: {
      options: {
        port: port,
        base: '<%= outputdir %>',
        keepalive:true,
        open: 'http://'+host+':'+port+'/scorm_test_harness.html'
      }
    }
  }
}
