let timer=null;let currentDisplay=null;
const alarm=document.getElementById('alarm');
function startTimer(seconds, displayId){
  stopTimer();
  currentDisplay=document.getElementById(displayId);
  let remaining=seconds;
  timer=setInterval(()=>{
    const m=String(Math.floor(remaining/60)).padStart(2,'0');
    const s=String(remaining%60).padStart(2,'0');
    currentDisplay.textContent=`${m}:${s}`;
    if(remaining===0){clearInterval(timer);alarm.play();}
    remaining--;
  },1000);
}
function stopTimer(){if(timer){clearInterval(timer);timer=null;}}