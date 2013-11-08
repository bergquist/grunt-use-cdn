'use strict';
var assert = require('assert'),
  grunt = null

describe('', function() {
  beforeEach(function() {
    grunt = require('grunt');
    grunt.task.init([])
    grunt.config.init({})
    grunt.log.muted = true
    grunt.fail.errorcount = 0
    require('../tasks/usecdn')(grunt)
  })
})