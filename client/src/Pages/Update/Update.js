import React, {useContext,useEffect } from "react";
import "./Update";
import { UserDataContext } from "../../Context/UserDataContext";

export const Update = () => {
  const { editBlogId,setUserEditPost, userEditPost, posts, handleUpdate } = useContext(UserDataContext);

  useEffect(() => {
    posts.map(ele => {
        if(editBlogId === ele._id){
          setUserEditPost(ele)
        }
    })
  }, [])

  return (
    <div className="container utility_height">
      <h1>Update</h1>
      <form onSubmit={handleUpdate}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={userEditPost.postTitle}
            onChange={(ele) => setUserEditPost({ ...userEditPost, postTitle:ele.target.value})}

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
            onChange={(ele) => setUserEditPost({ ...userEditPost, postBody:ele.target.value})}
            value={userEditPost.postBody}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary utility_margin">
          Update
        </button>
      </form>
    </div>
  );
};

export default Update;
