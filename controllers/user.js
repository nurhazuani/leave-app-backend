var Model = require('../models')

// const Joi = require('@hapi/joi');


const user = {

     getAllUser: async (req, res) => {
        let user = []
		try {
            user = await Model.User.findAll({
                include: [{
                    model: Model.Leave
                }],
                })
		} catch(e) {
				console.log(e)
		}

        res.json(user)
       
    },

    getUser: async (req, res) => {
        let user = []
        
        // console.log(req)

		try {
			user = await Model.User.findOne({
				where: {
					uid: req.params.uid
                },
                include: [{
                    model: Model.Leave,
                }]
			})
		} catch(e) {
				console.log(e)
		}

        res.json(user)
        console.log(user)
	},

    createUser: async (req, res) => {
        let user = {}

        console.log(req)

        try{
            user = await Model.User.create({
                uid: req.body.uid,
                uname: req.body.uname,
                email: req.body.email,
                role: req.body.role,
                password: req.body.password,
            })

        } catch(e){
            console.log(e)
        }
        res.json(user)
        console.log(user)
    },

    updateUser: async (req, res) => {
        let user = {}

        try{
            user = await Model.User.update(
                req.body, {
                    where:{
                        uid: req.params.uid
                    }
            })

        }catch(e){
            console.log(e)
        }
        res.json(user)

    },

    deleteUser: async (req,res) => {

        await Model.User.destroy({
			where: {
				uid: req.params.uid
			}	
		})

		res.status(204).json({
			status: 'Success Delete'
		})
    },

}


module.exports = user