const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Cource = new Schema({
    name: { type: String, default: '', maxLength: 150, minLength: 1 },
    description: { type: String, default: '', maxLength: 255 },
    slug: { type: String, default: '' },
    videoid: { type: String, default: '' },
    level: { type: String, default: '' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Cource', Cource);