let a = prompt("Input side a");
let b = prompt("Input side b");
let c = prompt("Input side c");

if(a==="undefined" || a===""){
alert("Input values should be ONLY numbers");
}
else if(b==="undefined" || b===""){
  alert("Input values should be ONLY numbers");
}
else if (c==="undefined" || c===""){
  alert("Input values should be ONLY numbers");
}
else if(a==0 || b==0|| c==0){
  alert("A triangle must have 3 sides with a positive definite length");
}

else if( a + b > c && a + c > b && b + c > a) {
  console.log("Triangle exist");
 if(a==b && b==c && a==c){
  console.log("Equilateral triangle");
  
  if(a==b){
  console.log("Isosceles triangle");
  }
 }
   else{ console.log("Scalene triangle");
   }
 }

 else
   console.log("Triangle doesn’t exist");