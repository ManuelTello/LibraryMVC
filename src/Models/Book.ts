import mongoose, { Schema } from "mongoose";

const BookSchema = new mongoose.Schema(
    {
        Id:{},
        Title:{},
        Author:{},
        PublishDate:{}
    }
);

const Model = mongoose.model("Book",BookSchema);

export default Model;