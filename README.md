# Project 32 from the Full Stack Course, Meal Maker.

I created the app following the initial outline from the course, and then added a way to randomize the meals of the day with their
respective values. To achieve that, I created an array for the meal options, an array for the price options, and a variable that creates a
random number of the length of the meals array so that it stays updated automatically as I add or remove items from the list.

Since I want each meal to have the same price all the time they get selected, I used a single randomizer, so that each meal and price are
kept coupled by their index in the array, meals index 0 need to be used with price index 0, and so forth. To make it easier to track, I
added comments in the price array so that the name of the meal correlated it's next to it.