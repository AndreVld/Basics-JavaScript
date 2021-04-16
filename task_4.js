/*
Перед вами находится массив с продуктами в интернет-магазине. Вам нужно:
1 Получить все товары, у которых есть фотографии, 
	можете использовать метод filter 
2 Отсортируйте товары по цене (от низкой цены к высокой), 
	можете использовать метод sort
*/

'use strict'

const products = [
	{
		id: 3,
		price: 127,
		photos: [
			"1.jpg",
			"2.jpg",
		]
	},
	{
		id: 5,
		price: 499,
		photos: []
	},
	{
		id: 10,
		price: 26,
		photos:["3.jpg"]
	},
	{
		id: 8,
		price: 78,
	}
]

const products_with_photos = products.filter(function(el){
		if ('photos' in el && el.photos.length != 0 ){
				return el
		}
	})

products.sort(function (price_1,price_2){
		if(price_1.price >= price_2.price ){
			return 1
		}else{
			return -1
		}
	}
)
