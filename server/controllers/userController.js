const {User} = require('../models/models')

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');


const generateAccessToken = (id, role) => {
    const secret = process.env.SECRET
    const payload = {
        id,
        role
    }
    return jwt.sign(payload, secret, {expiresIn: '24h'})
}

class userController {
    async registration(req, res) {
        try {
            const {email, password} = req.body
            const candidate = await User.findOne({where: {email}})

            if(candidate){
                return res.status(400).json('This user name is already taken. Please use different one.')
            }

            const hashPassword = bcrypt.hashSync(password, 7)
            
            const user = await User.create({email, password: hashPassword})

            return res.json('User has been succesfully registrated!')

        } catch (e) {
            console.log(e)
            res.status(400).json({message: 'Registration error'})
        }
    }


    async login(req, res) {
        try {
            const {email, password} = req.body
            const user = await User.findOne({
                where: {email}
            })

            if(!user) {
                res.status(400).json({message: `User with ${email} is not found!`})
            }

            const validPassword = bcrypt.compareSync(password, user.password)

            if(!validPassword) {
                return res.status(400).json({message: 'Password is not correct'})
            }

            const token = generateAccessToken(user.id, user.role)
            
            return res.json({token})

        } catch (e) {
            console.log(e)
            res.status(400).json({message: 'Login error'})
        }
    }



    async getUsers(req, res) {
        try {
            const users = await User.findAll()
            res.json(users)
        } catch (e) {
            res.status(400).json({message: 'Get Users error'})
        }
    }


    async deleteOne(req, res) {
        try {
            const id = req.params.id
            const user = await User.destroy({
                where: {
                    id: id
                } 
            })
            res.json(user)
        } catch (e) {
            res.status(400).json({message: 'delete Users error'})
        }
    }
}

module.exports = new userController()