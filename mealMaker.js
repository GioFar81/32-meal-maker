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
    //If both setters are true, then return a message using them,
    // otherwise return a message saying the values are wrong.
    get todaySpecial() {
        if (this._meal && this._price) {
            return `'s Special is ${this._meal}, for just ${this._price}£!!`;
        } else {
            return "Meal and Price wasn't entered correctly!!";
        }
    },
};

//Array for the meal options and respective prices.
let meals0 = [
    {/*1*/name: "Pizza", price: 9 },
    {/*2*/name: "Steak", price: 11 },
    {/*3*/name: "Pie", price: 9 },
    {/*4*/name: "Roast", price: 12 },
    {/*5*/name: "Moussaka", price: 9 },
    {/*6*/name: "Lasagne", price: 8 },
    {/*7*/name: "Tacos", price: 8 },
];
let meals1 = [
    {/*1*/name: "Omelette", price: 7 },
    {/*2*/name: "Kebab", price: 10 },
    {/*3*/name: "Ratatouille", price: 8 },
    {/*4*/name: "Quiche", price: 8 },
    {/*5*/name: "Burgers", price: 11 },
    {/*6*/name: "Hot-Dogs", price: 8 },
    {/*7*/name: "Burritos", price: 9 },
];
let meals2 = [
    {/*1*/name: "Bourguignon", price: 10 },
    {/*2*/name: "Stew", price: 11 },
    {/*3*/name: "Fish&Chips", price: 12 },
    {/*4*/name: "Fried Chicken", price: 7 },
    {/*5*/name: "Cannelloni", price: 10 },
    {/*6*/name: "Crepes", price: 8 },
    {/*7*/name: "Gyros", price: 10 },
];
let meals3 = [
    {/*1*/name: "Greek Salad", price: 9 },
    {/*2*/name: "Seafood", price: 13 },
    {/*3*/name: "Falafel", price: 8 },
    {/*4*/name: "Wraps", price: 10 },
    {/*5*/name: "Souvlaki", price: 11 },
    {/*6*/name: "Shawarma", price: 10 },
    {/*7*/name: "Quesadilla", price: 9 },
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
        [
            array[currentIndex],
            array[randomIndex],
        ] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }
    return array;
};

let week = [
    "Week 1",
    "Week 2",
    "Week 3",
    "Week 4",
];
let all_meals = [
    meals0,
    meals1,
    meals2,
    meals3,
];
const dayOfTheWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];

// Shuffle the order of meal lists
shuffle(all_meals);

//I've created a for loop to go through the new shuffled array.
for (let w = 0; w < week.length; w++) {
    console.log("\n\n" + week[w] + "\n");
    let week_meals = shuffle(all_meals[w]);

    for (let i = 0; i < all_meals[w].length; i++) {
        //In here, I'm saying that if the number of meals is equal to the week days, the weekly menu will be printed.
        if (week_meals.length === dayOfTheWeek.length) {
            menu.meal = week_meals[i].name;
            menu.price = week_meals[i].price;
            console.log(dayOfTheWeek[i] + menu.todaySpecial);
            //If the meals are less, it will print how many need to be added.
        } else if (week_meals.length < dayOfTheWeek.length) {
            console.log(`You need to add ${Math.abs(week_meals.length - dayOfTheWeek.length)} meal(s) to the list!!!`);
            break;
            //If the meals are more, than it will print how many need to be removed.
        } else if (week_meals.length > dayOfTheWeek.length) {
            console.log(`You need to remove ${Math.abs(week_meals.length - dayOfTheWeek.length)} meal(s) from the list!!!`);
            break;
        }
    }
}