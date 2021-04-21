/*
Написать функцию, преобразующую число в объект. 
Передавая на вход число в диапазоне [0, 999],
мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:
- единицы (в свойстве units)
- десятки (в свойстве tens)
- сотни (в свойстве hundereds)
Например, для числа 45 мы должны получить следующий объект:
units: 5, //это единицы
tens: 4, //это десятки
hundreds: 0, //это сотни
Если число было передано вне [0, 999] диапазона, не целое число или вообще не число,
необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
*/

'use strict'
/*
function creates_an_object(num){
	if (Number.isInteger(num) && (num >= 0 && num <= 999)){
		
		let obj = {units : 0,tens : 0,hundreds : 0}
		
		for (let prop in obj){
			if(num == 0){
				return obj
			}
			obj[prop] = num % 10
			num = parseInt(num / 10)
			
		}
	}else if(!Number.isInteger(num)){
		console.log("Not an integer!")
	}else{
		console.log("Number out of range (0, 999)")
	}
	return {}
}
*/

function creates_an_object(num){
	if (Number.isInteger(num) && (num >= 0 && num <= 999)){
		return {
			units : num % 10,
			tens : Math.floor(num / 10) % 10,
			hundreds : Math.floor(num / 100)
			}	
	}else if(!Number.isInteger(num)){
		console.log("Not an integer!")
		
	}else{
		console.log("Number out of range (0, 999)")
	}
	return {}
}

console.log(creates_an_object(257))