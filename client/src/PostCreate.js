import React, { useState, useEffect } from "react";
import axios from "axios";

const PostCreate = () => {
  const [title, setTitle] = useState("");

  const handleChange = e => {
    setTitle(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post(
      "https://4000-fe888763-7f64-447c-8ccc-975f797f602f.ws-eu01.gitpod.io/posts",
      {
        title
      }
    );
    setTitle("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            className="form-control"
            value={title}
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default PostCreate;
