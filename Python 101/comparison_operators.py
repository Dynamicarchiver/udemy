# can_code = False

# if can_code == True:
#     print("You can code")
# else:
#     print("You don't Know how to code yet")

# teacher = "kalob Taulien"

# if teacher.lower() == "kalob taulien":
#     print("Show the teacher portal")
# else:
#     print("You are a student. Welcome to Python 101")

# name = input("What is your name? ")
# if name.lower() == "bob":
#     print("Welcome Bob")
#     bring_food = "Pizza"
# elif name.lower() == "kalob":
#     print("Welcome to your teacher portal")
#     bring_food = "Tacos"
# else:
#     print("You are not bob get outta ghere")
#     bring_food = "Salmon"

# print(f"You are eating {bring_food}")

# if name != "bob":
#     print("You are not bob, get out of here")
# else:
#     print("Welcome Bobby boy")

vote_age = 18
age = input("How old are you")
age = int(age)
vote_diff = vote_age - age
if age >= 18:
    print("Congratulations you can vote")
elif age < 18:
    print(f"You cannot vote yet come back {vote_diff} years to come")