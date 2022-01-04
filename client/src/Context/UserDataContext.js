import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserDataContext = createContext();

const UserDataContextProvider = (props) => {
  const [userPost, setUserPost] = useState({ title: "", post: "" });
  const [userEditPost, setUserEditPost] = useState({
    postTitle: "",
    postBody: "",
  });

  const [posts, setPosts] = useState([]);
  const [editBlogId, setEditBlogID] = useState(null);

  const url = "http://localhost:3001";
  //Get Data From Databse
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  //Send Data To The Database
  const handlePublish = (eve) => {
    eve.preventDefault();
    axios
      .post(`${url}/compose`, userPost)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(`Compose Error:${err}`));
    setUserPost({ title: "", post: "" });
    window.location = window.location.origin;
  };

  const handleChange = (eve) => {
    const { name, value } = eve.target;
    setUserPost({ ...userPost, [name]: value });
  };

  //Delete Data From The Database
  const handleDelete = (id) => {
    const userId = { _id: id };
    axios
      .post(`${url}/delete`, userId)
      .then((res) => console.log(res))
      .catch((err) => console.log(`Delete Error: ${err}`));
    window.location.reload(false);
  };

  //Update Data From Database

  const handleRedirect = (id) => {
    setEditBlogID(id);
  };

  const handleUpdate = (eve) => {
    eve.preventDefault();
    axios
      .post(`${url}/update`, userEditPost)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    window.location = window.location.origin;
  };

  return (
    <div>
      <UserDataContext.Provider
        value={{
          handlePublish,
          handleChange,
          handleDelete,
          handleUpdate,
          handleRedirect,
          setUserEditPost,
          userEditPost,
          editBlogId,
          userPost,
          posts,
        }}
      >
        {props.children}
      </UserDataContext.Provider>
    </div>
  );
};

export default UserDataContextProvider;
