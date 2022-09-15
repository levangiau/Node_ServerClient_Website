const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
const db = require('./config/db')
const app = express();
const port = 3500;

const route = require('./routes');

// setup static file and scss
app.use(express.static(path.join(__dirname, 'public')));
// setup để lấy được thông tin trong body trong form method='post' của html
app.use(
    express.urlencoded({
        extended: true,
    }),
);
// setup để lấy thông tin bằng phương thức:XMLHttpRequest,fetch,axios,...
app.use(express.json());
// Http logger
// app.use(morgan('combined'));
// Template engine defaul khi tạo

// app.engine('handlebars', handlebars.engine());
// app.set('view engine', 'handlebars');

// =>>> Mở rộng đuôi file cho handle bars <<<=
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
// =>>>End mở rộng đuôi file cho handle bars <<<=
app.set('views', path.join(__dirname, 'resource', 'views'));

// Routes init
route(app);

db.connect();

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
