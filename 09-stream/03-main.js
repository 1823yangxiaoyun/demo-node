#!/usr/bin/node


const Read = require('stream').Readable;

function MyReadable(){

    Read.call(this);
    var c ='a'.charCodeAt(0);
}

MyReadable
    this._read=(){
      this.push(String.fromCharCode(c++))
    }


MyReadable.prototype =Read.prototype;

module.exports =MyReadable;


module.exports=MyReadable;
