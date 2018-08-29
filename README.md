# Vuex Logger Plugin

🖍 Simplest & Fastest Vuex Mutation Logger Plugin

Mutations are logged in the format of `'MUTATION {mutation.type} , {mutation.payload}'`

## Install

```
npm install --save vuex-logger-plugin
```

## Usage

```
import Vue from 'vue';
import Vuex from 'vuex';
import VuexLoggerPlugin from 'vuex-logger-plugin'

Vue.use(Vuex);
const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    ...
  },
  strict: debug,
  plugins: debug ? [VuexLoggerPlugin] : [],
});
```

## Demo

Here is a quick example demo with a simple Router Store

![demo](https://raw.githubusercontent.com/JorgeCoke/vuex-logger-plugin/master/demo.gif)