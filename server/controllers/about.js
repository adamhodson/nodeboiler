exports.about = function(request, h){
    return h.view('about', {
        title: 'About Yo!',
        content: "Let's Go YOOOOOOO",
        page_path: request.route.settings.id,
        session: JSON.stringify(request.session),
        isLoggedIn: request.auth.isAuthenticated
    });
}
