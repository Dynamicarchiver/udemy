class Animal:
    fur_color = "Orange"

    def speak(self):
        raise NotImplementedError

    def eat(self):
        pass

    def chase(self):
        pass


# class Tiger(Animal):
#     pass


# class Tiger(Animal):
#     def speak(self):
#         print("They are greattttttttttttttttt")

class HouseCat(Animal):
    def speak(self):
        print("Meeeeeeeeeeeeeeeow")

cat = HouseCat()
cat.speak()