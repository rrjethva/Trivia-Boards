// This express middleware restricts routes users must be signed-in to view.

module.exports = function(req, res, next) {
    // If the user is successfully logged in...
    if (req.user) {
        // Allows the user to continue to restricted route...
        return next();
    }
    // If the user isn't logged in, redir to login page...
    return res.redirect("/");
}