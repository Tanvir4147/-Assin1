document.getElementById("Cashout").style.display = "none"

document.getElementById("add-money-box").addEventListener("click",function(event){
    event.preventDefault()
     document.getElementById("Add-money").style.display = "none";
     document.getElementById("Cashout").style.display = "block"
})
document.getElementById("Cashout-box").addEventListener("click",function(event){
    event.preventDefault()
     document.getElementById("Add-money").style.display = "block";
     document.getElementById("Cashout").style.display = "none"
})