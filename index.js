const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('dist'));
app.get('/', (req, res) => res.render('home'))
app.listen(3000, () => console.log("server started "));