const { User } = require('../models');

const userData = [
    {
        username: "Andrea",
        email: "andrea@gmail.com",
        password: "password1111"
    },
    {
        username: "Shelby",
        email: "shelby@gmail.com",
        password: "password1111"
    },
    {
        username: "Lori",
        email: "lori@gmail.com",
        password: "password1111"
    },
    {
        username: "Peter",
        email: "peter@gmail.com",
        password: "password1111"
    },
    {
        username: "Wesley",
        email: "wesley@gmail.com",
        password: "password1111"
    }
];

const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers;