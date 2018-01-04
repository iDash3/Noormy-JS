var mainCanvas = document.getElementById("thumbnail");
var ctx = mainCanvas.getContext("2d");

$().ready(function(){
	loadTest()
	$('#mainRefresh').hide()
	$('.btn-refresh').hide()
	function onFileSelect(buttonID, fileControl){
		$(buttonID).on('change', ':file', function() {
		  var input = $(this),
		    numFiles = input.get(0).files ? input.get(0).files.length : 1,
		    label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
		  if(numFiles != 0){
	  		$(fileControl).html(label)
		  }
		});
	}
	$('#mainPreview')
		.click(function(){
			$('#previewCanvas')
				.show()
			$('#previewMenu')
				.removeClass('push-md-4')
			$('#mainRefresh').show()
			$('#mainPreview').hide()
		})
		$('.preview')
		.click(function(){
			$('#result1')
				.show()
			$('.btn-refresh').show()
			$('.preview').hide()
		})
		// Must change into a revursive way.
		$('#btn-file').click(function(){
			onFileSelect('#btn-file', '#file-control')
		})
		$('#btn-file-1').click(function(){
			onFileSelect('#btn-file-1', '#file-control-1')
		})
		$('.btn-download').click(function(){
			var download = document.getElementById('download');
      download.href = document.getElementById('thumbnail').toDataURL();
      download.download='imageName.png'
		})
})
function loadTest(){
	background(ctx, '#8BC34A', '#FF9800')
	addTitle(ctx, 'Zac Efron', 'title');
	addTitle(ctx, 'Amante de animales', 'subtitle');
	addMainImage(ctx, "static/imgs/img_avatar3.png");
	addResultImage(ctx, "static/imgs/zac-animal.jpg");
	var actualCanvas = convertCanvasToImage(mainCanvas);
}
function background(ctx, color1, color2){
	// Create gradient
	// var grd=ctx.createLinearGradient(0,0,200,0); Creates a linear gradient.
	// var grd=ctx.createLinearGradient(0,0,0,200); Creates a up do down gradient.
	var grd=ctx.createLinearGradient(0,0,200,200);
	grd.addColorStop(0,color1);
	grd.addColorStop(1,color2);
	// Fill with gradient
	ctx.fillStyle=grd;
	ctx.fillRect(0,0,525,300);	
}
function addTitle(ctx, text, type){
	// Add a function so that the center of the text goes to the center of the canvas.
	if (type == 'title'){	
		ctx.fillStyle='white';
		ctx.font='800 30pt Roboto'
		ctx.fillText(text,200,55)
	}
	else if (type == 'subtitle') {
		ctx.fillStyle='#212121';
		ctx.font='500 25pt Roboto'
		ctx.fillText(text,100,100)
	}
}
function addMainImage(ctx, imgUrl){
	let img = new Image()
	img.src = imgUrl;
	img.addEventListener("load", function(){
		ctx.drawImage(img,50,110,180,180)
	}, false)
}
function addResultImage(ctx, imgUrl){
	let img = new Image()
	img.src = imgUrl;
	img.addEventListener("load", function(){
		ctx.drawImage(img,270,110,180,180)
	}, false)
}
function convertCanvasToImage(canvas){
	let img = new Image()
	img.src=canvas.toDataURL("image/png")
	return img
}