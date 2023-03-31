# def person(**kwargs):
#     print(kwargs)
#     print(type(kwargs))

#     if 'age' in kwargs:
#         print("Your age is ", kwargs.get("age"))

# person(name="Jacob", age=27, brain="Huge")


def order_pizza(name, address, **toppings):
    print(f"order is for {name}")
    print(f"ship it to {address}")
    price = 19.00
    for key, value in toppings.items():
        price = price + 2
    print(f"The total price is {price}")
    return price

order_pizza("Amanda", "Canada", jalapenos=True, extra_chesse=True,)