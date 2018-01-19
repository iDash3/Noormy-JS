var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')
var canvas_width = canvas.width
var canvas_height = canvas.height

loadTest()

function loadTest(){
	// background(ctx, '#8BC34A', '#FF9800', 'linear')
	background(ctx, 'blue', 'blue', 'linear')
	addTitle(ctx, 'Test title 123456', 'title');
	// addTitle(ctx, 'Test subtitle 123456', 'subtitle');
	addMainImage(ctx, "static/imgs/img_avatar3.png");
	addResultImage(ctx, "static/imgs/img_avatar3.png");
}

function background(ctx, color1, color2, type){
	if (type == 'linear') {
		var grd = ctx.createLinearGradient(0,0,200,0); 
	}
	else if (type == 'diagonal'){
		var grd=ctx.createLinearGradient(0,0,200,200);
	}
	else if (type == 'down'){
		var grd=ctx.createLinearGradient(0,0,0,200); 
	}
	grd.addColorStop(0,color1);
	grd.addColorStop(1,color2);
	ctx.fillStyle=grd;
	ctx.fillRect(0,0,canvas_width,canvas_height);	
}
function addTitle(ctx, text, type){
	// Add a function so that the center of the text goes to the center of the canvas.
	if (type == 'title'){	
		ctx.fillStyle='white';
		ctx.font='800 30pt Roboto'
		var text_width = ctx.measureText(text).width
		var x = (canvas_width - text_width) / 2 
		console.log(text_width)
		console.log(x)
		ctx.fillText(text,x,55)
	}
	else if (type == 'subtitle') {
		ctx.fillStyle='#212121';
		ctx.font='500 25pt Roboto'
		ctx.fillText(text,x,100)
	}
}
function addMainImage(ctx, imgUrl){
	let img = new Image()
	img.addEventListener("load", function(){
		let width = img.width
		let height = img.height
		// console.log(width)
		// console.log(height)	
		ctx.drawImage(img,100,100,250,250)
	}, false)
	img.src = imgUrl;
}
function addResultImage(ctx, imgUrl){
	let img = new Image()
	img.src = imgUrl;
	img.addEventListener("load", function(){
		ctx.drawImage(img,450,100,250,250)
	}, false)
}




// function loadTest(){
// 	background(ctx, '#8BC34A', '#FF9800')
// 	addTitle(ctx, 'Zac Efron', 'title');
// 	addTitle(ctx, 'Amante de animales', 'subtitle');
// 	addMainImage(ctx, "static/imgs/img_avatar3.png");
// 	addResultImage(ctx, "static/imgs/zac-animal.jpg");
// 	var actualCanvas = convertCanvasToImage(mainCanvas);
// }
// function background(ctx, color1, color2){
// 	// Create gradient
// 	// var grd=ctx.createLinearGradient(0,0,200,0); Creates a linear gradient.
// 	// var grd=ctx.createLinearGradient(0,0,0,200); Creates a up do down gradient.
// 	var grd=ctx.createLinearGradient(0,0,200,200);
// 	grd.addColorStop(0,color1);
// 	grd.addColorStop(1,color2);
// 	// Fill with gradient
// 	ctx.fillStyle=grd;
// 	ctx.fillRect(0,0,525,300);	
// }
// function addTitle(ctx, text, type){
// 	// Add a function so that the center of the text goes to the center of the canvas.
// 	if (type == 'title'){	
// 		ctx.fillStyle='white';
// 		ctx.font='800 30pt Roboto'
// 		ctx.fillText(text,200,55)
// 	}
// 	else if (type == 'subtitle') {
// 		ctx.fillStyle='#212121';
// 		ctx.font='500 25pt Roboto'
// 		ctx.fillText(text,100,100)
// 	}
// }
// function addMainImage(ctx, imgUrl){
// 	let img = new Image()
// 	img.src = imgUrl;
// 	img.addEventListener("load", function(){
// 		ctx.drawImage(img,50,110,180,180)
// 	}, false)
// }
// function addResultImage(ctx, imgUrl){
// 	let img = new Image()
// 	img.src = imgUrl;
// 	img.addEventListener("load", function(){
// 		ctx.drawImage(img,270,110,180,180)
// 	}, false)
// }
// function convertCanvasToImage(canvas){
// 	let img = new Image()
// 	img.src=canvas.toDataURL("image/png")
// 	return img
// }