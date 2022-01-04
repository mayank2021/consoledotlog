import React, { useContext } from "react";
import "./BlogList.css";
import { Link } from "react-router-dom";
import { UserDataContext } from "../../Context/UserDataContext";

const BlogList = ({ id, postTitle, postBody }) => {
  const { handleDelete, handleRedirect } = useContext(UserDataContext);

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  return (
    <div className="container blog-list--container">
      <div className="blog-text">
        <h2>
          {postTitle.length > 14
            ? `${capitalize(postTitle).slice(0, 13)}...`
            : capitalize(postTitle)}
        </h2>
        <p>
          {postBody.length > 150 ? `${postBody.slice(0, 150)}...` : postBody}
          {postBody.length > 124 ? (
            <a href={`/blogs/${id}`}>Read More</a>
          ) : null}
        </p>
      </div>
      <div className="icon-container">
        <Link
          style={{ textDecoration: "none" }}
          className="utility-icon--link"
          to="/update"
        >
          <div
            style={{ width: "100%" }}
            className="utility-icon"
            onClick={() => handleRedirect(id)}
          >
            Edit
          </div>
        </Link>

        <div className="utility-icon" onClick={() => handleDelete(id)}>
          Delete
        </div>
      </div>
    </div>
  );
};

export default BlogList;
