require('dotenv').config()
const User = require('./Schema')
const { connect } = require('mongoose')
const { hash } = require('bcryptjs')

const GetUserProfile = (req, res) => {
    res.send('Hello bro?')
}

const Signup = async (req, res) => {
    const { username, password, email } = req.body;

    try {
        await connect(process.env.MONGO_URL)
        // console.log("DB connected")

        const userExist = await User.exists({ email: email })
        if (userExist) {
            res.json({
                Message: "User already exist"
            })
        }
        else {
            await User.create({ username, password: await hash(password, 12), email })
            console.log("Sucessfully Data Insert")
            res.status(201).json(
                {
                    Message: "done"
                }
            )
        }

    } catch (error) {
        res.json(
            {
                Message: "Error"
            }
        )
    }
}

const Login = (req, res) => {
    res.json(
        {
            Message: "Login"
        }
    )
}

module.exports = { GetUserProfile, Login, Signup }

