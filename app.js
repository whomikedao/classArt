let express = require('express');
let app = express();
let port = 3000;

//#2 HOW TO MAKE IT PUBLIC
app.use(express.static('public'));

//#3 SETTING UP VIEWS AND EJS
app.set('view engine', 'ejs');
app.set('views', 'views');

//#4 FIND FILES FOR PATHS
app.use(require('./routes/index'));
app.use(require('./routes/speakers'));

//#1 WHERE TO LISTEN
app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
});