const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post, {
    forgeinKey: 'user_id'
});

Post.belongsTo(User, {
    forgeinKey: 'user_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'cascade',
    hooks: true
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'cascade',
    hooks: true
});

User.hasMany(Comment, {
    forgeinKey: 'user_id',
    onDelete: 'cascade',
    hooks: true
});

module.exports = { User, Post, Comment };