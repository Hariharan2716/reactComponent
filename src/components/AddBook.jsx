import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddBook.css";

const AddBook = () => {
    cont [FormData, setFormData] = useState({
        title:"",
        author:"",
        description:"",
        coverImage:"",
    })

    const navigate = useNavigate();

    const handleChange = (e)=>{
        const {name, value} = e.target;
        setFormData((prevData) =>({
            ...prevData,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Book Added:", formData);
        alert("Book added successfully (mock functionality).");
        navigate("/");
    }

    return (
        <div className="add-book-container">
          <h1>Add a New Book</h1>
          <form className="add-book-form" onSubmit={handleSubmit}>
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
    
            <label>Author:</label>
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              required
            />
    
            <label>Description:</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
    
            <label>Cover Image URL:</label>
            <input
              type="url"
              name="coverImage"
              value={formData.coverImage}
              onChange={handleChange}
              required
            />
    
            <div className="form-buttons">
              <button type="submit">Submit</button>
              <button type="button" onClick={() => navigate("/")}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      );
    };
    
    export default AddBook;