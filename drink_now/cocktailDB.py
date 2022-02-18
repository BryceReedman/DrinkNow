import urllib
from itertools import zip_longest

import requests


class Drink:
    pass


def getDrinks(link):
    CDB_response = requests.get(link)
    CBD_json = CDB_response.json()

    drinks = []
    if CBD_json.get('drinks') is None:
        return None

    for drink in CBD_json.get('drinks'):
        drink_obj = Drink()
        drinks.append(drink_obj)

        drink_obj.id = drink.get('idDrink')
        drink_obj.name = drink.get('strDrink')
        drink_obj.type = drink.get('strAlcoholic')
        drink_obj.instructions = drink.get('strInstructions')
        drink_obj.image_url = drink.get('strDrinkThumb')

        ingredients = []
        measurements = []
        for key, value in drink.items():
            if "Ingredient" in key and value is not None and value != '':
                ingredients.append(value)
            elif "Measure" in key and value is not None and value != '':
                measurements.append(value)

        drink_obj.recipe = {}
        for ingredient, measurement in zip_longest(ingredients, measurements):
            drink_obj.recipe[ingredient] = measurement

    return drinks


def search_by_name(name):
    return getDrinks(f'http://www.thecocktaildb.com/api/json/v1/1/search.php?s={urllib.parse.quote(name)}')


def search_by_ingredient(name):
    return getDrinks(f'http://www.thecocktaildb.com/api/json/v1/1/search.php?i={urllib.parse.quote(name)}')


def search_by_ID(name):
    return getDrinks(f'http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i={urllib.parse.quote(name)}')


def search_by_multi_ingredient(ingredients):
    link = 'http://www.thecocktaildb.com/api/json/v1/1/filter.php?i='
    for ingredient in ingredients:
        link = link + ingredient.replace(" ", "_") + ','

    link = link[:-1]
    return getDrinks(urllib.parse.quote(link))

def search_by_popular():
    return getDrinks("http://www.thecocktaildb.com/api/json/v1/1/popular.php")


