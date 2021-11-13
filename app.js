// login button even handler
const loginBtn = document.getElementById("login_btn");
loginBtn.addEventListener("click", function(){
    const loginArea = document.getElementById("login_area");
    loginArea.style.display ="none";
    const transactionArea = document.getElementById("transaction_area");
    transactionArea.style.display = "block";
})

// deposit button even handler
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function(){
    const depositNumber = getInputNumber("deposit_amount");

    // const currentDeposit = document.getElementById("current_deposit").innerText;
    // const currentDepositNumber = parseFloat(currentDeposit);
    // const totalDeposit = depositNumber + currentDepositNumber;
    // document.getElementById("current_deposit").innerText = totalDeposit;
    updateSpanTag("current_deposit", depositNumber)
    // const currentBalance = document.getElementById("current_balance").innerText;
    // const currentBalanceNumber = parseFloat(currentBalance);
    // const totalBalance = depositNumber + currentBalanceNumber;
    // document.getElementById("current_balance").innerText = totalBalance;
    updateSpanTag("current_balance", depositNumber)

    document.getElementById("deposit_amount").value = "";
})

// withdraw button even handler
const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click", function(){
    const withdrawNumber = getInputNumber("withdraw_amount")
    
    updateSpanTag("current_withdraw", withdrawNumber);
    updateSpanTag("current_balance", -1 * withdrawNumber);
    document.getElementById("withdraw_amount").value = "";
   
})

function getInputNumber(id){
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;  
}

function updateSpanTag(id, depositNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = depositNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;
}