const mongoose = require("mongoose")
const AtlasSchema = mongoose.Schema({
    name: String,
    state: String,
    stateranking: Number
})
module.exports = mongoose.model("Atlas",
    AtlasSchema)