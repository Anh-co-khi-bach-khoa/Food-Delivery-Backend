import mongoosse from 'mongoose'

const orderSchema = new mongoosse.Schema({
    userId:{type:String, require:true},
    items:{type:Array, require:true},
    amount:{type:Number, require:true},
    address: {type:Object, require:true},
    status: {type:String, default:"Food Processing"},
    date:{type:Date, default:Date.now()},
    payment:{type:Boolean, default:false}
})

const orderModel = mongoosse.models.order || mongoosse.model("order", orderSchema)
export default orderModel