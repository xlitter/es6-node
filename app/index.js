'use strict';
import 'source-map-support/register';
import Symbols from './symbol/index';


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
