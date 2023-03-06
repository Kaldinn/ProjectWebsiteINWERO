const express = require("express")
const bodyParser = require("body-parser")
const ejs = require("ejs")

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views')

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.render('home')
})







app.listen(3000, ()=> {
    console.log("Server started on port 3000")
})