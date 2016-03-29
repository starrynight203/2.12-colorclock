(function(){
  'use strict';
  /*console.log(Date());*/

  setInterval(function(){
    var that = this;
    // console.log(Date());
    var clock = document.getElementById('clock');
    var timerbar = document.getElementById('timerbar');
    var time = new Date();
    var hour = time.getHours();
    /*console.log(hour);*/
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    //console.log(seconds);

    if (hour < 10) {
      hour = '0' + hour;
    }

    if (minutes < 10) {
      minutes = '0' + minutes;
    }

    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    // console.log(seconds);
    var percentage = seconds/60;
    //console.log(percentage);
    timerbar.style.width = 500*percentage + 'px';

    var h = hour.toString(16);
    var m = minutes.toString(16);
    var s = seconds.toString(16);
    // console.log(h + m + s);
    document.body.style.backgroundColor = '#F' + s; // if s equals 30, then this changes the background color to #AA3300; we're using the shorthand #A30 which is converted to #AA3300 by the browser

    if (clock.parentElement.querySelector(':hover') === clock) {
      // console.log('text');
      var x = s[0];
      var y = s[1];
      //console.log(x + 'and' + y)
      clock.textContent = '#FF:' + x + x + ':' + y + y;
    } else {
      clock.textContent = hour + ":" + minutes + ":" + seconds;
    }

    //clock.textContent = Date();
    // clock.textContent = hour + ":" + minutes + ":" + seconds;
  },1000)








})();
