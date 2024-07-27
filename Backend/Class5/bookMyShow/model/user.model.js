import { model, Schema } from "mongoose";
import bcrypt from 'bcrypt';

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minLength: [3, 'Min 3 chars'],
        maxLength: [10, 'Max 10 chars'],
        select: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
});

userSchema.pre('save', async function (next) {
    try {
        const user = this;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(user.password, salt);
        user.password = hashedPassword;
    } catch(e) {
        console.log(e);
    }
    next();
});

// userSchema.post('save', function (next) {
//     const user = this;
//     console.log('Post hook');
//     console.log(user);
//     next();
// });

const User = model('user', userSchema);

export default User;