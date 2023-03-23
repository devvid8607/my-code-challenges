import axios from "axios";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useLocation, useNavigate } from "react-router-dom";
import "../App.css";
import moment from "moment";

function WritePosts() {
  const state = useLocation().state;
  const navigate = useNavigate();
  console.log(state);
  const [value, setValue] = useState(state?.desc || "");
  const [title, setTitle] = useState(state?.title || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.category || "");

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("http://localhost:8800/upload", formData);
      return res.data;
    } catch (error) {}
  };

  const handleClick = async (e) => {
    e.preventDefault();
    let imgUrl = await upload();
    imgUrl = imgUrl + ".png";
    console.log(imgUrl);

    try {
      state
        ? await axios.put(
            `http://localhost:8800/api/posts/${state.id}`,
            {
              title,
              desc: value,
              cat,
              img: file ? imgUrl : "",
            },
            {
              withCredentials: true,
            }
          )
        : await axios.post(
            `http://localhost:8800/api/posts/`,
            {
              title,
              desc: value,
              cat,
              img: file ? imgUrl : "",
              date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
            },
            {
              withCredentials: true,
            }
          );
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  console.log(value);
  return (
    <div className="write">
      <div className="content">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <ReactQuill
          theme="snow"
          style={{ height: 350 }}
          value={value}
          onChange={setValue}
        />
      </div>
      <div className="menu">
        <div className="item">
          <h1 className="item-h1">Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input
            style={{ display: "none" }}
            type="file"
            id="file"
            name=""
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label className="upload_img" htmlFor="file">
            <span>Upload Image</span>
          </label>
          <div className="buttons">
            <button className="menu-btn">Save as draft</button>
            <button className="menu-btn" onClick={handleClick}>
              Publish
            </button>
          </div>
        </div>
        <div className="item">
          <h3>Category</h3>
          <div className="input-radio-div">
            <input
              type="radio"
              checked={cat === "art"}
              name="cat"
              value="art"
              id="art"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="art">ART</label>
          </div>
          <div className="input-radio-div">
            <input
              type="radio"
              checked={cat === "science"}
              name="cat"
              value="science"
              id="science"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="science">SCIENCE</label>
          </div>
          <div className="input-radio-div">
            <input
              type="radio"
              checked={cat === "food"}
              name="cat"
              value="food"
              id="food"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="food">FOOD</label>
          </div>
          <div className="input-radio-div">
            <input
              type="radio"
              checked={cat === "tech"}
              name="cat"
              value="tech"
              id="tech"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="tech">TECHNOLOGY</label>
          </div>
          <div className="input-radio-div">
            <input
              type="radio"
              checked={cat === "cinema"}
              name="cat"
              value="cinema"
              id="cinema"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="cinema">CINEMA</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WritePosts;
