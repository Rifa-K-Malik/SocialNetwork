import mongoose from "mongoose";
const Schema = mongoose.Schema;

const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    photo: { type: String, required: true },
    postedBy: { type: Schema.Types.ObjectId, ref: "user" }
});
mongoose.model("Post", postSchema)
