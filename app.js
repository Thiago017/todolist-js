//const
const routes = require('./routes/routes');
const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const app = express();

//use
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/public/', express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
app.use(routes);

//set
app.set('views', path.join(__dirname, './src/views'));
app.set('view engine', 'ejs');

app.listen(3000, () => {
  console.log(' The server has started!');
});

