import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../App.css";
import Menu from "../components/Menu";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import axios from "axios";
import moment from "moment";
import { AuthContext } from "../context/AuthContext";

function SinglePost() {
  const navigate = useNavigate();
  const [post, setPost] = useState([]);
  const postId = useLocation().pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8800/api/posts/${postId}`
        );
        console.log(res.data);
        setPost(res.data);
      } catch (error) {}
    };
    fetch();
  }, [postId]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8800/api/posts/${postId}`, {
        withCredentials: true,
      });
      navigate("/");
    } catch {}
  };

  return (
    <div className="singlePost">
      <div className="content">
        <img src={post.img} className="content_pic" alt="user" />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="user_pic"
            alt="user"
          />
          <div className="info">
            <span>{post.uid}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser.username === post.username && (
            <div className="edit">
              <Link to={`/write?edit=${post.id}`} state={post}>
                <img className="edit-img" src={Edit} alt="edit" />
              </Link>
              <Link>
                <img
                  className="edit-img"
                  onClick={handleDelete}
                  src={Delete}
                  alt="delete"
                />
              </Link>
            </div>
          )}
        </div>
        <h1 className="blog-heading">{post.title}</h1>
        <p className="blog-para">{post.desc}</p>
        <p className="blog-para">{post.desc}</p>
        <p className="blog-para">{post.desc}</p>
      </div>

      <Menu cat={post.category} />
    </div>
  );
}

export default SinglePost;
