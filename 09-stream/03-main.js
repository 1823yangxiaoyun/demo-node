#!/usr/bin/node


const Read = require('stream').Readable;

function MyReadable(){

    Read.call(this);
    var c ='a'.charCodeAt(0);
};
MyReadable.prototype=Read.prototype;

MyReadable
    this._read=(){
      this.push(String.fromCharCode(c++))
    }




module.exports=MyReadable;
