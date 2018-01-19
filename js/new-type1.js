$().ready(function(){
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
	// Must change into a revursive way.
	$('#btn-file').click(function(){
		onFileSelect('#btn-file', '#file-control')
	})
	$('#btn-file-1').click(function(){
		onFileSelect('#btn-file-1', '#file-control-1')
	})
})