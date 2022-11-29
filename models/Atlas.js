const mongoose = require("mongoose")
const AtlasSchema = mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    state: {
        type:String,
        required:true
    },
    stateranking: {
        type:Number,
        min:1,
        max:500
    }
})
module.exports = mongoose.model("Atlas",
    AtlasSchema)