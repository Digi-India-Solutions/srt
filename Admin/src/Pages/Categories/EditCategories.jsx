import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditCategory = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [categoryName, setCategoryName] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(""); // Image preview
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch category data
  const getCategory = async () => {
    try {
      const response = await axios.get(
        `https://api.shrirattantraders.com/api/v1/category/${id}`
      );
      setCategoryName(response.data.name);
      setPreview(response.data.image); // Set existing image
    } catch (err) {
      setError("Error fetching category data.");
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file)); // Use URL.createObjectURL for preview
      // console.log("Selected Image:", file); // Debugging
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("name", categoryName);
    if (image) {
      formData.append("image", image);
    }

    try {
      await axios.patch(
        `https://api.shrirattantraders.com/api/v1/category/${id}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      setLoading(false);
      alert("Category updated successfully!");
      navigate("/categories");
    } catch (err) {
      setLoading(false);
      setError("Error updating category.");
      console.error("Update Error:", err.response?.data || err.message);
    }
  };

  return (
    <div className="container mt-2">
      <h2>Edit Category</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        {/* Category Name Input */}
        <div className="mb-3">
          <label htmlFor="categoryName" className="form-label">
            Category Name
          </label>
          <input
            type="text"
            id="categoryName"
            className="form-control"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            required
          />
        </div>

        {/* Category Image Input */}
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Category Image
          </label>
          <input
            type="file"
            id="image"
            className="form-control"
            onChange={handleImageChange}
          />
          {/* Image Preview */}
          {preview && (
            <div className="mt-3">
              <img
                src={preview}
                alt="Category Preview"
                className="img-thumbnail"
                style={{ width: "200px", height: "200px", objectFit: "cover" }}
              />
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? "Updating..." : "Update Category"}
        </button>
      </form>
    </div>
  );
};

export default EditCategory;
