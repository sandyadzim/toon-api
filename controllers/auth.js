const jwt = require('jsonwebtoken')

const models = require('../models')
const User = models.user

exports.login = (req, res) =>{
    const email = req.body.email
    const password = req.body.password
    const name = req.body.name

    User.findOne({where: {email, password}}).then(user=>{

        if(user){
            const token = 'Bearer ' + jwt.sign({ userId: user.id}, 'my-secret-key')
            res.send({
                id: user.id,
                email,
                token,
                name: user.name,
                message:  'Login Sukses!!'
            })
        }else{
            res.send({
                error:true,
                message: "Email yang anda masukkan salah!"
            })
        }
    })
}