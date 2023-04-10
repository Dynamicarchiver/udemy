class Animal:
    property1 = {
        'key1': 'Value 1'
    }
    list = ['Kane', 'Kalob', 'Gully']

    _like_this = "This is a private property"

the_animal = Animal()
print(the_animal.property1)
print(the_animal.list[1])