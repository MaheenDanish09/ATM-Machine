let currentBalance = 1000;
let correctPin = "1234";

// LOGIN
function login() {
    let userPin = document.getElementById("pin").value;

    if (userPin === correctPin) {
        document.getElementById("login").classList.add("d-none");
        document.getElementById("atm").classList.remove("d-none");
    } else {
        document.getElementById("login-msg").innerText = "Incorrect Pin!";
    }
}

// CHECK BALANCE
function checkBalance() {
    document.getElementById("text").innerText = "Current Balance: " + currentBalance + "$";
}

// DEPOSIT
function deposit() {
    let amount = Number(document.getElementById("amount").value);
    if (amount <= 0 || isNaN(amount)) {
        document.getElementById("text").innerText = "Enter a valid amount";
        return;
    } else {
        currentBalance += amount;
        document.getElementById("text").innerText = "Deposited: " + amount + "$";
        document.getElementById("amount").value = "";
    }
}

// WITHDRAW
function withdraw() {
    let amount = Number(document.getElementById("amount").value);

    if (amount <= 0 || isNaN(amount)) {
        document.getElementById("text").innerText = "Enter valid amount";
        return;
    }
    if (amount > currentBalance) {
        document.getElementById("text").innerText = "Insufficient Balance";
    } else {
        currentBalance -= amount;
        document.getElementById("text").innerText = "Withdrawn: " + amount + "$";
        document.getElementById("amount").value = "";
    }
}

