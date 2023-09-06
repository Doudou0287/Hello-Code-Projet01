import mongoose from "mongoose";

const { Schema, model } = mongoose;

const articleSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    summary: {
        type: String,
        required: true,
    } ,
    content: {
        type: String,
        required: true,
    },
    publishedDate: {
        type: Date,
        default: Date.now, // Set the default value to the current date and time
    },
    lastModifiedDate: {
        type: Date,
        default: Date.now, // Set the default value to the current date and time
    },
    tags: [String],
    hasQCM:{
        type: Boolean,
        default: false
    } 
});

const Article = model('Article', articleSchema);

export default Article