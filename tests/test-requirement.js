'use strict';
var assert = require('assert'),
  grunt = null

describe('use cdn grunt task', function() {
  beforeEach(function() {
    grunt = require('grunt');
    grunt.task.init([])
    grunt.config.init({})
    grunt.log.muted = true
    grunt.fail.errorcount = 0
    require('../tasks/usecdn')(grunt)
  })

  describe('without grunt.filerev.summary', function() {
    beforeEach(function() {
      grunt.filerev = {
        summary: undefined
      }
    })

    it('should fail', function() {
      grunt.task.run('use-cdn')
      grunt.task.start()
      assert.equal(grunt.fail.errorcount, 1)
    })
  })

  describe('with grunt.filerev.summary', function() {
    beforeEach(function() {
      grunt.filerev = {
        summary: {
        'image.png': 'image.t5fvco4.png',
        'script.js': 'script.7jeoe.png'
        }
      }
    })

    it('should work just fine', function() {
      grunt.task.run('use-cdn')
      grunt.task.start()
      assert.equal(grunt.fail.errorcount, 0)
    })
  })
})