class Animal:
    property1 = {
        'key1': 'Value 1'
    }
    list = ['Kane', 'Kalob', 'Gully']

    def add_Name(self, name):
        self.list.append(name)
        return self.list
    
    def removeName(self, name):
        self.list.remove(name)
    def method(self):
        print(self.list)

    @property
    def get_gully(self):
        return self.list[2]


the_animal = Animal()
print(the_animal.property1)
print(the_animal.list[1])
the_animal.method()

gully = the_animal.get_gully
print("The custest gato of all time is gully", gully)

the_animal.add_Name("Boluwatife")
print(the_animal.list)

the_animal.removeName("Kalob")
print(the_animal.list)
