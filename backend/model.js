import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: String,
    password: String,
    email: String,
})

var UserSchema = mongoose.model('UserSchema', userSchema);

export default UserSchema;