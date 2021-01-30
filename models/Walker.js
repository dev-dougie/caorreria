const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Walker = new Schema({
    name:  {
        type: String,
        require:true
    },
    photo: {
        type:String,
        require: true
    },
    phone: {
        type: Number,
        require: true
    },
    city: {
        type: String,
        require: true
    },
    about: {
        type: String,
        require: true
    },
    prices: {
        price1: {
            type: Number,
            require: true
        },
        price2: {
            type: Number,
            require: true
        },
        price3: {
            type: Number,
            require: true
        },
    }
})

mongoose.model('walkers', Walker)