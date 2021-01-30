const mongoose = require('mongoose')

mongoose.Promise = global.Promise
const URL = 'mongodb://localhost/caorreria'
mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
})
.then(() => console.log('Database was connected'))
.catch(err => console.log('Oops, we have an error: ' + err))