var nameVar='Aniketh';
var nameVar='Nair';
console.log('nameVar',nameVar);

let nameLet='Aniketh';
// let nameLet='Nair'; Invalid
nameLet='Nair';
console.log('nameLet',nameLet);

const nameConst='Aniketh';
// const nameConst='Nair'; Invalid
// nameConst='Nair'; Invalid

console.log('nameConst',nameConst);


function getPetName(){
    var petName='Hal';
    return petName;
}

// console.log(petName); Invalid

/*
let and const are not only function level but also block level scoped
while var is only  function level scoped
*/

// Block scoping

var fullName = 'Aniketh Nair';

if(fullName){
    const firstName = fullName.split(' ')[0];
    console.log(firstName);
}
// console.log(firstName); Invalid

/*
const first
let if we need to (Only when we reassign)
var never
*/ 
