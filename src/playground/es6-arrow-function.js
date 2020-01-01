// ES5

function square(num){
    return num*num;
}
console.log(square(8));

const constSquare=function(num){
    return num*num;
}
console.log(constSquare(8));

// ES6

// const squareArrow = (x) =>{
//  return x*x;
// };

const squareArrow = (x) => x*x;

console.log(squareArrow(8));

// Challenge
// getFirstName
// const getFirstName=(fullName)=>{
//     return fullName.split(' ')[0];
// }
// const getFirstName=(fullName) => fullName.split(' ')[fullName.split(' ').length -1]; For Last Name
const getFirstName=(fullName) => fullName.split(' ')[0]; //For First Name


console.log(getFirstName('Aniketh Nair'));
// console.log(('Aniketh Nair').split(' ').length); returns 2
