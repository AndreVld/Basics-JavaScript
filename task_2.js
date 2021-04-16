//Выведите в консоль значения, указанные рядом с комментариями:

'use strict'

const post = {
		author: "John",//вывести этот текст
		post_Id: 23,
		comments: [
			{
				userId: 10,
				userName: "Alex",
				text: "lorem ipsum",
				rating: { likes: 10,
					  dislikes: 2 //вывести это число
					}
			},
			{	userId: 5, //вывести это число
				userName: "Jane",
				text: "lorem ipsum 2", //вывести этот текст
				rating:{likes: 3,dislikes: 1}
			}
		]
	}
let values_to_output =[
	post.author,				// "John"
	post.comments[0].rating.dislikes,	// 2
	post.comments[1].userId,		// 5
	post.comments[1].text			// "lorem ipsum 2"
	]

for(let i = 0;i < values_to_output.length;++i){
	console.log(values_to_output[i])
}
