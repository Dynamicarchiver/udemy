# with open("email.txt", "w") as file:
#     file.write("email1@gmail.com \nemail2@gmail.com \nemail3@gmail.com \nkalob@gmail.com \njon@gmail.com \ngully@hotmail.com")

with open('email.txt', 'r') as emy:
    emy = emy.readlines()

for e in emy:
    # print("Looking for a hotmail account")
    if "gmail" in e:
        print(e.rstrip())