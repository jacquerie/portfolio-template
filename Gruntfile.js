module.exports = function (grunt) {
  grunt.initConfig({
    clean: {
      dist: ['dist/css/application.css']
    },

    cssmin: {
      dist: {
        files: {
          'dist/css/application.min.css': ['dist/css/application.css']
        }
      }
    },

    processhtml: {
      dist: {
        files: {
          'dist/index.html': ['index.html']
        }
      }
    },

    uglify: {
      dist: {
        files: {
          'dist/js/application.min.js': ['js/*.js']
        }
      }
    },

    uncss: {
      dist: {
        files: {
          'dist/css/application.css': ['index.html']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-processhtml');
  grunt.loadNpmTasks('grunt-uncss');

  grunt.registerTask('default', [
    'uglify',
    'uncss',
    'cssmin',
    'processhtml',
    'clean'
  ]);
};
