/**
 * controller - all logic are here
 * author: seoinfotech
 */
const Event = require('../models/event.model.js');

// Create and Save a new Post

exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
        return res.status(400).send({
            message: "Event title can not be empty"
        });
    }

    // Create a Post
    const event = new Event({
        title: req.body.title,
        content: req.body.content,
        date: req.body.date,
        time: req.body.time,
        location: req.body.location,
        description: req.body.description
    });

    // Save Post in the database
    event.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Event."
            });
        });
};

// Retrieve and return all posts from the database.
exports.findAll = (req, res) => {
    Event.find()
        .then(events => {
            res.send(events);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving events."
            });
        });
};

// find on some criteria
/*Post.findOne({ title: 'seo' }, function (err, data) {
    if(err) {
        res.status(500).send(err);
    }
    res.send(data);
});*/

// Find a single Post with a postId
exports.findOne = (req, res) => {
    Event.findById(req.params.eventId)
        .then(event => {
            if (!event) {
                return res.status(404).send({
                    message: "Event not found with id " + req.params.eventId
                });
            }
            res.send(post);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Event not found with id " + req.params.eventId
                });
            }
            return res.status(500).send({
                message: "Error retrieving event with id " + req.params.eventId
            });
        });
};

// Update a post identified by the postId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body.title) {
        return res.status(400).send({
            message: "Event title can not be empty"
        });
    }

    // Find post and update it with the request body
    Event.findByIdAndUpdate(req.params.eventId, {
        title: req.body.title,
        content: req.body.content,
        date: req.body.date,
        time: req.body.time,
        location: req.body.location,
        description: req.body.description
    }, { new: true })
        .then(event => {
            if (!event) {
                return res.status(404).send({
                    message: "Event not found with id " + req.params.eventId
                });
            }
            res.send(event);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Event not found with id " + req.params.eventId
                });
            }
            return res.status(500).send({
                message: "Error updating event with id " + req.params.eventId
            });
        });
};

// Delete a post with the specified postId in the request
exports.delete = (req, res) => {
    Event.findByIdAndRemove(req.params.eventId)
        .then(event => {
            if (!event) {
                return res.status(404).send({
                    message: "Event not found with id " + req.params.eventId
                });
            }
            res.send({ message: "Event deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Event not found with id " + req.params.eventId
                });
            }
            return res.status(500).send({
                message: "Could not delete event with id " + req.params.eventId
            });
        });
};
