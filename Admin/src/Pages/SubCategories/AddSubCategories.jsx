import React, { useState, useEffect } from "react";
import axios from "axios";

const AddProduct = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(""); // Only category, no subcategory
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("");
  const [type, setType] = useState("");
  const [temp, setTemp] = useState("");
  const [application, setApplication] = useState("");
  const [price, setPrice] = useState("");
  const [use, setUse] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch categories from API (without subcategories)
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://api.shrirattantraders.com/api/v1/category"
        );
        setCategories(response.data.data);
      } catch (err) {
        setError("Error fetching categories");
      }
    };
    fetchCategories();
  }, []);

  // Handle Image Upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!application) {
      setError("Please fill all fields");
      return;
    }
    setLoading(true);
    setError("");

    const formData = new FormData();
    formData.append("name", productName);
    formData.append("category", selectedCategory); // Sending category (not subcategory)
    formData.append("description", description);
    formData.append("color", color);
    formData.append("temp", temp);
    formData.append("application", application);
    formData.append("price", price);
    formData.append("use", use);
    formData.append("type", type);
    formData.append("image", image);

    try {
      await axios.post(
        "https://api.shrirattantraders.com/api/v1/product",
        formData
      );
      setLoading(false);
      alert("Product added successfully!");
      setProductName("");
      setSelectedCategory("");
      setDescription("");
      setColor("");
      setTemp("");
      setApplication("");
      setPrice("");
      setUse("");
      setType("");
      setImage(null);
      setImagePreview("");
    } catch (err) {
      setLoading(false);
      setError("Error adding product");
    }
  };

  return (
    <div className="container mt-4">
      <div className="card shadow">
        <div className="card-header bg-dark text-white">
          <h4 className="mb-0">Add Product</h4>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            {/* Category Dropdown */}
            <div className="mb-3">
              <label htmlFor="category" className="form-label">
                Select Category
              </label>
              <select
                className="form-select"
                id="category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                required
              >
                <option value="">Choose a category</option>
                {categories.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Brand Name */}
            <div className="mb-3">
              <label htmlFor="productName" className="form-label">
                Brand
              </label>
              <input
                type="text"
                className="form-control"
                id="productName"
                placeholder="Enter Brand name"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                required
              />
            </div>

            {/* Description */}
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                className="form-control"
                id="description"
                rows="3"
                placeholder="Enter product description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
            </div>

            {/* Type */}
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Type
              </label>
              <textarea
                className="form-control"
                id="type"
                rows="3"
                placeholder="Enter product type"
                value={type}
                onChange={(e) => setType(e.target.value)}
                required
              ></textarea>
            </div>

            {/* Color */}
            {/* <div className="mb-3">
              <label htmlFor="color" className="form-label">
                Color
              </label>
              <input
                type="text"
                className="form-control"
                id="color"
                placeholder="Enter product color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                required
              />
            </div> */}

            {/* Temperature */}
            <div className="mb-3">
              <label htmlFor="temp" className="form-label">
                Grade
              </label>
              <input
                type="text"
                className="form-control"
                id="temp"
                placeholder="Enter Grade"
                value={temp}
                onChange={(e) => setTemp(e.target.value)}
                required
              />
            </div>

            {/* Application */}
            <div className="mb-3">
              <label htmlFor="application" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="application"
                placeholder="Enter Name"
                value={application}
                onChange={(e) => setApplication(e.target.value)}
                required
              />
            </div>

            {/* Price */}
            {/* <div className="mb-3">
              <label htmlFor="price" className="form-label">
                Price
              </label>
              <input
                type="number"
                className="form-control"
                id="price"
                placeholder="Enter price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </div> */}

            {/* Use */}
            <div className="mb-3">
              <label htmlFor="use" className="form-label">
                Size
              </label>
              <input
                type="text"
                className="form-control"
                id="use"
                placeholder="Enter product Size"
                value={use}
                onChange={(e) => setUse(e.target.value)}
                required
              />
            </div>

            {/* Image Upload */}
            <div className="mb-3">
              <label htmlFor="productImage" className="form-label">
                Upload Image
              </label>
              <input
                type="file"
                className="form-control"
                id="productImage"
                accept="image/*"
                onChange={handleImageChange}
                required
              />
            </div>

            {/* Image Preview */}
            {imagePreview && (
              <div className="mb-3">
                <label className="form-label">Image Preview</label>
                <div className="border p-2">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    style={{
                      width: "100%",
                      maxHeight: "200px",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </div>
            )}

            {/* Error Message */}
            {error && <div className="alert alert-danger">{error}</div>}

            {/* Submit Button */}
            <button
              type="submit"
              className="btn btn-primary w-100"
              disabled={loading}
            >
              {loading ? "Adding..." : "Add Product"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
