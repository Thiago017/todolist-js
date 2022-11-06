const routes = require('./routes/routes');
const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());

app.use('/public/', express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, './src/views'));
app.set('view engine', 'ejs');

app.listen(3000, () => {
  console.log('The server has started!');
});

app.use(routes);
