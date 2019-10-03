const {add,saySpeak,callback} = require ("./func1")

let num1=6
let num2=666
let sum=add(num1,num2)

console.log(sum)

let bigdog = {
    name: "Bart",
    speak (){
    console.log (this.name)
}
}


let smallDog = {
    name: "Homer",

    speak()
    {
        console.log(this.name)
    }
}
function sayName(){
    console.log("beeg yoshi")
    return "sayName"
}
saySpeak(bigdog)
saySpeak(smallDog)
console.log(callback(sayName))