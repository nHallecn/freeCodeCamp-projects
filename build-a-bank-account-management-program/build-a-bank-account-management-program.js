** start of script.js **

class BankAccount{
  constructor(){
    this.balance=0;
    this.transactions = [];
  }

  deposit(amount){
    if(amount >0){
      this.transactions.push({ type:"deposit", amount: amount});
      this.balance += amount;
      return `Successfully deposited $${amount}. New balance: $${this.balance}`;
    }
    return "Deposit amount must be greater than zero.";
  }

  withdraw(amount){
    if(amount >0 && amount <=this.balance){
      this.transactions.push({ type: "withdraw", amount: amount});
      this.balance -=amount;
      return `Successfully withdrew $${amount}. New balance: $${this.balance}`;
    }
    return "Insufficient balance or invalid amount.";
  }

  checkBalance(){
    return `Current balance: $${this.balance}`;
  }

  listAllDeposits() {
    const deposits = this.transactions
      .filter(t => t.type === "deposit")
      .map(t => t.amount);
    return `Deposits: ${deposits.join(",")}`;
  }

  listAllWithdrawals() {
    const withdrawals = this.transactions
      .filter(t => t.type === "withdraw")
      .map(t => t.amount);
    return `Withdrawals: ${withdrawals.join(",")}`;
  }
}

const myAccount = new BankAccount();

myAccount.deposit(200);
myAccount.withdraw(50);
myAccount.deposit(30);
myAccount.withdraw(20);
myAccount.deposit(60);

** end of script.js **

