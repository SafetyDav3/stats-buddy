const express = require("express");
const exphbs = require("express-handlebars");
const session = require("express-session");
const path = require("path");
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const routes = require('./controllers')
const app = express();
const sequelize = require('./config/connection')
const helpers = require('./utils/helpers')
const hbs = exphbs.create({helpers});
const PORT = process.env.PORT || 3001;

const sess = {
    secret: process.env.DB_SECRET,
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize,
      checkExpirationInterval: 300000,
      expiration: 1200000
    }),
  };
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.use(session(sess));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(require("./controllers"));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Server live at address: http:localhost:${PORT}`));
  });