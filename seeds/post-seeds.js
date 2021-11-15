const { Post } = require('../models');

const postData = [
    {
        title: 'Why MVC is so important?',
        post_text: 'MVC allow developers to maintain a seperation of concerns, devising their code between the Model layer for data, the View layer for design, and the controller layer for application logic.',
        user_id: 1
    },
    {
        title: 'Authentication vs. Authorization',
        post_text: ' There is a difference between authentication and authorization. Auuthentication means confirming your own identity, whereas authorization means being allowed access to the system.',
        user_id: 2,
    },
    {
        title: 'Object-Relational Mapping',
        post_text: 'ORM is programming technique for converting data between incompatible type systems using object-oriented programming languages.',
        user_id: 3
    },
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;