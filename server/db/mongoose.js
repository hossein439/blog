const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/blog-post', {
    useNewUrlParser: true,
}).then((res) => {
    console.log('Database is connected');
}).catch((err) => {
    console.log(err)
    console.log('Database can not connected');
})