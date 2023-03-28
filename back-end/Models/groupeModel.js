const mongoose = require('mongoose')


const groupeSchema = new mongoose.Schema(
    {
        code:{
            type:String
        },
        nom:{
            type:String,
        },
        capacite:Number,
        listDesStagiaires:Array
    }
)



module.exports = GroupeModel = mongoose.model("groupe",groupeSchema)