'use strict';

import fs from 'fs';

export function read(url){
  return new Promise((resolve, reject)=>{
    fs.exists(url, (isExists)=>{
      if(isExists){
        resolve(fs.createReadStream(url));
      } else {
        reject('file is not exists');
      }
    });
  });
}
