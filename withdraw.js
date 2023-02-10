document.getElementById("withdrawButton").addEventListener("click",function(){
    
    const withdrawInput = getInputValue("inputWithdraw");


    
    const totalWithdraw =getElementValue("withdraw-total");
    
    const currentBalance = getElementValue("balance-total");

    if(withdrawInput<= currentBalance){
        const newWithdraw = withdrawInput + totalWithdraw;

      
    
        setElementValue("withdraw-total",newWithdraw);



    const newBalance = currentBalance - withdrawInput;

    setElementValue("balance-total",newBalance);
  
}
else{
    alert("your balance is low");
}
    
    
})