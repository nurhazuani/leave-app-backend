var Model = require('../models')

const leaveapp = {

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