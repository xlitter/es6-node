'use strict';

import { run, run2, run3 } from './co';

class CO {

  run(...rest) {
    run(...rest).then(v => {
      console.log('run', v);
    }).catch(err => {
      console.log('run err', err);
    });
  }

  run2(...rest) {
    run2(...rest).then(v => {
      console.log('run2', v);
    }).catch(err => {
      console.log('run2 err', err);
    });
  }

  run3() {
    run3().then(v => console.log('run3', v)).catch(e => console.log('run3 err', e));
  }
}

export default new CO();
