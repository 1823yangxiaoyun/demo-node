#!/usr/bin/node


const Radio =  require('./04-radio'),
   log=   console.log;


const station={
  freq:'106.7',
  name:"music radio"
};


var radio =new Radio (station);

radio.on('play',(station)=>
    {
      log('%s FM  %s opend',station.name,station.freq);
      log('alalala....')
    });

radio.on('stop',(staion)=> {
  log('%s FM %s closed!',station.name,station.freq);
})
