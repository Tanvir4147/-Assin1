function  GitInputValue (id){
 const value = document.getElementById(id).value;
  const convertedvalue = parseFloat(value);
   return convertedvalue ;
}

 function getConvertedAccountId (id){
   const Blance = document.getElementById(id).innerText;
   const convertedBlance = parseFloat(Blance);
   return convertedBlance;
 }