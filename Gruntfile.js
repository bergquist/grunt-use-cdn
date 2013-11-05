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
      src: 'tests/tmp'
    },
    mochacli: {
      all: ['tests/test-*.js']
    }
  })

  grunt.loadTasks('tasks')

  grunt.registerTask('default', ['jshint', 'test'])
  grunt.registerTask('test', [ 'clean', 'mochacli', 'clean'])
}