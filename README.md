groundskeeper-brunch [![Build Status](https://api.travis-ci.org/aliel/groundskeeper-brunch.png)](https://travis-ci.org/aliel/groundskeeper-brunch)
====================

> Brunch plugin to remove console statements, debugger and specific blocks of code using [groundskeeper](https://github.com/Couto/groundskeeper).


## Installation

Install the plugin via npm with 
```
npm install --save groundskeeper-brunch
```

If you are using [uglify-js-brunch](https://github.com/brunch/uglify-js-brunch) or other JS obfuscation packages make sure that `groundskeeper-brunch` is defined **before** them in your `package.json`.

## Usage

To specify groundskeeper options, use `config.plugins.groundskeeper` object, for example:

```coffeescript
config =
  plugins:
    groundskeeper:
      console: true,                          // Keep console logs
      debugger: true                          // Keep debugger; statements
      pragmas: ['validation', 'development'], // Keep pragmas with the following identifiers
      namespace: 'App.logger'                 // Besides console also remove functions in the given namespace,
      replace: '0'
```
See [groundskeeper](https://github.com/Couto/groundskeeper) for more options

