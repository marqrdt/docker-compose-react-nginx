/**
 * model: Post
 * author: Paul Marquardt
 */
const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title: String,
    content: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Post', postSchema);