let btn=document.querySelector(".btn");
btn.addEventListener('click',()=>{
    let units=document.querySelector("#units").value;
    let bills=document.querySelector("#bills");
    let bill=0;
    if(units<=100){
        bill+=100*1.5;
    }else if(units<=200){
        bill+=(100*1.5)+(units-200)*2.5;
    }else if(units<=300){
        bill+=(100*1.5)+(100*2.5)+(units-300)*3.5;
    }else{
        bill+=(100*1.5)+(100*2.5)+(100*3.5)+(units-400)*4.5;
    }
    bills.innerText=`your bill amount mava ..${bill} Rs.`;
});