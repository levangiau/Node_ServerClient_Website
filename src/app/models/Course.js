const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

// mặc định mongoose < 4.0 phải tạo ra ngày tháng.
// const Cource = new Schema({
//     name: { type: String, default: '', maxLength: 150, minLength: 1, required: true },
//     description: { type: String, default: '', maxLength: 255 },
//     slug: { type: String, default: '' },
//     videoid: { type: String, default: '' },
//     level: { type: String, default: '' },
//     createdAt: { type: Date, default: Date.now },
//     updatedAt: { type: Date, default: Date.now }
// });

// mặc định mongoose > 4.0 hỗ trợ tạo ra ngày tháng.
const Cource = new Schema({
    name: { type: String, default: '', maxLength: 150, minLength: 1, required: true },
    description: { type: String, default: '', maxLength: 255 },
    slug: { type: String, slug: 'name', unique: true }, // unique giúp cho slug không bị trùng nhau=> nếu trùng nhau thì nó sẽ thêm ký tự vào
    videoid: { type: String, default: '' },
    level: { type: String, default: '' },
    image: { type: String, default: '' },
}, { timestamps: true });

mongoose.plugin(slug);
Cource.plugin(mongooseDelete, { overrideMethods: 'all', deletedAt: true });

module.exports = mongoose.model('Cource', Cource);