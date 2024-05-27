// example:

let var1 : null|number = 89;

if (var1==null) {
     console.log(`please enter a number`);
         
} else {
     console.log(`your result is ${var1}`);
     
}


// Narrowing in typescript:
// narrowing the data types and shortcuts into one out of two or more.
// narrowing doesn't change data types, it just chooses any one of the given based upon the value.

let pass:string | number | Boolean //currently if this var is empty is called union of string & number 

pass="scoooby";

console.log(pass);

pass=90813;

console.log(pass);

pass= true;

let Age:string|number = Math.random() >0.6 ? "khan" : 60;

// 
// another syntax of type of:
// console.log(typeof (Age));

if (typeof Age === "string") {
    Age.toUpperCase();
} else  {
    Age.toFixed
}

console.log(typeof Age);
 

// type alias === a short name to be used whereever needed.

type Person ={
    name:string,
}
// interfaces:
// in interfaces we don't use equals sign.

interface IPerson{
    name:string;

}

let Person:Person;


// assining value to the IPerson key "Name".
let IPerson : IPerson = {
    name:"Halder"
}
// interfaces work as a menu card of the restraunt in programming.
// Structural Typing:

// typescript looks for sructure in the code.
// the code must be in "Dhang ka structure" for TS to Read & implement.

// for instance the restraunt has two deals live:

interface Deal1{
    Drink:string
};

interface Deal2{
    food: string;
    Drink:string;
}


// Now the table one has ordered deal 2:
let Table1: Deal2 = {
    food : "Biryani",
    Drink: "Chai" 
}

// & table 2 has ordered deal 1


let Table2: Deal1 = {
    Drink: "Apple Juice",
}

// in the code below we're delivering orders to tables.
 
let Order1: Deal1 = Table2;
let Order2: Deal2 = Table1;

// Stale Objects = = = already ready to use 
// fresh Objects = = = when we create an object at a place and use it right away.

// stale Object doesnot return error when we add a new key and value in it. 

// but we cant pass extra properties in fresh objects.


// stale object case.
// let Order1: Deal1 = Table2;

// fresh object case.
let AnotherOrder:Deal2= {
    food: "Cheese Cake",
    Drink:"Smoothie"
}
