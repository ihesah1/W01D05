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

var amount=8;
if (amount < 0){
    console.log("Please enter a positive number")
}
else if (amount =! 8){
    console.log("Please enter a number")
}
else if (amount=! String){
    console.log('Please enter your name:', ' ');
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
var i =0;
while ( i <= 20) {
    console.log(i);
    i++;
  }
for (var x=20; x >= 0; x--){
     console.log(x)
 }
var z;

for( z=1; z<=20; z++){
        if (z % 2 == 0){
          console.log(z)
    }
}


var startRange = (5,8);
var endRange = (4,6);
var s = "";
for(var i = 5; i <=8; i++) {
    
    if (i == 8){
        console.log('"'+ s+i +'"')
         break;
    } else {
        s=s + i + "," + " ";
        
    }
    
}

