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


tiger = Animal()
tiger.speak()