const {Task} = require('../models/models')

class taskController{
    async create(req, res) {
        try {
            const {task} = req.body
            const newTask = await Task.create({task})
            return res.json(newTask)

        } catch (e) {
            console.log(e)
            res.status(400).json({message: 'taskController error'})
        }
    }

    async getAll(req, res) {
        try {
            const tasks = await Task.findAll()
            return res.json(tasks)

        } catch (e) {
            console.log(e)
            res.status(400).json({message: 'taskController error'})
        }
    }

    async deleteOne(req, res) {
        try {
            const id = req.params.id
            const task = await Task.destroy({
                where: {
                    id: id
                } 
            })
            res.json(task)
        } catch (e) {
            console.log(e)
            res.status(400).json({message: 'taskController error'})
        }
    }
}

module.exports = new taskController()