//complete this code
class Animal {
	constructor(species)
	this.species = species
	get species(){
		return this.species
	}
	makeSound(){
		console.log(`The ${this.species} makes a sound`)
	}
}

class cat extends Animal {

	constructor(){
		super(species)
	}
	purr(){
		console.log("purr")
	}
}

class Dog extends Animal {
	constructor(){
		super(species)
	}
	bark(){
		console.log("woof")
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
