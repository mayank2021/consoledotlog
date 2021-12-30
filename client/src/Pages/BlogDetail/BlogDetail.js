import React, {useContext ,useEffect, useState } from "react";
import "./BlogDetail.css";
import { useParams } from "react-router-dom";
import { UserDataContext } from "../../Context/UserDataContext";

const BlogDetail = () => {
  const { posts } = useContext(UserDataContext);
  const [blogDetail, setBlogDetail] = useState({});
  const { id }  =  useParams();

  useEffect(() => {
    posts.map(ele => {
         if(id === ele._id){
           setBlogDetail(ele);
         }
       }) 
  }, [posts.length]);

  return (
    <div className="container utility_height">
      <h1>{blogDetail.postTitle}</h1>
      <p>{blogDetail.postBody}</p>
    </div>
  );
};

export default BlogDetail;
