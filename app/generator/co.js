'use strict';

import co from 'co';

export function run(...rest) {
  rest.unshift(function* g(...args) {
    return yield args[0];
  });
  return co.apply(this, rest);
}

export function run2(...rest) {
  return co(function* g(...args) {
    return yield args[0];
  }, ...rest);
}

export function run3() {
  function* gg() {
    const a = yield Promise.resolve(7);
    const b = yield Promise.resolve(8);
    return a + b;
  }
  return co(function* g() {
    try {
      const a = yield Promise.resolve(5);
      // const b = yield Promise.reject('boom');
      console.log('aaaaaaaaaa');
      let c = yield* gg();

      return [a, c];
    } catch (e) {
      console.log('inner e', e);
    }
  });
}
