items = ['one', 'two', 'three', 'Four', 'Five']

# for item in items:
#     if item == 'two' or item == 'Four':
#         continue
#     print(item)

# for item in items:
#     if item == "three":
#         break
#     print(item)

# num = 0
# while num <= 20:
#     num = num + 1
#     if num % 2 == 0:
#         continue
#     print(num)

num = 0
while num <= 1_000_000_000:
    num = num + 1
    if num == 13:
        break
    print(num)