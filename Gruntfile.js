module.exports = function (grunt) {
  grunt.initConfig({
    processhtml: {
      dist: {
        files: {
          'dist/index.html': ['index.html']
        }
      }
    },

    uncss: {
      dist: {
        files: {
          'dist/css/application.min.css': ['index.html']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-processhtml');
  grunt.loadNpmTasks('grunt-uncss');

  grunt.registerTask('default', ['uncss', 'processhtml']);
};
