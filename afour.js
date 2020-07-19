//Make a Calculator in Javascript which can do operations as Addtion, Subtraction, Multiplication, Division, Square root, Percentage.

function result(calc){
 let n1 = parseFloat(document.getElementById('num1').value);
 let n2 = parseFloat(document.getElementById('num2').value);
 let res;

 switch(calc)
 {
  case '1':
   res = +n1 + +n2;
   break;

  case '2':
   res = n1 - n2;
   break;

  case '3':
   res = n1 * n2;
   break;

  case '4':
   res = n1 / n2;
   break;

  case '5':
   res = Math.sqrt(n1);
   break;

  case '6':
   res = n2*100/n1;
   break;
 }
 document.getElementById('resultt').value = res;
}

