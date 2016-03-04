'use strict';

import http from 'http';
import {read} from './read';

class ReadImage {
  read(url) {
    http.createServer((req, rsp) => {
      read(url).then((stream) => {
        rsp.statusCode = 200;
        stream.pipe(rsp);
      }, () => {
        rsp.statusCode = 404;
        rsp.end();
      });
    }).listen(5109, () => { console.log('read image server start port 5109') });
  }
}

export default new ReadImage();
