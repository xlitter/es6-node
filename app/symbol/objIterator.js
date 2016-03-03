'use strict';

function objIteratorOfGen(obj) {
  const result = obj || {};
  result[Symbol.iterator] = function* objIterator() {
    const keys = Object.getOwnPropertyNames(this);

    for (const k of keys) {
      yield [k, result[k]];
    }
  };
  return result;
}

function objIteratorOfCustom(obj) {
  const result = obj || {};

  result[Symbol.iterator] = function() {
    let idx = 0;
    const keys = Object.getOwnPropertyNames(this);
    const len = keys.length;

    return {
      next: () => {
        const k = keys[idx];
        return {
          value: [k, this[k]],
          done: idx++ === len
        };
      }
    };
  };

  return result;
}

const funcs = [objIteratorOfGen, objIteratorOfCustom];

/* eslint-disable no-console */
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
/* eslint-enable no-console */

export default { run };
