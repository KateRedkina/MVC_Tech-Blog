const { User } = require('../models');

const userData = [
    {
        "username":"computer",
        "password":"Password123!"
    },
    {
        "username":"katekate",
        "password":"Password123!"
    },
    {
        "username":"testkate",
        "password":"Password123!"
    },
    {
        "username":"typepass",
        "password":"Password123!"
    },
    {
        "username":"tester",
        "password":"Password123!"
    }
]

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;