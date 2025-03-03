document.getElementById("Cashout-button").addEventListener("click", function(event){
event.preventDefault()
const pinNumber = document.getElementById("PIN-Num").value
  const convertedpin = parseFloat(pinNumber);
  const Amountnumber  =document.getElementById("Amount").value
  const convertedAmount = parseFloat(Amountnumber)
   const MinBlange = document.getElementById("min-balang").innerText;
   const convertedMinBlange = parseFloat(MinBlange);
   if(convertedpin === 1234){
      const sum = convertedAmount - convertedMinBlange ;
      document.getElementById("min-balang").innerText = sum ;
   }else{
    alert("Your pin number is incorrect")
   }
})