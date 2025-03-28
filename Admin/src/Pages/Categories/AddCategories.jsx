import React, { useState } from "react";
import axios from "axios";

const AddCategory = () => {
  const [name, setName] = useState(""); // State for category name
  const [image, setImage] = useState(null); // State for category image
  const [error, setError] = useState(""); // State for error messages
  const [success, setSuccess] = useState(""); // State for success messages

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!name.trim()) {
      setError("Category name is required.");
      setSuccess(""); // Clear any success messages
      return;
    }

    // Create FormData object
    const formData = new FormData();
    formData.append("name", name); // Append category name
    if (image) {
      formData.append("image", image); // Append category image if available
    }

    try {
      // Sending form data via a POST request
      const response = await axios.post(
        "https://api.shrirattantraders.com/api/v1/category",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Set content type for file upload
          },
        }
      );

      setName(""); // Clear category name input
      setImage(null); // Clear image input
      setError(""); // Clear any error messages
      setSuccess("Category added successfully!"); // Show success message

      // console.log("Response:", response.data);
    } catch (err) {
      // Set error message based on the error type
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
      setSuccess(""); // Clear success message
    }
  };

  return (
    <div className="container mt-2">
      <div className="card shadow">
        <div className="card-header bg-light">
          <h4>Add Category</h4>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            {/* Category Name Input */}
            <div className="mb-3">
              <label htmlFor="categoryName" className="form-label">
                Category Name
              </label>
              <input
                type="text"
                className="form-control"
                id="categoryName"
                placeholder="Enter category name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            {/* Category Image Input */}
            <div className="mb-3">
              <label htmlFor="categoryImage" className="form-label">
                Category Image
              </label>
              <input
                type="file"
                className="form-control"
                id="categoryImage"
                onChange={(e) => setImage(e.target.files[0])} // Set the selected file
              />
            </div>

            {/* Display success or error messages */}
            {error && <div className="alert alert-danger">{error}</div>}
            {success && <div className="alert alert-success">{success}</div>}

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary w-100">
              Add Category
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
