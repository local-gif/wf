const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static('public'));

let recipes = [
    {
        id: 1,
        title: "Pasta",
        description: "Delicious creamy pasta."
    },
    {
        id: 2,
        title: "Sandwich",
        description: "Quick and tasty sandwich."
    }
];

app.get('/', (req, res) => {
    res.render('home', { recipes });
});

app.get('/recipe/:id', (req, res) => {
    const recipe = recipes.find(r => r.id == req.params.id);
    res.render('recipe', { recipe });
});

app.get('/add', (req, res) => {
    res.render('add');
});

app.post('/recipes', (req, res) => {
    const newRecipe = {
        id: Date.now(),
        title: req.body.title,
        description: req.body.description
    };

    recipes.push(newRecipe);
    res.redirect('/');
});

app.delete('/recipes/:id', (req, res) => {
    recipes = recipes.filter(r => r.id != req.params.id);
    res.redirect('/');
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
