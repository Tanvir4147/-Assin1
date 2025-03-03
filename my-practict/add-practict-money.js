 document.getElementById("Add-money").addEventListener("click",function(event){
 event.preventDefault()
 const Amount = document.getElementById("amount").value ;
 const converterAmount = parseFloat(Amount)
 const PINNumber = document.getElementById("PIN").value ;
 const converterPINNumber = parseFloat(PINNumber);
 const minBalange = document.getElementById("min-balang").innerText ;
 const converterMinBalange = parseFloat(minBalange);
   if(converterPINNumber ===1234){
    const sum = converterAmount + converterMinBalange ;
    document.getElementById("min-balang").innerText= sum;
   }else{
    console.log("tomer condation vul")
   }
 })