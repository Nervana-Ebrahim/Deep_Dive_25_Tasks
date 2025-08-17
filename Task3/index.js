/*1. Create Variables*/ 
const name = "Nervana Ebrahim";
console.log(name);
let age = 19;
console.log(age);
var t=true;
console.log(t);
let grades = [90,80,70];
console.log(grades);

/* 2. Operators*/
let g1=90;
let g2=80;
let g3=70;
sum=g1+g2+g3;
console.log(sum);
average=sum/3;
console.log( average>= 60);

/* 3. if / else / else if*/
if(average>=90){
    console.log("Excellent")
}
else if(average>=75){
    console.log("Very Good")
}
else if(average>=60){

    console.log("Good")
}
else{

    console.log("Failed")    
}

/* 4. switch */
let subject_number=prompt("Enter a subject number");
switch (subject_number){
    case '1':
        console.log("Math");
        break;
    case '2':
        console.log("Science");
        break;
    case '3':
        console.log("English");
        break;
    default:
        console.log("Invalid subject number");    
}

/* 5. Loops – for*/
let grade = [90,80,70];
 for(i=0;i<=2;i++){
    console.log(`${grade[i]}`);
 }

/* 6. Functions */
function sumtion(g1,g2,g3){
    return g1+g2+g3;
}
console.log(sumtion(90,80,70));
/*Do not need to return */
const aver = (g1,g2,g3) => (g1+g2+g3)/3;
console.log(aver(90,80,70));

/* 7. while*/
let num=10;
while(num<10){
    console.log("done")
}

/*8. do-while */
let num2=10;
do{
    console.log("done");
}
while(num2<10);

/* 9. Array*/
let numbers=[1,2,3,4,5,6];
let su=0;
for(i=0;i<=5;i++){
su += numbers[i];
}
console.log(" Sum using for loop: "+su);

while(i<=5){
    su+=numbers[i];
}
console.log(" Sum using while loop: "+su);