"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import productImage from "../../../images/product-image1.png";
import Breadcrumb from "../../../component/BreadCrumb/page";
import "../product.css";
import axios from "axios";

const Page = () => {
  const { productDetails } = useParams(); // Get dynamic route parameter
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch product details based on the dynamic route parameter
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // alert(productDetails);
        const response = await axios.get(
          `https://api.shrirattantraders.com/api/v1/product/sing/${productDetails}`
        );
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product details:", error);
        setError("Failed to fetch product details.");
        setLoading(false);
      }
    };

    if (productDetails) {
      fetchProduct();
    }
  }, [productDetails]);

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-danger">{error}</p>;
  }

  if (!product) {
    return <p className="text-center text-muted">Product not found.</p>;
  }

  // WhatsApp Enquiry Link
  const phoneNumber = "9711851277"; // Replace with your actual WhatsApp number
  const message = encodeURIComponent(
    `Hello! I'm interested in the product: ${product.name} of ${product.use}. Please provide more details.`
  );
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <>
      <Breadcrumb title="All Products" product="Product" />
      <div className="container py-3">
        <div className="product-detail-heading text-center">
          <h4 className="fw-bold text-danger">{product.application}</h4>
        </div>

        <div className="row align-items-center">
          {/* Product Image */}
          <div className="col-md-4 text-center">
            <Image
              src={product.image || productImage} // Use fallback image if product.image is not available
              alt={product.name}
              width={200}
              height={300}
              className="img-fluid"
            />
          </div>

          {/* Product Details */}
          <div className="col-md-8">
            <table className="table table-borderless">
              <tbody>
                <tr>
                  <td className="fw-bold">Brand</td>
                  <td>{product.name}</td>
                </tr>
                <tr>
                  <td className="fw-bold">Grade</td>
                  <td>{product.temp}</td>
                </tr>
                <tr>
                  <td className="fw-bold">Type</td>
                  <td>{product.type}</td>
                </tr>
                <tr>
                  <td className="fw-bold">Size</td>
                  <td>{product.use}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Enquiry Button Positioned Below Product Name */}
        <div className="text-center">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <button className="btn btn-success px-2 py-1 fw-bold">
              Enquiry on WhatsApp
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Page;
