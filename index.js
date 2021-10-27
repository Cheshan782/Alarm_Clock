/*Clock*/
function updateClock(){
    var now = new Date();
    var dname = now.getDay(),
        mo = now.getMonth(),
        dnum = now.getDate(),
        yr = now.getFullYear(),
        hou = now.getHours(),
        min = now.getMinutes(),
        sec = now.getSeconds(),
        pe = "AM";
        
        if(hou >= 12){
          pe = "PM";
        }
        if(hou == 0){
          hou = 12;
        }
        if(hou > 12){
          hou = hou - 12;
        }

        Number.prototype.pad = function(digits){
          for(var n = this.toString(); n.length < digits; n = 0 + n);
          return n;
        }

        var months = ["January", "February", "March", "April", "May", "June", "July", "Augest", "September", "October", "November", "December"];
        var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var ids = ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds", "period"];
        var values = [week[dname], months[mo], dnum.pad(2), yr, hou.pad(2), min.pad(2), sec.pad(2), pe];
        for(var i = 0; i < ids.length; i++)
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
  }

  function initClock(){
    updateClock();
    window.setInterval("updateClock()", 1);
  }
  
/*Alarm*/
var alarmSound = new Audio();
            alarmSound.src = 'Ring_Tone.mp3';
            var alarmTimer;
    
            function setAlarm(button) {
                var ms = document.getElementById('alarmTime').valueAsNumber;
                if(isNaN(ms)) {
                    alert('Invalid Date');
                    return;
                }
    
                var alarm = new Date(ms);
                var alarmTime = new Date(alarm.getUTCFullYear(), alarm.getUTCMonth(), alarm.getUTCDate(),  alarm.getUTCHours(), alarm.getUTCMinutes(), alarm.getUTCSeconds());
                
                var differenceInMs = alarmTime.getTime() - (new Date()).getTime();
    
                if(differenceInMs < 0) {
                    alert('Specified time is already passed');
                    return;
                }
    
                alarmTimer = setTimeout(initAlarm, differenceInMs);
                button.innerText = 'Cancel Alarm';
                button.setAttribute('onclick', 'cancelAlarm(this);');
            };
    
            function cancelAlarm(button) {
                clearTimeout(alarmTimer);
                button.innerText = 'Set Alarm';
                button.setAttribute('onclick', 'setAlarm(this);')
            };
    
            function initAlarm() {
                alarmSound.play();
                document.getElementById('alarmOptions').style.display = '';
            };
    
            function stopAlarm() {
                alarmSound.pause();
                alarmSound.currentTime = 0;
                document.getElementById('alarmOptions').style.display = 'none';
                cancelAlarm(document.getElementById('alarmButton'));
            };
    
            function snooze() {
                stopAlarm();
                alarmTimer = setTimeout(initAlarm, 300000); // 5 * 60 * 1000 = 5 Minutes
            };

