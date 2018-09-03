exports.about = function(request, h){
	console.log('yuh')
	console.log(request.auth.credentials)

    return h.view('about', {
        title: 'About Yo!',
        content: "Let's Go YOOOOOOO",
        page_path: request.route.settings.id,
        session: JSON.stringify(request.session),
        isLoggedIn: request.auth.isAuthenticated
    });
}
