"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import axios from "axios";
import "./product.css";

const Page = () => {
  const [products, setProducts] = useState([]);
  const router = useRouter();

  const handleCategoryClick = (categoryId) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("selectedCategoryId", categoryId); // Store in local storage
      router.push(`/pages/category/${categoryId}`); // Navigate to products page
    }
  };

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://api.shrirattantraders.com/api/v1/category"
      );
      setProducts(response.data.data || []); // Ensure safe fallback
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <div className="text-center">
        <h2 className="section-title">
          Application <span className="highlight">Categories</span>
        </h2>
      </div>
      <div className="row">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product._id} className="col-md-3 col-6 mb-4">
              <div
                className="product-card"
                onClick={() => handleCategoryClick(product._id)}
              >
                <Image
                  src={product.image || "/placeholder.png"} // Provide a default fallback
                  alt={product.name}
                  className="product-image"
                  width={220}
                  height={200}
                  layout="responsive"
                />
                <div className="overlay">
                  <h5>{product.name}</h5>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No categories found.</p>
        )}
      </div>
    </div>
  );
};

export default Page;
