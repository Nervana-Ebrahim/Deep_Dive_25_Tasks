/*1)String Methods*/
const fullName=" Nervana Ebrahim ";
console.log(fullName.length);
let newfullName=(fullName.trim());
console.log(newfullName.length);
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(fullName.slice(1,8));
console.log(fullName.toLowerCase().includes("nervana"));

/*2)Array Methods*/
let  fruits=["apple", "banana", "mango"];
console.log(fruits);
fruits.push("orange");
console.log(fruits);
fruits.unshift("kiwi");
console.log(fruits);
fruits.shift();
fruits.pop();
console.log(fruits);
console.log(fruits.indexOf("mango"));
console.log(fruits.map(fruit=>fruit.toUpperCase()));
console.log(fruits.filter((fruit)=>fruit.startsWith('b')));
for(let i=0;i<=2;i++){
    console.log("fruit "+(i+1)+" is "+fruits[i]);
    
}

/*3)Math*/
console.log("random number is : "+Math.random()*10);
console.log("round(5.1) : "+Math.round(5.1));
console.log("trunc(5.1) : "+Math.trunc(5.1));
console.log("floor(5.1) : "+Math.floor(5.1));
console.log("ceil(5.1) : "+Math.ceil(5.1));
console.log("round(5.6) : "+Math.round(5.6));
console.log("trunc(5.6) : "+Math.trunc(5.6));
console.log("floor(5.6) : "+Math.floor(5.6));
console.log("ceil(5.6) : "+Math.ceil(5.6));
console.log("square root of 64 : "+Math.sqrt(64));
console.log("the maximum number from (3, 8, 20, 1) is : "+ Math.max(3,8,20,1));
console.log("the minimum number from (3, 8, 20, 1) is : "+ Math.min(3,8,20,1));

/*4)Ternary Operator*/
let age=20;
age>=18?console.log("Adult"):console.log("Minor");

/*5)Object*/
const person = {
  name: "Nervana",
  age: 19,
  address: "Minya-El-Qamh-Ash-Sharqiyah-Egypt",
  displayinfo: function(){
    console.log(this.name);
    console.log(this.age);
    console.log(this.address);
  },
  contact: {
    phone: "01550227212",
    email: "nervanaebrahim@19gmail.com",
    displayContactInfo: function(){
     console.log(this.phone);
     console.log(this.email);   
    }
  }

};
person.displayinfo();
person.contact.displayContactInfo();
person.address=("Zagazig");
person.displayinfo();

/*6)Destructuring*/
let { name: n,age: a,contact:{phone}}=person;
console.log(n);
console.log(a);
console.log(phone);

let [b,c]=fruits;
console.log(b);
console.log(c);

/*7)Spread / Rest Operators*/
let arr1=[1,2,3];
let arr2=[4,5,6];
let allarr=[...arr1,...arr2];
console.log(allarr);

/*Important */
function sum(...numbers){
    return numbers.reduce((sum, num) => sum + num, 0);
}
console.log(sum(1,2,3,4,5,6,7,8));

/*8)template literal*/
let nam="Nervana";
let ag=19;
console.log(`Hello ${nam},you are ${ag} years old.` )