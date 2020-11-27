const express = require('express');
const app = express();
const morgan = require('morgan')


//middlewares
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2)
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());



//routes
app.use(require('./routes/index'));
app.use('/api/time', require('./routes/dt'));
app.use('/api/data', require('./routes/Us'));

//stating the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});