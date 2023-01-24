let countnum=document.getElementById("countnum")
let savedvalues=document.getElementById("savedvalues")
let count=0;
function increment(){
    count=count+1
    countnum.innerText=count
}
function Save(){
      let countstr=count + " - "
       savedvalues.innerText+=countstr      
       countnum.innerText=0;
       count=0;
}
