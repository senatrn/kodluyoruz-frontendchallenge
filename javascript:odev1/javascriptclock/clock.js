function showTime(){
    var date= new Date();
    var d=date.getDay();
    var h=date.getHours();
    var m=date.getMinutes();
    var s=date.getSeconds();
   
if(d==1){ d="Pazartesi";}
if(d==2){ d="Salı";}
if(d==3){ d="Çarşamba";}
if(d==4){ d="Perşembe";}
if(d==5){ d="Cuma";}
if(d==6){ d="Cumartesi";}
if(d==7){ d="Pazar";}

if(h<10){
    h="0"+h;
}
if(m<10){
    m="0"+m;
}
if(s<10){
    s="0"+s;
}


    var time=  h + ":" + m+ ":"+s +" "+ d ;

    document.getElementById("myClock").innerText=time;
    document.getElementById("myClock").textContent=time;
    setTimeout(showTime,1000);
  }
  showTime();

  var isim =prompt("Please write your name");
    document.getElementById("myName").innerHTML=isim;