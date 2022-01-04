import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 3001;
mongoose.connect(
  `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.1meyy.mongodb.net/blogDB`,
  { useNewUrlParser: true }
);

const blogSchema = {
  postTitle: String,
  postBody: String,
};

const Blog = mongoose.model("Blog", blogSchema);

app.get("/", (req, res) => {
  Blog.find()
    .then((blogs) => res.json(blogs))
    .catch((err) => res.status(400).json(err));
});

app.post("/compose", (req, res) => {
  const userPost = new Blog({
    postTitle: req.body.title,
    postBody: req.body.post,
  });

  userPost
    .save()
    .then(() => console.log("Added item successfully"))
    .catch((err) => console.log(err));
});

app.post("/delete", (req, res) => {
  Blog.deleteOne({ _id: req.body._id }, (err) => {
    if (err) console.log(err);
    else console.log("Delete Item successfully");
  });
});

app.post("/update", (req, res) => {
  console.log(req.body);
  Blog.updateOne(
    { _id: req.body._id },
    { postTitle: req.body.postTitle, postBody: req.body.postBody },
    (err) => {
      if (err) console.log(err);
      else console.log("Updated Successfully");
    }
  );
});

app.listen(PORT, () => {
  console.log("server up and running at 3001");
});
