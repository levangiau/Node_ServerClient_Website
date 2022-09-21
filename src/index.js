const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override')
const path = require('path');
const db = require('./config/db')
const app = express();
const port = 3000;

const route = require('./routes');
const SortMiddlewares = require('./app/middlewares/SortMiddlewares');

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
//custom Middleware
app.use(SortMiddlewares);
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
            sortable: (field, sort) => {
                const current = field === sort.column ? sort.type : 'default';
                const icons = {
                    default: 'fa-solid fa-sort',
                    asc: 'fa-solid fa-sort-up',
                    desc: 'fa-solid fa-sort-down',
                }
                const types = {
                    default: 'asc',
                    asc: 'desc',
                    desc: 'asc',
                }
                const icon = icons[current];
                const type = types[sort.type];
                return `<a href="?_sort&&column=${field}&&type=${type}">
                <i class="${icon}"></i>
            </a>`
            }
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
