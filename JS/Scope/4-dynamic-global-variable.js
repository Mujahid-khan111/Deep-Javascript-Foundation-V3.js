 // It's worst method.

 // Dynamic Scope doesn't exist practically but theorically it exists.

 // I made this instance just for understanding.
 var example = 'Suzy'
 function fn() {
    example = 'Yong'; 
    Age = 21;  // There is no variable of Age name but Global is made this variable for us.
    console.log(Age)
    console.log(example)
 }
 fn();


 var a = 'good'
 function dynamic(){
      a = "boy"
     Age = 19
    //  console.log(a + Age)
   console.log(Age)
   console.log(a)
 }
 dynamic();

 
var teacher = "adnan";
function test(){
    teacher = "Arbaaz";
    age = 17;
    console.log("Welcome!");
}

console.log(teacher);  // adnan
// console.log(age);     // not run
test();
console.log(age);       // 17
console.log(teacher);   // Arbaaz 

