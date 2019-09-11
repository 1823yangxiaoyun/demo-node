#!/usr/bin/node

const Dog=require('./02-dog');
var taidi= new Dog('taidi',4);

var zanghao =new Dog ('zanghao',9);

taidi.on('bark',onBark);
zanghao.on('bark',onBark);
    function onBark(){
  console.log('%s barked  Energy :%s',this.getName(),this.getEnergy());
}

