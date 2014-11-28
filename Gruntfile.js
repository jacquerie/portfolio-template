module.exports = function (grunt) {
  grunt.initConfig({
    processhtml: {
      dist: {
        files: {
          'dist/index.html': ['index.html']
        }
      }
    },

    uglify: {
      build: {
        src: 'js/*.js',
        dest: 'dist/js/application.min.js'
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

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-processhtml');
  grunt.loadNpmTasks('grunt-uncss');

  grunt.registerTask('default', ['uglify', 'uncss', 'processhtml']);
};
