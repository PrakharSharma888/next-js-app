import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please enter a username'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        unique: true
    },
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    forgetPasswordToken: String,
    forgotPasswordExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
})

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;