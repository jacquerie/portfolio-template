module.exports = function(grunt) {
  grunt.initConfig({
    cssmin: {
      dist: {
        files: {
          'dist/css/application.min.css': ['dist/css/application.min.css'],
        },
      },
    },

    eslint: {
      target: [
        'Gruntfile.js',
        'src/js/application.js',
      ],
    },

    jsonlint: {
      all: {
        options: {
          format: true,
          indent: 2,
        },
        src: [
          '.eslintrc.json',
          'package.json',
          'package-lock.json',
        ],
      },
    },

    processhtml: {
      dist: {
        files: {
          'dist/index.html': ['src/index.html'],
        },
      },
    },

    uglify: {
      dist: {
        files: {
          'dist/js/application.min.js': ['src/js/*.js'],
        },
      },
    },

    uncss: {
      dist: {
        files: {
          'dist/css/application.min.css': ['src/index.html'],
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-jsonlint');
  grunt.loadNpmTasks('grunt-processhtml');
  grunt.loadNpmTasks('grunt-uncss');

  grunt.registerTask('build', [
    'uglify',
    'uncss',
    'cssmin',
    'processhtml',
  ]);

  grunt.registerTask('lint', [
    'jsonlint',
    'eslint',
  ]);
};
