grunt-use-cdn
=====================

```shell
npm install grunt-use-cdn --save-dev
```

```js
grunt.loadNpmTasks('grunt-use-cdn');
```

```js
use-cdn: {
  options: {
    url: 'http://some.static.url/content'
  },
  css: {
    extension: 'css',
    options: {
      url: 'http://url.for.css'
    }
  }
  images: {
    extension: [ 'png', 'jpg', 'gif' ]
  }
}
```
This task will add a cdn url before each file that has been revisioned with grunt-filerev
