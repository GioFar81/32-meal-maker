# Project 32 from the Full Stack Course, Meal Maker.

## Version 01.

This is the initial state of the app, as the course project requests. The app uses getters and setters to make sure that the values for the
variables are correct, and then print a log with the value entered.

## Version 02.

I added a way to randomize the meals of the day with their respective prices. To achieve that, I created an array for the meal options, an
array for the price options, and a variable that creates a random number of the length of the meal array so that it stays updated
automatically as I add or remove items from the list.

Since I want each meal to have the same price all the time they get selected, I used a single randomizer, so that each meal and price are
kept coupled by their index in the array, meal index 0 need to be used with price index 0, and so forth.

## Version 03.

To make it easier to track, I added comments all over the code and in the price array so that the name of the meal correlated it's next to
it. I've also added the README file (I wish I added it earlier, so that each git version had the proper update in here).

## Version 04.

In this version, I first planned to have a random daily meal that was able to be different for 7 times(days of the week). To be able to
achieve this, I looked for ways to remove the selected item from the list and then, when the list was empty, reset it, but I couldn't find
the way, so I ended up having the app creating a weekly list for the meals of the day, the log shows the weekly list combined with the
appropriate day of the week, and it also shows a warning message if the number of meals are more or less than 7 stating how many meals need
to be added or removed.

## Version 05.

Added a variable with the week list, and then changed the loop so that the same weekly menu gets shuffled and logged 4 times, right below
the week number.

## Version 06.

Added 3 more arrays with the weekly menu list, for a total of 4. Now the app takes each of the 4 arrays and shuffles them before logging the
result.