    var sec= document.getElementById("h");
var minute= document.getElementById("m");
var msec= document.getElementById("s");
var milisecond=0;
var count1=0;
 var count2=0;
 let tm= null;

// setInterval(()=>{
//         if(second<60){
//             second++;
//             sec.innerText=second;
//         }
// },1000);
document.getElementById('start').addEventListener("click",()=>{
  //  alert("started!");
   if(tm)clearInterval(tm);
    tm= setInterval(stopWatch,10);
})
function stopWatch() {
       milisecond++;
       if(milisecond==100){
        count1++;
       }
       milisecond=milisecond%100;
       if(count1==60){
        count2++;
       }
       count1=count1%60;
       if(milisecond<10)
       msec.innerText="0"+milisecond;
       else msec.innerText=milisecond;
       if(count2<10)
       sec.innerText="0"+count2;
       else sec.innerText=count2;
       if(count1<10)
       minute.innerText="0"+count1;
       else minute.innerText=count1;
    }
document.getElementById('stop').addEventListener("click",()=>{
  //  alert("stopped!");
    clearInterval(tm);
    //  second=0;
    //  count1=0;
    // count2=0;
})
document.getElementById('reset').addEventListener("click",()=>{
   // alert("reset!");
    clearInterval(tm);
    milisecond=0;
    count1=0;
    count2=0;
    msec.innerText="00";
    minute.innerText="00";
    sec.innerText="00";
    
})
