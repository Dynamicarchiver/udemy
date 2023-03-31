def add_Numbers(name, *args):
    total = 0
    for num in args:
        total = total + num
    print(name, total)
    # print(args)


add_Numbers("The class is a total of", 2,3, 5, 6, 7)