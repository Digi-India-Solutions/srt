import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        "https://api.shrirattantraders.com/api/v1/product"
      );
      console.log(response);
      if (response) {
        setCategories(response.data.products);
        setLoading(false);
      }
    } catch (err) {
      setError(`Error fetching categories: ${err.message}`);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleEdit = (categoryId) => {
    navigate(`edit-subcategories/${categoryId}`);
  };

  const handleDelete = async (categoryId) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      try {
        const response = await axios.delete(
          `https://api.shrirattantraders.com/api/v1/product/${categoryId}`
        );
        if (response.status === 200) {
          setCategories((prevCategories) =>
            prevCategories.filter((category) => category._id !== categoryId)
          );
          alert("Category deleted successfully!");
        }
      } catch (err) {
        console.error("Error deleting category:", err);
        setError(`Error deleting category: ${err.message}`);
      }
    }
  };

  if (loading) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  if (error) {
    return <div className="alert alert-danger mt-5">{error}</div>;
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Products</h2>

      {/* Always show the "Add Products" button */}
      <Link to="/addproducts" className="btn btn-primary mb-3">
        + Add Products
      </Link>

      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Category</th>
            <th>Name</th>
            <th>Description</th>
            <th>Type</th>
            <th>Size</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.length > 0 ? (
            categories
              .filter((category) => category.category)
              .map((category, index) => (
                <tr key={category._id}>
                  <td>{index + 1}</td>
                  <td>{category.category?.name || "No Category"}</td>
                  <td>{category.application}</td>
                  <td>{category.description}</td>
                  <td>{category.type}</td>
                  <td>{category.use}</td>
                  <td>
                    <img
                      src={category.image}
                      alt={category.name}
                      style={{
                        width: "60px",
                        height: "60px",
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                    />
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <button
                        className="btn btn-sm btn-primary me-2"
                        onClick={() => handleEdit(category._id)}
                      >
                        <i className="bi bi-pencil-square"></i> Edit
                      </button>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleDelete(category._id)}
                      >
                        <i className="bi bi-trash"></i> Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
          ) : (
            <tr>
              <td colSpan="8" className="text-center text-muted py-4">
                <h5>No products available.</h5>
              </td>
            </tr>
          )}
          {error && <div className="alert alert-danger mt-3">{error}</div>}
        </tbody>
      </table>
    </div>
  );
};

export default Categories;
