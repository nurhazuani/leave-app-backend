var Model = require('../models')

const profiles = {

     getAllProfile: async (req, res) => {
        let profile = []
		try {
            user = await Model.Profile.findAll()
		} catch(e) {
				console.log(e)
		}

		res.json(profile)
    },

    getProfile: async (req, res) => {
        let profile = []
        
        console.log(req)

		try {
			user = await Model.Profile.findOne({
				where: {
					uid: req.params.uid
                }
			})
		} catch(e) {
				console.log(e)
		}

		res.json(profile)
	},

    addProfile: async (req, res) => {
        let profile = {}

        console.log(req)

        try{
            user = await Model.Profile.create({
              
                phone:  req.body.phone,
                addr: req.body.addr,
				UserId: req.params.uid //pk
            })
        } catch(e){
            console.log(e)
        }
        res.json(profile) //insert data at table user
    },

    updateProfile: async (req, res) => {
        let profile = {}

        try{
            profile = await Model.Profile.update(
                req.body, {
                    where:{
                        uid: req.params.uid
                    }

            })

        }catch(e){
            console.log(e)
        }
        res.json(profile)

    }, 

}


module.exports = profiles