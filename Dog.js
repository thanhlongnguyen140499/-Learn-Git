function Dog() {
	// hello dogg
	this.stomach = [];
}

Dog.prototype.eat = function(cat) {
	this.stomach.push (cat)
};
module.exports = Dog