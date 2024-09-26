

let hour = document.getElementById("hour");
let minute = document.getElementById('minute');
let second = document.getElementById('second');
let ampm = 'PM'
function updateTime(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds()
    
    
  if(h>12){
    h= h-12;
    ampm  = 'AM'
  }

 h = h<10 ? "0"+h:h
 m = m<10 ? "0"+m:m;
 s = s<10 ? "0"+s:s;
    hour.textContent = h;
    minute.textContent = m;
    second.textContent = s;
    setTimeout(()=>{
        updateTime()
    },1000)
    
}
updateTime()