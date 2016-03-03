'use strict';
import 'source-map-support/register';
import Symbols from './symbol/index';
import coc from './generator/index';

class App {

  runSymbol() {
    const symbols = new Symbols();
    symbols.objIterator();
  }

  runCo() {
    coc.run(new Promise(resolve => {
      console.log('run promise 1');
      resolve(3);
    }).then(v => {
      console.log('run promise 2');
      return 4 * v;
    }));
    coc.run2(function* g() {
      console.log('run2 gen 1');
      return 13;
    }());
    coc.run3();
  }
}

function init() {
  const app = new App();
  app.runSymbol();
  app.runCo();
}

init();
