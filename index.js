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
