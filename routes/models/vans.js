const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create vans Schema & model
const VanSchema = new Schema({
name: {
    type:String,
    required: [true, 'Name field is required']
},
rank:{
    type: String
},
available: {
    type: Boolean,
    default:false
}
//add in geo location
});
const Van = mongoose.model('van', VanSchema);

module.exports = Ninja;