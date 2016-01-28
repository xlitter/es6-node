'use strict';

function objIteratorOfGen(obj) {
  const result = obj || {};
  result[Symbol.iterator] = function* objIterator() {
    const keys = Object.getOwnPropertyNames(this);

    for (const k of keys) {
      yield [k, result[k]];
    }
  }.bind(result);
  return result;
}

function objIteratorOfCustom(obj) {
  const result = obj || {};

  result[Symbol.iterator] = () => {
    let idx = 0;
    const keys = Object.getOwnPropertyNames(result);
    const len = keys.length;

    return {
      next: () => {
        const k = keys[idx];
        return {
          value: [k, result[k]],
          done: idx++ === len
        };
      }
    };
  };

  return result;
}

const funcs = [objIteratorOfGen, objIteratorOfCustom];

function run() {
  for (const fn of funcs) {
    console.log(fn.name, '-----');
    const iterObj = fn({
      a: 1,
      b: 3,
      c: 4
    });

    for (const [k, v] of iterObj) {
      console.log(`k=${k}, v=${v}`);
    }

    console.log('------------');
  }
}

exports.run = run;
