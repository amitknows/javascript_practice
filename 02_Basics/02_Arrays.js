const marvel_heroes = ["thor", "Ironman", "Spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heroes.push(dc_heros)
// console.log(marvel_heroes)

const allHeros = marvel_heroes.concat(dc_heros)
// console.log(allHeros)

const all_new_heros = [...marvel_heroes, ...dc_heros]

// console.log(all_new_heros)


const another_array = [1, 2, 3, [4, 5, 6], 7,[6,7,[4,5]]]
const real_another_array = another_array.flat(2)

// console.log(real_another_array)



console.log(Array.isArray("Amit"))
// console.log(Array.from("Amit"))
console.log(Array.from({name:"amit"}))


let score1= 100
let score2 = 200
let score3 = 300


console.log(Array.of(score1, score2, score3))