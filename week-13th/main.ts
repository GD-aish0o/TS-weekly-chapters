// sync & async
// by default ts uses sync method == code executes line by line

// synchronised code:

// console.log("i");
// console.log("like");

// set-timeout always takes time as milli seconds (ms)
// thousand in timeout = 1 second IRL

// the code which makes the usr wait is executed at the end:

// set timeout itself is a function
// used to delay the output of code
// runs the loop for .5 second only & the "ice-cream is printed at the end, as the stopper for the "for loop"

// 0 seconds is the "take your time" in code
// setTimeout(() => {
//     console.log("ice-cream");
// }, 0);
// let i=0
// for (let j=0 ; j<= 250; j++) {
//     j=j+1

//     console.log("Ash kimm");
//  }

//  console.log("hello there");

//  i scream, you scream, we all scream for ice-cream:

// setTimeout(() => {
//     console.log("ice-cream");
//     setTimeout(() => {
//         console.log("in ");

//         setTimeout(() => {
//             console.log("almost");
//             setTimeout(() => {
//                 console.log(" every flavour");
//             }, 2000);
//         }, 1500);
//     }, 1000);
// }, 500);

// async
// asyncronous
//        cb ==     call-back
// ||
// function orderPizza(prepareCB:any) {

//     console.log("placing order");

//     // add an inquirer package here

//     setTimeout(() => {
//         console.log("Order placed");

//         prepareCB() //is now a function & needs to be called

//     }, 3000);

// }

// function preparePizza() {

//     console.log("order preparing ");

//     setTimeout(() => {

//         console.log("Your order is ready");

//     }, 3000);
// }

// call-backs = orderPizza(preparePizza());

// add delivery option here after watching the video

// function deliveryFailed (params:any) {

// }

// orderPizza(preparePizza);

// function callbacks hell, can be complex as complexity itself
// to avoid callback hells we use "promises."

// alternate of call backs

// pending promises: (to wait for results)

// function orderpizzaPromise () {

// promises needs a function either arrow or smthng else as an arguement
//     return new Promise((resolve) => {
//         setTimeout(() =>
//         {
//             console.log("hogaya");
//             resolve(" ")

//         }, 3000);
//     });
// }

// orderpizzaPromise() .then ( preparePizza );
// .then (), is the then in english, "first do this, "THEN" go for that.
// .then would'nt work without "resolve" function.
// resolve can be renamed
// .then can be linked to another then, 🖇 and used to call any other function after executing one properly.
// anyother then won't work if resolve and promises are absent there.
// then works one after another.
// on line 121 i didn't called order pizza function, i asked it

function greet() {
  return new Promise((resolve) => {
    resolve(" ");
    console.log("hello there...");
  });
}

function shareThought() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("I think I know You");
      resolve(" ");
    }, 1200);   
  });
}

function AskID() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Have you ever been to GCU lahore?");
      resolve(" ");
    }, 1500);
  });
}

greet().then(shareThought).then(AskID);

// another syntax for calling functions back to back
// async await

// let commute = await shareThought();
// let commut3 = await AskID();

