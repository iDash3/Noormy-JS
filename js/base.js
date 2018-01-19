const fbAppId = '522565318118931'


function sendAlertNotification(strongText, normalText, targetId, type){
	if(type==null){type = 'info'}
	let newAlert = $('<div class="alert alert-'+ type +' alert-dismissable">\
	<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>\
	<strong>'+ strongText +'</strong>'+ normalText +'</div>')
	$('#' + targetId).append(newAlert);
}  
function deleteCookie(name) {
	document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}