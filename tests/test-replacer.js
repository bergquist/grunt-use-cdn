'use strict';
var assert = require('assert')
var replacer = require('../libs/replacer').create('//static.com')

describe('replacer', function() {
  describe('with relative paths', function() {
    before(function() {
      this.summary = {
        '/static/image.png': '/static/image.2awfa3.png'
      }
      this.result = replacer.prefix(this.summary)
    })

    it('image.png should have cdn', function() {
      assert.equal(this.result['/static/image.png'], '//static.com/static/image.2awfa3.png')
    })
  })

  describe('with static paths', function() {
    before(function() {
      this.summary = {
        'static/script.js': 'static/script.fqwert.js'
      }
      this.result = replacer.prefix(this.summary)
    })

    it('script.js should have cdn', function() {
      assert.equal(this.result['static/script.js'], '//static.com/static/script.fqwert.js')
    })
  })
})