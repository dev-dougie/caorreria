const express = require('express')
const server = express()
const dbConnection = require('./database/dbConnetion')
const handleBars = require('express-handlebars')
const bodyParser = require('body-parser')
const mainRoute = require('./routes/mainRoute')
const session = require('express-session')
const flash = require('connect-flash')

//Calling DB Connetion
dbConnection

//Setting session
/*server.use(session({
    secret: 'th3_s3ss10n',
    resave: true,
    saveUninitialized: true
}))

server.use(flash())

//Setting flash
server.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg')
    res.locals.error_msg = req.flash('error_msg')
})
*/

//Setting bodyParser
server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())

//Setting handlebars as template engine
server.engine('handlebars', handleBars({defaultLayout: 'main'}))
server.set('view engine', 'handlebars')

//Setting static files
server.use(express.static('public'))
.use('/', mainRoute)

const PORT = process.env.PORT || 3001
server.listen(PORT, () => {
    console.log('The server is running at http://localhost:' + PORT);
})