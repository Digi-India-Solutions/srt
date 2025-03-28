import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditSubCategory = () => {
  const [subCategory, setSubCategory] = useState({
    name: "",
    image: null,
    description: "",
    color: "",
    temp: "",
    application: "",
    use: "",
    type: "",
    price: "",
  });
  const [imagePreview, setImagePreview] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { prdId } = useParams();
  const navigate = useNavigate();

  // Fetch existing subcategory data
  useEffect(() => {
    const fetchSubCategory = async () => {
      try {
        const response = await axios.get(
          `https://api.shrirattantraders.com/api/v1/product/sing/${prdId}`
        );
        const data = response.data;
        // console.log("asasasasa",data)
        setSubCategory({
          name: data.name || "",
          image: data.image || null,
          description: data.description || "",
          color: data.color || "",
          temp: data.temp || "",
          application: data.application || "",
          use: data.use || "",
          type: data.type || "",
          price: data.price || "",
        });
        if (data.image) {
          setImagePreview(data.image);
        }
      } catch (err) {
        console.error("Error fetching subcategory:", err);
        setError("Failed to load subcategory data.");
      }
    };
    fetchSubCategory();
  }, [prdId]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSubCategory((prev) => ({ ...prev, image: file }));
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (!subCategory.name || !subCategory.price) {
    //   setError("Name and Price are required fields.");
    //   return;
    // }

    setLoading(true);
    setError("");

    const formData = new FormData();
    formData.append("name", subCategory.name);
    formData.append("description", subCategory.description);
    formData.append("color", subCategory.color);
    formData.append("temp", subCategory.temp);
    formData.append("application", subCategory.application);
    formData.append("use", subCategory.use);
    formData.append("type", subCategory.type);
    formData.append("price", subCategory.price);

    if (subCategory.image instanceof File) {
      formData.append("image", subCategory.image);
    }

    try {
      const response = await axios.patch(
        `https://api.shrirattantraders.com/api/v1/product/${prdId}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (response.status === 200) {
        alert("Subcategory updated successfully!");
        navigate("/products");
      }
    } catch (err) {
      console.error(err);
      setError("Error updating subcategory");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Edit Subcategory</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Brand</label>
          <input
            type="text"
            className="form-control"
            value={subCategory.name}
            onChange={(e) =>
              setSubCategory((prev) => ({ ...prev, name: e.target.value }))
            }
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            value={subCategory.description}
            onChange={(e) =>
              setSubCategory((prev) => ({
                ...prev,
                description: e.target.value,
              }))
            }
          />
        </div>

        {/* <div className="mb-3">
          <label className="form-label">Color</label>
          <input
            type="text"
            className="form-control"
            value={subCategory.color}
            onChange={(e) =>
              setSubCategory((prev) => ({ ...prev, color: e.target.value }))
            }
          />
        </div> */}

        <div className="mb-3">
          <label className="form-label">Grade</label>
          <input
            type="text"
            className="form-control"
            value={subCategory.temp}
            onChange={(e) =>
              setSubCategory((prev) => ({ ...prev, temp: e.target.value }))
            }
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={subCategory.application}
            onChange={(e) =>
              setSubCategory((prev) => ({
                ...prev,
                application: e.target.value,
              }))
            }
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Size</label>
          <input
            type="text"
            className="form-control"
            value={subCategory.use}
            onChange={(e) =>
              setSubCategory((prev) => ({ ...prev, use: e.target.value }))
            }
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Type</label>
          <input
            type="text"
            className="form-control"
            value={subCategory.type}
            onChange={(e) =>
              setSubCategory((prev) => ({ ...prev, type: e.target.value }))
            }
          />
        </div>

        {/* <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            type="number"
            className="form-control"
            value={subCategory.price}
            onChange={(e) =>
              setSubCategory((prev) => ({ ...prev, price: e.target.value }))
            }
            required
          />
        </div> */}

        <div className="mb-3">
          <label className="form-label">Upload Image</label>
          <input
            type="file"
            className="form-control"
            onChange={handleImageChange}
            accept="image/*"
          />
        </div>

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

        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? "Updating..." : "Update Subcategory"}
        </button>
      </form>
    </div>
  );
};

export default EditSubCategory;
