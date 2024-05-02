import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
    required: true
    },
    password: {
        type: String,
        required: true
    },
});

export default mongoose.model("users", userSchema)