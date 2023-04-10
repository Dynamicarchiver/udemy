num = input("Enter a number: ")
num2 = input("Enter a second number")

try:
    num = int(num)
    num2 = int(num2)
    total = num / num2
except ValueError:
    total = num,"or", num2, "are not a valid number"
except ZeroDivisionError:
    total = "Numbers could not be divided"

except Exception as e:
    print("Exception was caught")
    print(type(e))
    total = "There is an error somewhere"

print(total)