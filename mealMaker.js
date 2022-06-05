const menu = {
    _meal: "",
    _price: 0,
    //Let set the new value of meal only if it's a string.
    set meal(mealToCheck) {
        if (typeof mealToCheck === "string") {
            return this._meal = mealToCheck;
        }
    },
    //Let set the new value of price only if it's a number.
    set price(priceToCheck) {
        if (typeof priceToCheck === "number") {
            return this._price = priceToCheck;
        }
    },
    //If both setters are true, then return a message using them, otherwise return message saying the values are wrong.
    get todaysSpecial() {
        if (this._meal && this._price) {
            return `Today's Special is ${this._meal}, for just ${this._price}£!!`;
        } else {
            return "Meal and Price wasn't entered correctly!!";
        }
    }
};

//Arrays for the meal options and respective prices, also a constant to get a random number in the array range.
const meals = ["Pizza", "Steak", "Pie", "Roast", "Moussaka", "Lasagne", "Tacos"];
const prices = [/*Pizza*/9, /*Steak*/13, /*Pie*/11, /*Roast*/14, /*Moussaka*/9, /*Lasagne*/10, /*Tacos*/9];
const random = Math.floor(Math.random() * meals.length);

//Assigns a new random value from the arrays. I used a single randomizer so that you can combine a plate to its price by the index number.
menu.meal = meals[random];
menu.price = prices[random];

//Check if the number of items in the meals and prices array it's equal, and if it is, creates the menu of the day string.
if (meals.length === prices.length) {
    console.log(menu.todaysSpecial);
} else {
    console.log("The number of prices and meals don't match!!");
}
