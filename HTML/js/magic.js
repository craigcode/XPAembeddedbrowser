/*
    Functions to support interaction with a
    .Net embedded browser in Magic XPA
*/

// a sample object containing data to send to Magic
var magicPayload = {
  "message": "Hello from the Browser"
};

// raises an event in Magic utilising the browser.DocumentComplete event
function raiseMagicEvent(action){

  document.title = 'MAGIC_EVENT=' + action;
  document.location.href = '#';

}

// return the payload to Magic for a given action
function getPayload(action,options){
  if(action == 'sendMsg'){

    return magicPayload.message + ' @ '+ getCurrentTime();
  }
}

// handle specific named actions raised by Magic in the browser
function magicHandler(functionName, data){

  if(functionName == 'sayHello'){
    sayHello(JSON.parse(data).message);
  }

  if(functionName == 'changeBackground'){
    changeBackground(JSON.parse(data).color);
  }
}

// a sample function to display an alert
function sayHello(message){
  document.getElementById('messageFromMagic').innerHTML = message;
}

// a sample function to change the browser background
function changeBackground(color){
  document.body.style.backgroundColor = color;
}

// return a formatted current time string
function getCurrentTime(){

  var d = new Date();
  var hr = d.getHours();
  var min = d.getMinutes();
  if (min < 10) {
    min = "0" + min;
  }
  var sec = d.getSeconds();
  if (sec < 10) {
    sec = "0" + sec;
  }
  var ampm = hr < 12 ? "AM" : "PM";

  return hr + ":" + min + ":" + sec + " " + ampm;
}
