const path = require('path');

module.exports = (app, rootDir) => {
    app.set('views', path.join(rootDir, 'views'));
    app.set('view engine', 'ejs');    
};