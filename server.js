const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const hbs = exphbs.create({});

const routes = require('./controllers')
const app = express();
const PORT = process.env.PORT || 3001;

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(require("./controllers"));

app.use(routes);

app.listen(PORT, () => {
    console.log(`Server live at address: http:localhost:${PORT} `);
});

// sequelize.sync({ force: false }).then(() => {
//     app.listen(PORT, () => console.log('Now listening'));
//   });