var countDownDate=new Date("Mar 3,2024 13:54").getTime();
var x=setInterval(function(){
    var now=new Date().getTime;
    var distance=countDownDate-now;
    var days=math.floor(distance/(1000*60*60*24));
    var hours=math.floor((distance%(1000*60*60*24))/(1000*60*60));
    var minutes=math.floor((distance%(1000*60*60))/(1000*60));
    var seconds=math.floor((distance%(1000*60))/1000);
document.getElementById("demo").innerHTML=days+"d"+hours+"h"+minutes+"m"+seconds+"s";
if(distance<0){
    clearInterval(x);
    document.getElementById("demo").innerHTML="EXPIRED";
}
},1000);