var input = prompt("Write a dollar amount you want to divide into coins?");


var quarters = Math.floor(input / .25);
console.log("number of quarters ", quarters);
var qRemainder = input % .25;
var dimes = Math.floor(qRemainder / .10);
console.log("number of dimes: ", dimes);
var dRemainder = qRemainder % .10;
var nickels = Math.floor(dRemainder / .05);
console.log("number of nickels: ", nickels);
var nRemainder = dRemainder % .05;
var pennies = Math.ceil(nRemainder / .01);
console.log("number of pennies: ", pennies);

