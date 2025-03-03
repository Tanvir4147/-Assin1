document.getElementById("Add-money").addEventListener("click",function(event){
    event.preventDefault();
   const amount = document.getElementById("amount").value;
    const convarator = parseFloat(amount)
    const pin  = document.getElementById("PIN").value;
     const convaratorPin = parseFloat(pin)
     const minbalang = document.getElementById("min-balang").innerText
     const convaratorminBlange = parseFloat(minbalang)
     console.log(convaratorminBlange)

    if(convaratorPin===1234){
        const sum = convaratorminBlange + convarator;
     document.getElementById("min-balang").innerText=sum;
    }else {
        console.log("no tomer kaj hoba na")
    }
    
})