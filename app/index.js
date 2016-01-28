'use strict';

require('babel-register');
const Symbols = require('./symbol/index');


class App {

  runSymbol() {
    const symbols = new Symbols();
    symbols.objIterator();
  }
}

function init() {
  const app = new App();
  app.runSymbol();
}

init();

