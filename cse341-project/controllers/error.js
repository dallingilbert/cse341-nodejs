exports.getError = (req, res, next) => {
    res.status(404).render('./pages/404', { pageTitle: 'Page Not Found' });
};