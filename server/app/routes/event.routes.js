/**
 * Route file
 * author: seoinfotech
 */
module.exports = (app) => {
    const events = require('../controllers/event.controller.js');

    // Create a new Post
    app.post('/events', events.create);

    // Retrieve all Posts
    app.get('/events', events.findAll);

    // Retrieve a single Post with postId
    app.get('/events/:eventId', events.findOne);

    // Update a Post with postId
    app.put('/events/:eventId', events.update);

    // Delete a Post with postId
    app.delete('/events/:eventId', events.delete);
}