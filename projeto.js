const Sequelize = require('sequelize');
const database = require('./db')

const Users = database.define('user', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },

    fullname: {
        allowNull: false,
        type: Sequelize.STRING
    },

    email:{
        allowNull: false,
        unique: true,
        type: Sequelize.STRING
    },

    phone:{ 
        allowNull: false,
        type: Sequelize.STRING
    },

    UF:{
        allowNull: false,
        type: Sequelize.STRING
    }

    
})

module.exports = Users;