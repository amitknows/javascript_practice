const name = "amit"
const repoCount = 50

//console.log(name + repoCount + "Value ") // outdate style

//new modern style
//console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`) // it is called string interpolation

const gameName = new String('amitpandey')

// console.log(gameName[1]);
// console.log(gameName.__proto__);


// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("t"));

const newString = gameName.substring(0,2)
//console.log(newString)

const anotherString = gameName.slice(-8,4)
//console.log(anotherString)

 const newStringOne = "                amit        "
// console.log(newStringOne)
// console.log(newStringOne.trim())


const url ="https://amit.com/amit%20pandey"

console.log(url.replace("%20" , "-"))

console.log(url.includes('sachin'))

console.log(gameName.split('-'));