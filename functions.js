// function printGreeting(){
//     console.log ("Hello, how are you today, I see the weather is nice.");
//     console.log ("What do you think of the weather?");
// }
// printGreeting()

// function greetMe(firstName, lastName) {
//     console.log(`Hello ${firstName} ${lastName}.`);
// }
// greetMe("Jennifer", "Nguyen");
// greetMe("Meryl", "Williams")
// greetMe("Allie", "Everson")

// var birthdays = {
//     name1: "Jen Nguyen",
//     birthday1: "June 15th",
//     student1: true 
// }
// console.log(birthdays.name1);
// console.log(birthdays.birthday1);
// console.log(birthdays.student1)

// function birtdayList(birthdays) {

// }

//Functions Workshop 
// To create a function you use the function keyword which declares the function followed by () which may have parameters separated by ',' then in {} write the code that should run when the function is called.
//To call a function use the function name with () and the ';' for best conventions and practices 
// function printInfo(age, hometown, name) {
//     console.log(`${name} is from ${hometown} and she is ${age}.`);
// }
// printInfo(37, "Loveland, CO", "Jen");

// function mathItUp (num1, num2){
//     console.log(`The value of the first parameter is ${num1} and the value of the second parameter is ${num2}.`); 
//     console.log(num1 + num2 + 100)
//     return mathItUp;
// }
// mathItUp(2,4)


// function evaluateSalary (salary) {
//     if (salary > 100000) {console.log ("This is a great salary!");
// }   else if (salary > 75000) {console.log ("This is a fair salary");
// }   else {console.log ("Time to negotiate!")}
// }
// evaluateSalary(100000)
// evaluateSalary(74000)
// evaluateSalary(120000)

// function checkEven (integer) {
//     if (integer % 2 == 0){console.log(`The parameter ${integer} is even.`);
// }   else {console.log(`The parameter ${integer} is odd.`)}
// }
// checkEven(4)

// function reassignCounter (x, y, z) {
//     var counter = x;
//     counter = counter * y;
//     counter = counter - z;
//     return counter;
// }

// console.log(reassignCounter(1,2,3))

// function performOps (l, w, h){
//     var area = l * h; 
//     var volume = area * h;
//     return volume;
// }
// console.log(performOps(2,2,2))

// function tellFortune (jobTitle, location, partner, numKids){
//     var future = `You will be a ${jobTitle} in ${location}, married to ${partner} with ${numKids} kids.`
//     return future
// }
// console.log(tellFortune ("computer programmer", "Littleton", "Khoa", 2))
// console.log(tellFortune("teacher", "Denver", "Jessica", 0))
// console.log(tellFortune("waitress", "Estes Park", "Leta", 5))

// function calculateDogAge(age){
//     var pupAge = age * 7;
//     pupAge = (`Your doggie is ${pupAge} years old in dog years.`);
//     return pupAge;
// }
// console.log(calculateDogAge(2));
// console.log(calculateDogAge(3));
// console.log(calculateDogAge(7));

// function calculateSupply(amount, age) {
//     var maxAge = 100;
//     var totalNeeded = (amount * 365) * (maxAge - age);
//     var message = (`You will need ${totalNeeded} to last you until the ripe of age of ${age}.`)
//     console.log(message);
// }
// calculateSupply (28, 36)

// function performOps (length, width, height) {
//     var area = length * height;
//     var volume = area * width;
//     console.log(volume);
//     return area
    
// }
// console.log(performOps(2, 2, 2));

// var user1 = {
//     name: "Sodie",
//     age: 8,
//     breed: "Shih-tzu",
//     hobbies: ["Sun bathing", "Bossing people around", "Napping"],
//     bark: function() {
//       return "woof!";
//     },
//     checkMyProfile: function() {
//     //   console.log(this.name);
//       // console.log(this.age);
//       // console.log(this.breed);
//       // console.log(this.hobbies);
//       // console.log(this.bark);
//     },
//   }
//   console.log(user1.checkMyProfile);

function calCircumfrence(radius){
    var cir = 2 * 3.14;
    var  cicumfrence = cir * 2;
    return radius 
}
console.log

