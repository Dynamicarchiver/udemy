import random

while True:
    my_answer = input("Choose rock, paper or scissors ")
    my_answer = my_answer.lower()

    if my_answer == "quit":
        break

    answers = ['rock', 'paper', 'scissors']
    for ans in answers:
        if my_answer != ans:
            print("Please choose a correct answer")
        continue

    computer_answer = random.choice(["rock", "paper", "scissors"])

    print(f"Computer choose: {computer_answer}")

    if my_answer == computer_answer:
        print("You tied")
        continue
    elif my_answer == "Paper" and computer_answer == "rock":
        print("YOU Win!")
        break
    elif my_answer == "rock" and computer_answer == "scissors":
        print("YOU Win!")
        break
    elif my_answer == "scissors" and computer_answer == "paper":
        print("YOU Win!")
        break
    else:
        print("You lose. Try again")


