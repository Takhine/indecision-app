// arguments object - no longer bound

// const add = function(a,b){
//     console.log(arguments);
//     return a+b;
// }
const add = (a,b) =>{
    // console.log(arguments); Invalid as arguments are not bound in es6
    return a+b;
}
console.log(add(55,1));
// this keyword - no longer bound

const user = {
    name:'Aniketh',
    cities:['Boston','Baltimore'],
    // ES5
    // printPlacesLived:function(){
    //     console.log(this.name);
    //     console.log(this.cities);
    //     const that=this;
    //     this.cities.forEach(function(city){
    //         console.log(that.name+' has lived in '+city)
    //     });
    // }
    // ES6
    // Arrow functions bind itself to the parent 'this', so the workaround like in the case of es5 is not required
    printPlacesLived(){
        const cityMessages=this.cities.map((city)=>this.name+ ' has lived in '+ city);
        return cityMessages;
    }
}

console.log(user.printPlacesLived());

// Challenge

const multiplier ={
// numbers - array to multiply
numbers:[1,2,3],
// single number - multiplyBy
multiplyBy:2,
// multiply - new array where numbers have been multiplied
multiply(){
    const multiplication=this.numbers.map((num)=>this.multiplyBy*num);
    return multiplication;
}
}

console.log(multiplier.multiply());