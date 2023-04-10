
# try:
#     total = 1 / 0
#     print("Trying 1 / 0")
# except Exception:
#     total = 0


#     print(total)


num = input("What is a number")
try:
    num = int(num)
except Exception:
    num = "Unknown"
print(num)