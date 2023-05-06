    var hour= document.getElementById("h");
var minute= document.getElementById("m");
var sec= document.getElementById("s");
var second=0;
var count1=0;
 var count2=0;

// setInterval(()=>{
//         if(second<60){
//             second++;
//             sec.innerText=second;
//         }
// },1000);
document.getElementById('start').addEventListener("click",()=>{
    alert("started!");
    tm= setInterval(stopWatch,100);
})
function stopWatch() {
            if(second<60){
                second++;
                if(second<10)
                sec.innerText="0"+second;
                else sec.innerText=second;
            }
            else {second=0;
                count1++;
                if(count1<10)
                minute.innerText="0"+count1;
                else minute.innerText=count1;
                if(count1==59){
                count2++;
                if(count2<10)
                hour.innerText="0"+count2;
                else hour.innerText=count2;
                count1=0;
                }
            }
}
document.getElementById('stop').addEventListener("click",()=>{
    alert("stopped!");
    window.clearInterval(tm);
     second=0;
     count1=0;
    count2=0;
})
document.getElementById('reset').addEventListener("click",()=>{
    alert("reset!");
    window.clearInterval(tm);
    sec.innerText="00";
    minute.innerText="00";
    hour.innerText="00";
    second=0;
    count1=0;
    count2=0;
})
