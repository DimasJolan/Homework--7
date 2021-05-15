"use strict";
var condition = false;
 do {
     var symbol = prompt("Введите действие");
         if (symbol != "+" && symbol != "/" && symbol != "*" && symbol != "-") {
          condition = false;
           } else {
           condition = true;
           }
 } while(condition===false);

var condition1 = false;
 do {
     var Num = +prompt("Введите сколько будет операндов");
         if (Num < 1 || Num > 7) {
            condition1=false;
           } else {
           condition1=true;
           }
 } while(condition1===false);

if (Num == 1) { 
  var num1 = +prompt('Введите первый операнд')
  switch (symbol) {
    case "*":
      alert (num1);
      break;
    case "+":
      alert (num1 );
      break;
    case "-":
      alert (num1);
      break;
      case "/":
      if (num2 !== 0) {
        alert (num1);
      } else {
        alert ("Нельзя делить на ноль");
      }
      break;
  }
}
else if (Num == 2) { 
  var num1 = +prompt('Введите первый операнд')
  var num2 = +prompt('Введите второй операнд')
  switch (symbol) {
    case "*":
      alert (num1 + "*" + num2 + "=" + (num1 * num2));
      break;
    case "+":
      alert (num1 + "+" + num2 + "=" + (num1 + num2));
      break;
    case "-":
      alert (num1 + "-" + num2 + "=" + (num1 - num2));
      break;
      case "/":
      if (num2 !== 0) {
        alert (num1 + "/" + num2 + "=" + (num1 / num2));
      } else {
        alert ("Нельзя делить на ноль");
      }
      break;
  }
}
else if (Num == 3) { 
  var num1 = +prompt('Введите первый операнд')
  var num2 = +prompt('Введите второй операнд')
  var num3 = +prompt('Введите третий операнд')
  switch (symbol) {
    case "*":
      alert (num1 + "*" + num2 + "*" + num3 + "=" + (num1 * num2 * num3));
      break;
    case "+":
      alert (num1 + "+" + num2 + "+" + num3 + "=" + (num1 + num2 + num3));
      break;
    case "-":
      alert (num1 + "-" + num2 + "-" + num3 + "=" + (num1 - num2 - num3));
      break;
      case "/":
      if (num2 !== 0 && num3 !== 0 ) {
        alert (num1 + "/" + num2 + "/" + num3 + "=" + (num1 / num2 / num3));
      } else {
        alert ("Нельзя делить на ноль");
      }
      break;
  }
}
else if (Num == 4) { 
  var num1 = +prompt('Введите первый операнд')
  var num2 = +prompt('Введите второй операнд')
  var num3 = +prompt('Введите третий операнд')
  var num4 = +prompt('Введите четвертый операнд')
  switch (symbol) {
    case "*":
      alert (num1 + "*" + num2 + "*" + num3 + "*" + num4 + "=" + (num1 * num2 * num3 * num4));
      break;
    case "+":
      alert (num1 + "+" + num2 + "+" + num3 + "+" + num4 + "=" + (num1 + num2 + num3 + num4));
      break;
    case "-":
      alert (num1 + "-" + num2 + "-" + num3 + "-" + num4 + "=" + (num1 - num2 - num3 - num4));
      break;
      case "/":
      if (num2 !== 0 && num3 !== 0 && num4 !== 0 ) {
        alert (num1 + "/" + num2 + "/" + num3 + "/" + num4 + "=" + (num1 / num2 / num3 / num4));
      } else {
        alert ("Нельзя делить на ноль");
      }
      break;
  }
}
else if (Num == 5) { 
  var num1 = +prompt('Введите первый операнд')
  var num2 = +prompt('Введите второй операнд')
  var num3 = +prompt('Введите третий операнд')
  var num4 = +prompt('Введите четвертый операнд')
  var num5 = +prompt('Введите пятый операнд')
  switch (symbol) {
    case "*":
      alert (num1 + "*" + num2 + "*" + num3 + "*" + num4 + "*" + num5 + "=" + (num1 * num2 * num3 * num4 * num5));
      break;
    case "+":
      alert (num1 + "+" + num2 + "+" + num3 + "+" + num4 + "+" + num5 + "=" + (num1 + num2 + num3 + num4 + num5));
      break;
    case "-":
      alert (num1 + "-" + num2 + "-" + num3 + "-" + num4 + "-" + num5 + "=" + (num1 - num2 - num3 - num4 - num5));
      break;
      case "/":
      if (num2 !== 0 && num3 !== 0 && num4 !== 0 && num5 !== 0 ) {
        alert (num1 + "/" + num2 + "/" + num3 + "/" + num4 + "/" + num5 + "=" + (num1 / num2 / num3 / num4 / num5));
      } else {
        alert ("Нельзя делить на ноль");
      }
      break;
  }
}
else if (Num == 6) { 
  var num1 = +prompt('Введите первый операнд')
  var num2 = +prompt('Введите второй операнд')
  var num3 = +prompt('Введите третий операнд')
  var num4 = +prompt('Введите четвертый операнд')
  var num5 = +prompt('Введите пятый операнд')
  var num6 = +prompt('Введите шестой операнд')
  switch (symbol) {
    case "*":
      alert (num1 + "*" + num2 + "*" + num3 + "*" + num4 + "*" + num5 + "*" + num6 + "=" + (num1 * num2 * num3 * num4 * num5 * num6));
      break;
    case "+":
      alert (num1 + "+" + num2 + "+" + num3 + "+" + num4 + "+" + num5 + "+" + num6 + "=" + (num1 + num2 + num3 + num4 + num5 + num6));
      break;
    case "-":
      alert (num1 + "-" + num2 + "-" + num3 + "-" + num4 + "-" + num5 + "-" + num6 + "=" + (num1 - num2 - num3 - num4 - num5 - num6));
      break;
      case "/":
      if (num2 !== 0 && num3 !== 0 && num4 !== 0 && num5 !== 0 && num6 !== 0 ) {
        alert (num1 + "/" + num2 + "/" + num3 + "/" + num4 + "/" + num5 + "/" + num6 + "=" + (num1 / num2 / num3 / num4 / num5 / num6));
      } else {
        alert ("Нельзя делить на ноль");
      }
      break;
  }
}
else if (Num == 7) { 
  var num1 = +prompt('Введите первый операнд')
  var num2 = +prompt('Введите второй операнд')
  var num3 = +prompt('Введите третий операнд')
  var num4 = +prompt('Введите четвертый операнд')
  var num5 = +prompt('Введите пятый операнд')
  var num6 = +prompt('Введите шестой операнд')
  var num7 = +prompt('Введите седьмой операнд')
  switch (symbol) {
    case "*":
      alert (num1 + "*" + num2 + "*" + num3 + "*" + num4 + "*" + num5 + "*" + num6 + "*" + num7 + "=" + (num1 * num2 * num3 * num4 * num5 * num6 * num7));
      break;
    case "+":
      alert (num1 + "+" + num2 + "+" + num3 + "+" + num4 + "+" + num5 + "+" + num6 + "+" + num7 + "=" + (num1 + num2 + num3 + num4 + num5 + num6 + num7));
      break;
    case "-":
      alert (num1 + "-" + num2 + "-" + num3 + "-" + num4 + "-" + num5 + "-" + num6 + "-" + num7 + "=" + (num1 - num2 - num3 - num4 - num5 - num6 - num7));
      break;
      case "/":
      if (num2 !== 0 && num3 !== 0 && num4 !== 0 && num5 !== 0 && num6 !== 0 && num7 !== 0 ) {
        alert (num1 + "/" + num2 + "/" + num3 + "/" + num4 + "/" + num5 + "/" + num6 + "/" + num7 + "=" + (num1 / num2 / num3 / num4 / num5 / num6 / num7));
      } else {
        alert ("Нельзя делить на ноль");
      }
      break;
  }
}





