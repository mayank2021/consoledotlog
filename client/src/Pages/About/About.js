import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="container utility_height">
      <h1>About</h1>
      <p className="description-para">
        The CONSOLE.LOG app allows you to post, edit, save, and delete your blog
        posts. You can compose posts from anywhere, anytime with the app. You
        can save your post and edit it on a computer.
      </p>
      <h3>What can I do here?</h3>
      <p>You can do the following things listed below.</p>
      <ul>
        <li>You can compose a post.</li>
        <li>You can edit a post.</li>
        <li>You can delete a post.</li>
        <li>You can open a blog in a new page by clicking Read more.</li>
      </ul>
    </div>
  );
};

export default About;
