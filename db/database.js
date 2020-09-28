const mongoose = require('mongoose')
const constant=require('../src/config/credentials')
mongoose.connect(constant.MONGO_DB_URL_STRING,{ useUnifiedTopology: true,useNewUrlParser: true }).then(success => {
    console.log('success')
}).catch(error => { console.log(error); })