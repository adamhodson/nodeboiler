exports.about = function(request, reply){
    reply.view('about', {
        title: 'About Yo!',
        content: "Let's Go YOOOOOOO",
        page_path: request.route.settings.id,
        session: JSON.stringify(request.session),
        isLoggedIn: request.auth.isAuthenticated
    });
}
