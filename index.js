const heroes = [
	'Rexxar',
	'Thrall',
	'Garrosh',
	"Gul'dan",
	'Uther',
	'Jaina',
	'Malfurion',
	'Illidan',
	'Anduin',
	'Maiev'
];

console.log(heroes.length);

for (let hero of heroes) {
	console.log(hero);
}

heroes.push('Varian');
console.clear();

for (let hero of heroes) {
	console.log(hero);
}

//Bad perfomance function, it searches the entire array looking for the specified value, so if theres a big array it will cause throttling
const thrall = heroes.find((hero) => hero === 'Thrall');
console.log(thrall);

//Also bad for perfomance solution, it will delete array elements between an interval then reallocate all others elements into new positions
heroes.splice(11, 11);
console.clear();

for (let hero of heroes) {
	console.log(hero);
}

//Matrix {
console.clear();
const cards = [
	['Dreamwalker', 8, 8, 8],
	['Angry Murloc', 1, 1, 1],
	['Old Farmer', 2, 3, 3]
];

for (let card of cards) {
	console.log(card);
}
//}

//Stack {
//Stack is a linear structure, if I need to remove the last element, I need to unstack all others
class Stack {
	constructor() {
		this.data = [];
		this.top = -1;
	}

	push(value) {
		this.top++;
		this.data[this.top] = value;
		return this.data;
	}

	pop() {
		if (this.top < 0) return undefined;
		const poppedTop = this.data[this.top];
		delete this.data[this.top];
		this.top--;
		return poppedTop;
	}

	peek() {
		return this.top >= 0 ? this.data[this.top] : undefined;
	}
}

const stack = new Stack();

stack.push('Player one attacked Player two');
stack.push('Player two attacked Player one');
console.log(stack.push('Player one dodged Player two attack'));

console.log(stack.peek());

stack.pop();
console.log(stack.pop());

console.log(stack.peek());
//}

//Queue {
//Fifo, First in first out, first person to enter queue is the first to leave
class Queue {
	constructor() {
		this.data = [];
	}

	enqueue(person) {
		this.data.push(person);
		console.log(`${person} has enter the lobby queue.`);
	}

	dequeue() {
		const person = this.data.shift();
		console.log(`${person} has left the lobby queue.`);
	}
}

const queue = new Queue();

queue.enqueue('Tyrkelz');
queue.enqueue('Supershock');
queue.enqueue('Joseph123');
queue.enqueue('Noobmaster');

queue.dequeue();
queue.dequeue();
//}
