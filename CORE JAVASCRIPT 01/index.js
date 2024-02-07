/**QUESTION 1 
 * JAVASCRIPT PROGRAM THAT GRADES THE STUDENT ON THE BASIS OF MARKS
 * MARKS GREATER THAN 90 THEN A GRADE
 * MARKS FROM 70 TO 90 THEN B GRADES 
 * MARKS FROM 50 TO 70 THEN C GRADE 
 * MARKS BELOW 50 THEN F GRADE*/
 
const marks = 91
let grades;
if (marks>90){
    grades = "A GRADE"
} else if (marks>70){
   grades = "B GRADE"
}else if (marks>50){
   grades = "C GRADE"
} else if (marks<50){
grades = "F GRADES"
}
console.log("YOUR GRADE IS:" , grades);
//Q1 end
/**
 * QUESTION 2 
 * WRITE JAVASCRIPT CODE TO PRINT NUMBERS BETWEEN ANY TWO NUMBERS*/
 
const num1 = 5
const num2 = 10
for(let i= num1 + 1  ; i<=num2 ; i++){
   console.log(i)
}

//question 2 end



/**
 * QUESTION 3
 * WRITE JAVSCRIPT CODE TO CHECK IF THE NO. IS POSSITIVE OR NEGATIVE 
 * IF POSSITIVE THEN PRINT "POSISITIVE"
 * IF NEGATIVE THEN PRINT "NEGATIVE"
 * */

let number = -6
if (number>0) {
console.log("THE NUMBER IS POSSITIVE");   
}else{
console.log("THE NUMBER IS NEGATIVE");
}


//QUESTION 3 END

/**
 * QUESTION 4
 * COMMA OPERATOR :
 * COMMA OPERATOR ALLOWS US TO PRINT MULTIPLE VARIABLES IN A SINGLE LINE
 * THE EXAMPLE*/
 
let myname = "JAVASCRIPT"
let v2 = " is use in web development"
console.log(myname , v2);
// QUESTION 4 END

/**
 * QUESTION 5 
 * CRATING A LOGIN SYSTEM 
 * THE USERNAME IS "admin"
and password is "12345"*/

let user = "admin"
let password = 12345
if(user==="admin"&&password===12345){
   console.log("LOGIN SUCCESSFULLY");
}else{
   console.log("USERNAME OR PASSWORD IS INVALID");
}
//question 5 end */




/**
 * QUESTION 6

 You are working on an e-commerce platform.
  Write a JavaScript program that takes the payment method ("credit", "debit", or "paypal") as
   input and uses a switch statement to determine and print the processing fee associated with each payment method.
    For example, "credit" may have a processing fee of 2%, "debit" 1.5%, and "paypal" 3%.

 
    
  let   method = 'credit' ;
   : switch (credit) {
  console.log("fee for credit payment is 2%");
break ;
 "debit" ;
   console.log("fee for debit payment is 1.5%");
break ;
 "paypal" ;
   console.log("fee for paypal method is 3%");
   break;
    ;
   console.log("INVALID");
}
//question 6 end*/

/**
 * 
 * QUESTION 7
 * WRITE JAVASCRIPT CODE 
 * IF TEMPRATURE IS GREATER THAN 3O , PRINT "HOT"
 * IF LESS THEN 30 THEN MODERATE
 * */
 
let temprature = 19
let weather = temprature>30 ? "HOT " :"MODERATE";
console.log("THE WEATHER" , weather);
//QUESTION 7 END



//QUESTION 8


let num10 = 100
let sum10 = 0
let cn = 1
do {
   sum10+=cn ;
   cn++ ; 
} while(cn <= num10)
console.log('SUM OF NO. FROM 1 TO' , num10 ,':' , sum10);
//QUESTION 8 END












































































