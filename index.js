var Dog = require('./Dog');
var Cat = require('./Cat')
var Mouse = require('./Mouse')


var dog = new Dog('Tom');
var cat = new Cat('Jerry')
var mouse = new Mouse("Mikey")

cat.eat(mouse)
console.log(cat)

try {
	cat.eat(dog)	
} catch (error) {
	console.log('Error while cat eating a dog')
}


dog.eat(cat);
console.log(dog);

console.log("Rapper pho-ri-phai")