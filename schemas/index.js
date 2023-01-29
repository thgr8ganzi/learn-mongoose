const mongoose = require('mongoose');

const connect = () => {
    if(process.env.NODE_ENV !== 'production'){
        mongoose.set('debug', true);
    }
    mongoose.connect('mongodb://atns:atns1234@localhost:27017/admin', {
        dbName : 'nodejs',
        useNewUrlParser : true,
    }, (error) => {
        if(error){
            console.log('에러 : ', error);
        }else {
            console.log('연결성공');
        }
    });
};
mongoose.connection.on('error', (error) => {
    console.error('몽고디비 연결에러', error)
});
mongoose.connection.on('disconnected', () => {
    console.error('몽고디비 연결끊김');
    connect();
});

module.exports = connect;