class Bank:

    def __init__(self, initial_amount=0.00):
        self.balance = initial_amount
    
    def log_transaction(self, transaction_string):
        with open("transactions.txt", "a") as file:
            file.write(f"{transaction_string}\n")

    def withdrawal(self, amount):
        try:
            amount = float(amount)
        except ValueError:
            amount = 0
        if amount:
            self.balance = self.balance - amount
            self.log_transaction(f"Withdraw ${amount} with a balance of ")
    def deposit(self, amount):
        try:
            amount = float(amount)
        except ValueError:
            amount = 0
        if amount:
            self.balance = self.balance + amount
            self.log_transaction(f"Deposited ${amount}")
account = Bank(500.00)
while True:
    action = input("What kind of action do you want to take? ")

    if action == "quit":
        print("Leaving the ATM")
        break
    if action in ["withdrawal", "deposit"]:
        if action == "withdrawal":
            money = input("How much do you want to take out? ")
            account.withdrawal(money)

        else:
            money = input("How much do you want to put in? ")
            account.deposit(money)
    else:
        print("That is not a valid action. You can only deposit or withdraw")

        print(f"Your balance is {account.balance}")
