const { Model, dataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGAR,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        comment_text: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        user_id: {
            type: DataTypes.INTEGAR,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        post_id: {
            type: DataTypes.INTEGAR,
            references: {
                model: 'post',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        modelName: 'comment'
    }
);

module.exports = Comment;