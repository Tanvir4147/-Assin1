document.getElementById("Cashout").style.display="none"
document.getElementById("add-money-box").addEventListener("click", function () {
  document.getElementById("Cashout").style.display="none"
  document.getElementById("Add-money").style.display ="block"
})
document.getElementById("Cashout-box").addEventListener("click", function () {
  document.getElementById("Cashout").style.display="block"
  document.getElementById("Add-money").style.display ="none"
})