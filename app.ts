
/*anoymous function-ex: makepage bounce



let x=function(){
  return "Hello World!";
};

console.log(x());*/

/* argument -data type-
let result=addNumbers(3,2);

function addNumbers(num1:number, num2:number){  //parameter attribuatry name can be whatever//
  return num1 + num2;

}

console.log(result);*/


/* optional function

function printError (errorMessage?:string){
  if (errorMessage) {
    console.log(errorMessage);
  } else{
    console.log('no error message');
  }
};

printError('you broke it');*/






//let arr=[2,3];//
//use to calculator//
/*
function addNumbers (...numbers:number[]) {
  let result = 0;

  for(let i = 0; i < numbers.length; i++) {
    result = result + numbers[i];
  }
  return result;

}
let result1 = addNumbers();
let result2 = addNumbers(3);
let result3 =addNumbers(3,1,3,4);

console.log(result3); // rest parameter //


function repeatString(stringToRepeat: string, numTimes: number) {
    let result = "";
    for(let i = 0; i < numTimes; i++) {
        result += stringToRepeat;
    }
    return result;
}

let myString = repeatString(/* arguments here */










 /*"=> only in anoymous"//

FAT ARROW

let addOne = (value) => {
return value +1;
}
let result = addOne(3);
console.log(result);*/

/*
let display = () =>('Bamm!');
display();


function multiply() {
  return num1 * num2;

 let btn = document.getElementById("btnSubmit");
 btn.addEventListener("click", () => {
     console.log("Did Something!");
 })*/

 /*
 let arr =['one', 'two', 'three'];
 for (let value of arr) {  *--- for of loop --
   console.log(value);
 };


*/
 /*filter:  obj.name ===obj['name']-literal notation

 let obj = {
 //key or property//
 name: "Issac",
 age: 99,
};

 console.log(obj.age['name']); */
/*
 let products =  [
   {name: 'Cheese', price: 7.00},
   {name: 'Milk', price: 3.00},
   {name: 'Wine', price: 40.00},
   {name: 'Crackers', price: 5.00}
 ];


 let expensiveProducts = products.filter() product => product.price > 5.00);

 console.log (expensiveProducts); */







/* Reduce


let total = products.reduce((total, currentValue) => total + currentValue.price, 0);
console.log(total); */

let products =  [
  {name: 'Cheese', price: 7.00},
  {name: 'Milk', price: 3.00},
  {name: 'Wine', price: 40.00},
  {name: 'Crackers', price: 5.00}
];

let names = products.forEach(displayName);

function displayNAme(product) {
  console.log(product.name);
};
 console.log(name);
