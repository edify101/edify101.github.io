/* server.js
setup ==========
get all tools we need */

var express = require('express');
var app = express();
var port = url('www.edify101.org');
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');

var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var configDB = require('.config/database.js');

/*configuration*/
mongoose.connect(configDB.url); /*conect to our database*/

require('./config/passport')(passport); /*pass passport for config*/

/*require('./config/passport')(passport); pass passport for config

set up express application */
app.use(morgan('dev')); /*log every request to the console*/
app.use(cookieParser()); /*read cookies (needed for auth) */
app.use(bodyParser()); /*get info from html forms*/

app.set('view engine', 'ejs'); /*set up ejs for templating*/

/*required for passport*/
app.use(session({ secret : 'ilovescotchscotchyscotchscotch'})); /*session secret*/
app.use(passport.initialize());
app.use(passport.session()); /*persistent login sessions*/
app.use(flash()); /*use connect-flash for flash messages stored in session */

/*routes ======= */
require('./app/routes.js')(app, passport); /*load our routes and pas in our app, fully config passport*/

/*launch ====== */
app.listen(port);
console.log('the magic happens on port ' + port);
