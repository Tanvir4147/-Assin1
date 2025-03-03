 document.getElementById("Add-money").addEventListener("click", function(event){
    event.preventDefault()
    const amount = GitInputValue("amount")
    const pin = GitInputValue("PIN")
    const Balance =  getConvertedAccountId("min-balance")
    const AccountNum = document.getElementById("Account-input").value ;
    if(AccountNum.length === 11){
        if(pin === 1234){
        const  sum = amount + Balance ;
        document.getElementById("min-balance").innerText =sum;
        }else{
            console.log("pin number incorrect")
        }
    }else{
        console.log("Account number incorrect ")
    }

    
 })