import mongoose from "mongoose";
const userSchema = new Schema({
name:{
    type:String,
    require:true
},
email:{
    type:String,
    require:true,
    unique:true
},
password:{
    type:String,
    require:true,
    minlength:[8,"Password must be at least 8 characters"],
    select: false
},
avatar:{
    public_id:String,
    url:String
},
createdAt:{
    type:Date,
    default:Date.now
},
tasks:[{
    title:"String",
    description:"String",
    completed: Boolean,
    createdAt: Date
}]
   ,
   otp: Number,
   otp_expiry: Date



});
export const User = mongoose.model('User',userSchema)