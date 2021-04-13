/*
Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
переданного значения операции (использовать switch) выполнить одну из арифметических
операций
(использовать функции из задания 4) и вернуть полученное значение.
*/


'use strict'
function sum(num_1, num_2){
	return num_1 + num_2
}
function diff(num_1, num_2){
	return num_1 - num_2
}
function multi(num_1, num_2){
	return num_1 * num_2
}
function div(num_1, num_2){
	return num_1 / num_2
}



function math_operation(arg_1, arg_2,operation){
	switch(operation){
		case '+':
			return sum(arg_1,arg_2)
		case '-':
			return diff(arg_1,arg_2)
		case '*':
			return multi(arg_1,arg_2)
		case '/':
			return div(arg_1,arg_2)
		}
}

