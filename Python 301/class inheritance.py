class Animal:
    fur_color = "Orange"

    def speak(self):
        print("Raawawwwwar")

    def eat(self):
        pass

    def chase(self):
        pass


class Tiger(Animal):
    pass


class Tiger(Animal):
    def speak(self):
        print("They are greattttttttttttttttt")

class HouseCat(Animal):
    def speak(self):
        print("Meow")

tiger = Tiger()
tiger.speak()
cat = HouseCat()
cat.speak()