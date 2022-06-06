const menu = {
    _meal: "",
    _price: 0,
    //Let set the new value of meal only if it's a string.
    set meal(mealToCheck) {
        if (typeof mealToCheck === "string") {
            return (this._meal = mealToCheck);
        }
    },
    //Let set the new value of price only if it's a number.
    set price(priceToCheck) {
        if (typeof priceToCheck === "number") {
            return (this._price = priceToCheck);
        }
    },
    //If both setters are true, then return a message using them, otherwise return message saying the values are wrong.
    get todaysSpecial() {
        if (this._meal && this._price) {
            return `'s Special is ${this._meal}, for just ${this._price}£!!`;
        } else {
            return "Meal and Price wasn't entered correctly!!";
        }
    }
};

//Array for the meal options and respective prices.
let meals = [
    {/*1*/name: "Pizza", price: 9},
    {/*2*/name: "Steak", price: 13},
    {/*3*/name: "Pie", price: 11},
    {/*4*/name: "Roast", price: 14},
    {/*5*/name: "Moussaka", price: 9},
    {/*6*/name: "Lasagne", price: 10},
    {/*7*/name: "Tacos", price: 9}
];

//Shuffle function, creates two variables.
const shuffle = (array) => {
    let currentIndex = array.length,
        randomIndex;
    //The function starts from the array length and ends when reaches 0
    while (currentIndex !== 0) {
        //Assigns a random number to the variable, and each time it runs, it lowers the max number by 1.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        //It swaps the current array element, with the one equivalent to the random number index.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex]
        ];
    }
    return array;
}

meals = shuffle(meals);
const dayOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

//I've created a for loop to go through the new shuffled array.
for (let i = 0; i < meals.length; i++) {
    //In here I'm saying that if the number of meals is equal to the week days, the weekly menu will be printed.
    if (meals.length === dayOfTheWeek.length) {
        menu.meal = meals[i].name;
        menu.price = meals[i].price;
        console.log(dayOfTheWeek[i] + menu.todaysSpecial);
        //If the meals are less, it will print how many need to be added.
    } else if (meals.length < dayOfTheWeek.length) {
        console.log(`You need to add ${Math.abs(meals.length - dayOfTheWeek.length)} meal(s) to the list!!!`)
        break;
        //If the meals are more, than it will print how many need to be removed.
    } else if (meals.length > dayOfTheWeek.length) {
        console.log(`You need to remove ${Math.abs(meals.length - dayOfTheWeek.length)} meal(s) from the list!!!`)
        break;
    }
}
