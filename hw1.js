var food = ['okra','carrots','kale','spinach','onion','apples','bananas','grapes','oranges']

food.pop();

food.push('strawberries');

console.log(food);

food.shift();

food.unshift('broccoli');

console.log(food);

var veggies = food.slice(0,5);

console.log(veggies);

var fruit = food.slice(5);

console.log(fruit);

food.splice(4,1);

food.splice(2,2,'brussel sprouts');

console.log(food);

//--------------

var text = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'

console.log(text[5]);

console.log(text[56]);

var lorem = text.slice(0,5);

var chores1 = 'clean, pay bills, groceries'

var chores2 = 'learn JS, doctors office, pick up kids'

var allChores = [];

var x = chores1.concat(', ',chores2)


allChores = x.split(',');

console.log(allChores);







