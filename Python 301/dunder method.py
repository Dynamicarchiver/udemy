class Animal:
    fur_color = "Orange"


    def __init__(self, fur_color):
        self.fur_color = fur_color

    def speak(self):
        raise NotImplementedError

    def eat(self):
        print("I am eating yum yum yum")

    def chase(self, animal="Gazalle"):
        print(f"I am chasing a {animal}")

    def get_fur_color(self):
        print(f"Getting fut_color {self.fur_color}")


# class Tiger(Animal):
#     pass


# class Tiger(Animal):
#     def speak(self):
#         print("They are greattttttttttttttttt")

class HouseCat(Animal):
    def __init__(self, fur_color):
        super().__init__(fur_color)
        print("Fur color was saved to the class object")
    # def speak(self):
    #     print("Meeeeeeeeeeeeeeeow")
    # def eat(self):
    #     super().eat()
    #     print("I am eating something")
    
    # def chase(self, animal):
    #     super().chase(animal)
    #     print(animal, "was caught")

cat = HouseCat("Grey")
cat.get_fur_color()
# cat.speak()
# cat.eat()
# cat.chase("mice")