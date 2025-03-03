 document.getElementById("login-button").addEventListener("click",function(event){
     event.preventDefault()
     const Accountinputfil = document.getElementById("Account-inputfil").value ;
      const pinNum = document.getElementById('PIN-Num').value;
      const converted = parseFloat(pinNum)
       if(Accountinputfil.length === 11){
            if(converted === 1234){
                window.location.href="./min-practict.html"
            }else{
                console.log("Pin num vul")
            }
       }else{
        console.log("Account num not Right")
       }
 })