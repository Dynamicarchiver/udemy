import requests

while True:
    pokeman = input("What pokeman do you want to find? ")
    
    pokeman = pokeman.lower()

    if pokeman == "quit":
        break

    url = f"https://pokeapi.co/api/v2/pokemon/{pokeman}"

    req = requests.get(url)
    if req.status_code == 200:
         pokemon = req.json()
    print(f"Name is \t\t {pokemon['name']}")
    print("Abilities:")
    for ability in pokemon['abilities']:
        print(ability['ability']['name'])
    
    else:
        print("Pokemon not found")



