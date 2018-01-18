function sendAlertNotification(strongText, normalText, targetId, type){
	if(type==null){type = 'info'}
	let newAlert = $('<div class="alert alert-'+ type +' alert-dismissable">\
	<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>\
	<strong>'+ strongText +'</strong>'+ normalText +'</div>')
	$('#' + targetId).append(newAlert);
}  