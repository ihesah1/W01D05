var num1 = 10;
var num2 = 20;
var num3 = 30;

if (num1>num2) {
    console.log(num1)
}
else {
    console.log(num2)
}

if (num1 % 2 == 0){
    console.log(" num1 is even number")
}
else {
    console.log("num1 is odd numer")
}
if (num1 > num2 && num1>num3){
    if (num2>num3){
        console.log(num1 + ", " + num2 + " , " + num3)
    }else{
        console.log(num1 + ", " + num3 + " , " + num2)
    }
}
else if (num2 > num1 && num2 >num3){
    if (num1>num3){
        console.log(num2 + ", " + num1 + " , " + num3)
         
    }else{
        console.log(num2 + ", " + num3 + " , " + num1)
    }

}
else if (num3>num1 && num3>num2){
    if(num1>num2){
        console.log(num3+ " ," + num1 + ", "+ num2)

        
    }else {
        console.log(num3+ " ," + num2 + ", "+ num1)
    }
  
    
}
for(var x=0; x <= 20; x++){
    console.log(x)
}

var w = 0;
while (w<=20){
    console.log(w) 
}