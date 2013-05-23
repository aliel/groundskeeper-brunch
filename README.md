groundskeeper-brunch [![Build Status](https://api.travis-ci.org/aliel/groundskeeper-brunch.png)](https://travis-ci.org/aliel/groundskeeper-brunch)
====================

Brunch plugin to Clean javascript files, remove console.log ect... using [groundskeeper](https://github.com/Couto/groundskeeper).

## Installation

Install the plugin via npm with 
```
npm install --save groundskeeper-brunch
```

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

