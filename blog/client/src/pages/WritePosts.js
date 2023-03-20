import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../App.css";

function WritePosts() {
  const [value, setValue] = useState("");
  console.log(value);
  return (
    <div className="write">
      <div className="content">
        <input type="text" placeholder="Title" />
        <ReactQuill theme="snow" value={value} onChange={setValue} />
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
          <input style={{ display: "none" }} type="file" id="file" name="" />
          <label className="upload_img" htmlFor="file">
            <span>Upload Image</span>
          </label>
          <div className="buttons">
            <button className="menu-btn">Save as draft</button>
            <button className="menu-btn">Update</button>
          </div>
        </div>
        <div className="item">
          <h3>Category</h3>
          <div className="input-radio-div">
            <input type="radio" name="cat" value="art" id="art" />
            <label htmlFor="art">ART</label>
          </div>
          <div className="input-radio-div">
            <input type="radio" name="cat" value="science" id="science" />
            <label htmlFor="science">SCIENCE</label>
          </div>
          <div className="input-radio-div">
            <input type="radio" name="cat" value="food" id="food" />
            <label htmlFor="food">FOOD</label>
          </div>
          <div className="input-radio-div">
            <input type="radio" name="cat" value="tech" id="tech" />
            <label htmlFor="tech">TECHNOLOGY</label>
          </div>
          <div className="input-radio-div">
            <input type="radio" name="cat" value="cinema" id="cinema" />
            <label htmlFor="cinema">CINEMA</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WritePosts;
