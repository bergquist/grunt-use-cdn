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
    solution: '',
    mode: 'Release',
    website: true,
    destination: ''
  }
}
```
This task will add a cdn url before each file that has been revisioned with grunt-filerev
