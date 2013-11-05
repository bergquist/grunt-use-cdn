module.exports = function(grunt) {
  'use strict';
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks)

  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      files: [
        'Gruntfile.js',
        'tasks/*.js',
        'tests/**/*.js',
        '!test/fixture/*.js'
      ]
    },
    clean: {
      src: 'test/tmp'
    },
    mochacli: {
      all: 'test/*_test.js'
    }
  })

  grunt.loadTasks('tasks')

  grunt.registerTask('copy', function() {

  })

  grunt.registerTask('default', ['jshint'])
  grunt.registerTask('test', ['clean', 'copy', 'nodeunit', 'clean'])
}