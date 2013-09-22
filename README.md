grunt-msbuild
=====================

```shell
npm install grunt-msbuild --save-dev
```

```js
grunt.loadNpmTasks('grunt-msbuild');
```

```js
msbuild: {
  options: {
    solution: '',
    mode: 'Release',
    website: true,
    destination: ''
  }
}
```

grunt wrapper for msbuild.
