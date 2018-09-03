exports.index = function(request, h){

	return h.view('index', {
		title: 'Dashboard',
		content: 'CONETNTTTTTT',
		page_path: request.route.settings.id,
		
	});

}
