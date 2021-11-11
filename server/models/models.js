const sequelize = require('../db')

const {DataTypes} = require('sequelize')


// const User
// const Task

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    email: {type: DataTypes.STRING, unique: true, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false},
    role: {type: DataTypes.STRING, defaultValue: 'USER'},
    name: {type: DataTypes.STRING},
    img: {type: DataTypes.STRING},
})

const Task = sequelize.define('task', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    task: {type: DataTypes.STRING},
    // completed: {type: DataTypes.STRING, defaultValue: false}
})



User.hasMany(Task)
Task.belongsTo(User)




module.exports = {
    User,
    Task
}
