import { model, Schema } from "mongoose";

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      minLength: [10, "Min 10 characters are required"],
    },
    author: {
      type: String,
      required: true,
    },
    content: String,
  },
  { timestamps: true }
);

const Blog = model("blog", blogSchema);

export default Blog;
