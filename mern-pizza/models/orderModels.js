const mongoose = require("mongoose");

const ordersSchema = mongoose.Schema({
    // name: {type:String, require},
    // email:{type:String , require},
    userid:{type: String, require},
    orderItems:[],
    shippingAddress:{type:Object},
    orderAmount:{type:Number,require},
    isDelivered:{type:Boolean,require,default:false},
    transactionId:{type:String,require},
    payment_confirmation:{type:Boolean,require,default:false},
},{
    timestamps: true
})

module.exports=mongoose.model('orders',ordersSchema)