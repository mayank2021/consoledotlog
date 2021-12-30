import React, { useContext } from "react";
import "./Compose.css";
import { UserDataContext } from "../../Context/UserDataContext";

export const Compose = () => {
  const { handlePublish, handleChange, userPost } = useContext(UserDataContext);

  return (
    <div className="container utility_height">
      <h1>Compose</h1>
      <form onSubmit={handlePublish}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            type="text"
            name="title"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handleChange}
            value={userPost.title}
            required
          />
        </div>
        <div className="mb-3 utility_margin">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Post
          </label>
          <textarea
            type="text"
            name="post"
            className="form-control"
            id="exampleInputPassword1"
            rows="5"
            cols="30"
            onChange={handleChange}
            value={userPost.post}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary utility_margin">
          Publish
        </button>
      </form>
    </div>
  );
};

export default Compose;
