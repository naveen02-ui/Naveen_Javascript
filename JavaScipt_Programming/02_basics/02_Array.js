const marvel_heroes = ["thor", 'ironman', 'hulk', 'captain america']
const dc_heroes = ['superman', 'batman',]

marvel_heroes.push(dc_heroes) // it will add dc heroes to the marvel heroes but change the original array
console.log(marvel_heroes);

console.log(marvel_heroes[4][1]);

marvel_heroes.concat(dc_heroes) // also add dc heroes to the marvel heroes but it will not change the original array
console.log(marvel_heroes);

const all_heroes = marvel_heroes.concat(dc_heroes);
console.log(all_heroes); // also add dc heroes to the marvel heroes but it will not change the original array

const all_new_heroes = [...marvel_heroes, ...dc_heroes];
console.log(all_new_heroes);

const another_array = [2, 4, 5, 6, [4, 5, 6], 6, 7, [6]]
const real_another_array = another_array.flat(Infinity) // it will flat the array and remove the nested array
console.log(real_another_array);
