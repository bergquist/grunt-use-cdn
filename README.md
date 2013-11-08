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
    options: {
      pattern: /\.css/gi,
      url: 'http://url.for.css'
    }
  }
  images: {
    options: {
      pattern: [ /\.jpg/gi, /\.png/gi, /\.gif/gi ]
    }
  }
}
```
This task will add a cdn url before each file that has been revisioned with grunt-filerev
