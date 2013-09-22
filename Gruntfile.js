module.exports = function(grunt) {
  'use strict';
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks)

  grunt.initConfig({
    jshint: {
      files: [ '*.js' ],
      options: grunt.file.readJSON('.jshintrc')
    },
    clean: {
      src: 'test/tmp'
    },
    nodeunit: {
      tests: 'test/*_test.js'
    }
  })

  grunt.loadTasks('tasks')

  grunt.registerTask('copy', function() {

  })

  grunt.registerTask('default', ['jshint', 'test'])
  grunt.registerTask('test', ['clean', 'copy', 'nodeunit', 'clean'])
}