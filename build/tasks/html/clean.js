const del = require('del');

module.exports = function () {
    return del('../public/**/*.html', { force: true });
};
