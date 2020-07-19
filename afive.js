/*You are managing a sales department for your company, you want to reward your employees based on the sales made by them during the year.The criteria is as follows:
1. Sales from 0 - 5000 : 2 %
 2. Sales from 5001 - 10000 : 5 %
  3. Sales from 10001 - 20000 : 7 %
   4. Above 20000 - 10 %
    Then log the total commission earned by him.*/


let sales = prompt("Enter your sales", 0);
let commission;
if ((sales>=0)&&(sales<=5000)){
 commission = sales * 0.02;
}
else if ((sales >= 5001) && (sales <= 10000)) {
 commission = sales * 0.05;
}
else if ((sales >= 10001) && (sales <= 20000)) {
 commission = sales * 0.07;
}
else{
 commission = sales * 0.10;
}
console.log(commission);
