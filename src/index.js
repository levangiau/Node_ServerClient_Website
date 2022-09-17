const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override')
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
        helpers: {
            sum: (a, b) => a + b,
        }
    }),
);
app.set('view engine', 'hbs');
// =>>>End mở rộng đuôi file cho handle bars <<<=
app.set('views', path.join(__dirname, 'resource', 'views'));
// orverride lại phương thức khi submit trên form do http chỉ nhận 2 pp là get và post 
// khi dùng khác 2 pp nên override lại
app.use(methodOverride('_method'));
// Routes init
route(app);

db.connect();

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
