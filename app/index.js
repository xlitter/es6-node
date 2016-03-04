'use strict';
import 'source-map-support/register';
import Symbols from './symbol/index';
import coc from './generator/index';
import readImage from './readImage/index';

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
  }
  
  read(url){
    readImage.read(url);
  }
}

function init() {
  const imageUrl = 'C:/Users/15030774/Pictures/000000000104507403_1_800x800(2).jpg';
  const app = new App();
  app.runSymbol();
  app.runCo();
  app.read(imageUrl)
}

init();
