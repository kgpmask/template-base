module.exports = function appHandler (app) {
	// As far as JS files go, you'll only be working here.
	// In terms of back-end, all you have to do is add pages to the paths
	// as you keep working on them.
	// The syntax is `app.get(path_of_page, (req, res) => res.render(path_of_file));

	app.get('/', (req, res) => res.render('_base.njk'));
};
