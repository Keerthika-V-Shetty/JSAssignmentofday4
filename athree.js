//Imagine you are going out to do some grocery shopping.So you have an array called shoppingList with all the products you want to buy. Now that you are inside of the shop, you have a basket with all the products from your list, but you want to add a few more.Create a new array called shoppingBasket, that will be a copy of the shoppingList array, and add some new products into it.


let shoppingList = ["Carrot", "Radish", "Tomato", "Potato"];

let shoppingBasket = [];
shoppingBasket.push.apply(shoppingBasket,shoppingList);
shoppingBasket.push("Coriander", "Ginger");
console.log(shoppingBasket);