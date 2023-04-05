/**
 * Write a function that takes height in m and weight in kg and calculate its BMI.

BMI is calculated by weight / (height * height). Depending on its result, show a message:

If lower than 18.5: "Thinness"
If between 18.5 and 24.9: "Normal"
If greater than or equal to 25: "Overweight"
 */



function personInfo(weight, height) {
     let BMI = weight / (height ** 2);
     if (BMI < 18.5) {
          return "Thiness"
     } else if (BMI > 18.5 && BMI < 24.9) {
          return "Normal"
     } else {
          return "OverWeight"
     }
}

let myInfo = personInfo(1.65, 65);
console.log(myInfo)


// ******************************************

/**
 * Write a function that converts Fahrenheit to Celsius.

The calculation is (fahrenheit − 32) * 5/9 = celsius.

For example, if it is 32 Fahrenheit, then it is 0 Celsius.
 */

function calculateCelsuis(fahrenheit) {
     return (fahrenheit - 32) * 5 / 9;
}
let calculation = calculateCelsuis(32);
console.log(calculation)

// ******************************************

/**
 * Mary is a teacher that needs to calculate the final grade of its students. She would like to create a function to optimize that process.
Write a function calculateFinalGrade(), that takes 3 numbers (grades from 0 to 10). 
The final grade is calculated by 
adding the first grade with the second grade
 multiplied by 2 and the third grade multiplied by 3
 . The result should be divided by 6.

There are some example output:

console.log("Owen final grade: ", calculateFinalGrade(4, 5, 7)); //  Owen final grade: 5.83
console.log("Harald final grade: ", calculateFinalGrade(5, 10, 5)); //  Harald final grade: 6.66
console.log("Woytek final grade: ", calculateFinalGrade(6, 8, 7)); //  Woytek final grade: 7.16

 */

function calculateFinalGrade(num1, num2, num3) {
     let result = num1 + num2 * 2 + num3 * 3
     return result / 6;
}

let finalResult = calculateFinalGrade(5, 10, 5);
console.log("Harald Final Grade: " + finalResult)

// ******************************************

/**
 * In order to calculate the total price of cinema tickets in a movie theater, you need to write a function calculateTicketPrice(), that takes some parameters:

Number of tickets
If there is senior discount
The price of an individual ticket 10 euros and the senior discount is 20%.
 */

function calculateTicketPrice(numbTickets, isDiscount) {
     let ticketPrice = 10;
     if (isDiscount) {
          let discountAmout = 10 * 20 / 100;
          let afterDiscount = ticketPrice - discountAmout
          return afterDiscount * numbTickets
     } else {
          return ticketPrice
     }
}


let totalPrice = calculateTicketPrice(2, true)
console.log(totalPrice);

// ******************************************
/**
 * Sometimes we cannot decide what to do between two options. Write a function that decides that for you!

Write a function that takes two strings and prints one of them.
 */

function makeDecide(firstChoice, seconfChoice) {
     return firstChoice;
}

let decides = makeDecide("eat chocolate", "run");
console.log(decides)