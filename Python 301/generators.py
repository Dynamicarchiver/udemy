def my_generator():
    for num in range(10):
        yield num ** num

all_numbers = list(my_generator())
print(all_numbers)
    
for big_num in my_generator():
    print(big_num)
