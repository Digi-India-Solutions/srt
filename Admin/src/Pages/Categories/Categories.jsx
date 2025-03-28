import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");

  const navigate = useNavigate(); // Initialize useNavigate

  const gettingCategories = async () => {
    try {
      const response = await axios.get(
        "https://api.shrirattantraders.com/api/v1/category"
      );
      setCategories(response.data.data);
      // console.log(response.data.categories);
    } catch (error) {
      setError("Error fetching data: " + error.message);
    }
  };

  useEffect(() => {
    gettingCategories();
  }, []);

  const handleEdit = (id) => {
    navigate(`/edit-categories/${id}`); // Navigate to edit page with category ID
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      try {
        const response = await axios.delete(
          `https://api.shrirattantraders.com/api/v1/category/${id}`
        );
        if (response.status === 200) {
          setCategories(categories.filter((category) => category._id !== id));
        }
      } catch (error) {
        console.error("Error deleting category:", error);
        setError("Error deleting category: " + error.message);
      }
    }
  };

  return (
    <div className="container mt-2">
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="fw-bold">Categories</h2>
        <Link to="/add-categories" className="btn btn-primary">
          + Add Categories
        </Link>
      </div>
      <div className="table-responsive">
        {categories.length > 0 ? (
          <table className="table table-bordered table-hover mt-4">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Categories</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((data, index) => (
                <tr key={data._id} className="align-middle">
                  <td>{index + 1}</td>
                  <td className="fw-semibold">{data.name}</td>
                  <td>
                    <button
                      className="btn btn-primary btn-sm me-2"
                      onClick={() => handleEdit(data._id)}
                    >
                      <i className="bi bi-pencil-square"></i> Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(data._id)}
                    >
                      <i className="bi bi-trash3"></i> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="text-center mt-4">
            <h5 className="text-muted">No data present</h5>
          </div>
        )}
        {error && <div className="alert alert-danger mt-3">{error}</div>}
      </div>
    </div>
  );
};

export default Categories;
