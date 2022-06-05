const menu = {
    _meal: "",
    _price: 0,

    set meal(mealToCheck) {
        if (typeof mealToCheck === "string") {
            return this._meal = mealToCheck;
        }
    },

    set price(priceToCheck) {
        if (typeof priceToCheck === "number") {
            return this._price = priceToCheck;
        }
    },

    get todaysSpecial() {
        if (this._meal && this._price) {
            return `Today's Special is ${this._meal}, for just ${this._price}£!!`
        } else {
            return "Meal and Price wasn't entered correctly!!"
        }
    }
};

const meals = ["Pizza", "Steak", "Pie", "Roast", "Moussaka", "Lasagne", "Tacos"];
const prices = [9, 13, 11, 14, 9, 10, 9];
const random = Math.floor(Math.random() * prices.length)

menu.meal = meals[random];
menu.price = prices[random];

console.log(menu.todaysSpecial);