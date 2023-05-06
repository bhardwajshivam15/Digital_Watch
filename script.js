function displayTime() {
    const hour = document.getElementById("b1");
    const minute = document.getElementById("b2");
    const second = document.getElementById("b3");
    const mode = document.getElementById("b4");
    const now = new Date();
    const hours = now.getHours()>9?now.getHours():"0"+now.getHours();
    if(hours>=12) mode.innerHTML="PM";
    else mode.innerHTML="AM";
    const newhour = (hours>12?Number(hours)-12:hours);
    hour.innerHTML = newhour>9?newhour:"0"+newhour;
    minute.innerHTML=now.getMinutes()>9?now.getMinutes():"0"+now.getMinutes();
    second.innerHTML=now.getSeconds()>9?now.getSeconds():"0"+now.getSeconds();
  }
setInterval(displayTime, 1);
  