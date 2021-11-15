const { Comment } = require('../models');

const commentData = [
    {
        comment_text: "MVC can do it all!",
        post_id: 1,
        user_id: 3
    },
    {
        comment_text: "Hmm this is so good to know!",
        post_id: 2,
        user_id: 2
    },
    {
        comment_text: "Object relational mapping takes forever...",
        post_id: 3,
        user_id: 4
    },
    {
        comment_text: "MVC can somebody explain some more??",
        post_id: 1,
        user_id: 1
    },
    {
        comment_text: "This site is authorized!",
        post_id: 2,
        user_id: 3
    },
    {
        comment_text: "ORM I got to get working on this",
        post_id: 3,
        user_id: 5
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;