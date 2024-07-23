import { model, Schema } from "mongoose";

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
    }
});

userSchema.pre('save', function (next) {
    const user = this;
    console.log('Pre hook');
    console.log(user);
    user.password = user.password + '-encrypted';
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