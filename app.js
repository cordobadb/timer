let timer=null;let current=null;
const alarm=document.getElementById('alarm');
function startTimer(sec,id){
  stopTimer();
  current=document.getElementById(id);
  let r=sec;
  timer=setInterval(()=>{
    const m=String(Math.floor(r/60)).padStart(2,'0');
    const s=String(r%60).padStart(2,'0');
    current.textContent=`${m}:${s}`;
    if(r===0){clearInterval(timer);alarm.play();}
    r--;
  },1000);
}
function stopTimer(){if(timer){clearInterval(timer);timer=null;}}