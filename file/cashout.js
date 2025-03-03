  document.getElementById("cashout-btn").addEventListener("click", function(event){
     event.preventDefault()
      const pin = document.getElementById("cashout-pin").value ;
      const convartadepin = parseFloat(pin);
      const  amount = document.getElementById("cashout-amount").value;
      const convartadeamount = parseFloat(amount)
      const minbalang = document.getElementById("min-balang").innerText
     const convaratorminBlange = parseFloat(minbalang)
      if(convartadepin === 1234){
        const sum = convartadeamount - convaratorminBlange;
        minbalang = document.getElementById("min-balang").innerText =sum;

      }else{
        alert("enter valed pin")
      }
  })