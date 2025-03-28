"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProductSlider.css"; // Import the updated CSS file
import Link from "next/link";
import Image from "next/image";

const Page = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(
          "https://api.shrirattantraders.com/api/v1/product"
        );

        const products = response.data?.products ?? response.data;
        if (Array.isArray(products)) {
          setItems(products);
        } else {
          console.error("Unexpected API response structure:", response.data);
          setItems([]);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setItems([]);
      }
    };

    fetchItems();
  }, []);

  return (
    <>
      <div className="showcase-wrapper">
        <div className="container">
          <div className="text-center my-3">
            <h2 className="about-us-title">
              Our <span className="highlight">Products</span>
            </h2>
          </div>
          <div className="row">
            {items.length > 0 ? (
              items.map((product, index) => (
                <div
                  key={product._id || index}
                  className="col-md-3 col-sm-6 col-6 h-100 mb-4"
                >
                  <div className="products-card card shadow-lg border-0 position-relative">
                    {/* Fancy SRT Tag */}
                    <div className="srt-tag">SRT</div>

                    <div className="text-center">
                      <img
                        src={product.image || "/fallback-image.png"}
                        className="products-image"
                        alt={product.name || "Product Image"}
                      />
                    </div>
                    <div className="product-card-body text-center">
                      <h5 className="products-name">
                        {product.application || "No Name"}
                      </h5>
                      <p className="products-description">
                        {product.description
                          ? product.description
                              .split(" ")
                              .slice(0, 5)
                              .join(" ") + "..."
                          : "No description available"}
                      </p>
                      <Link
                        href={`/pages/products/${product._id}`}
                        className="products-button btn btn-danger fw-bold px-4 py-2"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-muted">No products found.</p>
            )}
          </div>
        </div>
      </div>
      <div className="together-content"></div>
    </>
  );
};

export default Page;
