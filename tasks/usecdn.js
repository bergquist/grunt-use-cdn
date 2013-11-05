'use strict';

module.exports = function(grunt) {
  grunt.registerTask('use-cdn', '', function() {

    console.log('USE CDN GOT DAMNIT!')
    if (!(grunt.filerev || grunt.filerev.summary)) {

      grunt.fail.fatal('missing grunt.filerev.summary. Make sure you run grunt-filerev before this')
    }
  });
}