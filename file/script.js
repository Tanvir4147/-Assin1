document.getElementById('login-btn').addEventListener("click",function(event){
   event.preventDefault()
   const AccountInput = document.getElementById("Account-input").value ;
    const PIN = document.getElementById("PIN").value;
     const converted = parseInt(PIN)
if(AccountInput.length === 11){
    if(converted === 1234){
        window.location.href="./main.html"
    }else{
        alert("no")
    }
  
}else{
    alert("number thek nay")
 }

    
})
