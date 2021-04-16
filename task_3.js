/*
Перед вами находится массив с продуктами, 
сегодня распродажа и вам нужно на каждый товар применить скидку
15%, можете использовать метод forEach
*/

'use strict'

const products = [
	{
		id: 3,
		price: 200,
	},
	{
		id: 4,
		price: 900,
	},
	{
		id: 1,
		price: 1000,
	}
]

products.forEach(function(element){
		return element.price -= element.price * 0.15
		}
	)
	
for (let i = 0;i < products.length;i++){
	console.log(products[i].price)
}
