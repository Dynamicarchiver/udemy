class Animal:
    fur_color = "Orange"

    def speak(self):
        raise NotImplementedError

    def eat(self):
        print("I am eating yum yum yum")

    def chase(self, animal="Gazalle"):
        print(f"I am chasing a {animal}")


# class Tiger(Animal):
#     pass


# class Tiger(Animal):
#     def speak(self):
#         print("They are greattttttttttttttttt")

class HouseCat(Animal):
    def speak(self):
        print("Meeeeeeeeeeeeeeeow")
    def eat(self):
        super().eat()
        print("I am eating something")
    
    def chase(self, animal):
        super().chase(animal)
        print(animal, "was caught")

cat = HouseCat()
cat.speak()
cat.eat()
cat.chase("mice")