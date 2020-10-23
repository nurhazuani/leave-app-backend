var Model = require('../models')

const leaveapp = {

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
        
        console.log(req)

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
	},

    createUser: async (req, res) => {
        let user = {}

        // console.log(req)

        try{
            user = await Model.User.create({
                uid: req.body.uid,
                uname: req.body.uname,
                email: req.body.email,
                password: req.body.password,
                role: req.body.role
            })
        } catch(e){
            console.log(e)
        }
        res.json(user) //insert data at table user
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
    
    addLeave: async (req, res) => {

		let leave = {}

        console.log(req)
        
		try {
			leave = await Model.Leave.create({

                title:  req.body.title,
                desc: req.body.desc,
                typeLeave: req.body.typeLeave,
                status: req.body.status,
                datefrom: req.body.datefrom,
                dateto: req.body.dateto,
				UserUid: req.params.uid //pk
			})
		} catch(e) {
			console.log(e)
		}

		res.json(leave)
    },

    updateLeave: async (req, res) => {
        let leave = {}

        try{
            leave = await Model.Leave.update(
                req.body, {
                    where:{
                        id: req.params.id,
                        UserUid: req.params.uid
                    }

            })

        }catch(e){
            console.log(e)
        }
        res.json(leave)

    },

}


module.exports = leaveapp