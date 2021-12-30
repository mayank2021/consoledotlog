import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import _ from 'lodash';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(path.join(__dirname, 'build')));


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

mongoose.connect("mongodb+srv://heymayank12:heymayank12@cluster0.1meyy.mongodb.net/blogDB", {useNewUrlParser:true});

const blogSchema = {
    postTitle:String,
    postBody:String
};

const Blog = mongoose.model("Blog",blogSchema);

app.get("/",(req,res) => {
    Blog.find()
    .then(blogs => res.json(blogs))
    .catch(err => res.status(400).json(err));
});

app.post("/compose", (req, res) => {
 const userPost = new Blog ({
     postTitle:req.body.title,
     postBody:req.body.post
 });

userPost.save()
.then(() => console.log("Added item successfully"))
.catch((err) => console.log(err));
});


app.post("/delete",(req,res) => {
    Blog.deleteOne({_id:req.body._id}, (err) => {
        if(err) console.log(err)
        else console.log("Delete Item successfully");
    })
});

app.post("/update", (req,res) => {
 console.log(req.body);
 Blog.updateOne({_id:req.body._id},{postTitle:req.body.postTitle,postBody:req.body.postBody},(err) => {
     if(err) console.log(err);
     else console.log("Updated Successfully");
 })
});

app.listen(3001 , () => {
    console.log("server up and running at 3001");
})