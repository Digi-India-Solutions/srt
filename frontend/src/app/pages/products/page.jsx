"use client"; // Ensure client-side rendering

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Correct import for App Router
import "./product.css";
import Breadcrumb from "../../component/BreadCrumb/page";
import axios from "axios";

const Page = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  const getData = async () => {
    try {
      setLoading(true);
      if (typeof window !== "undefined") {
        const categoryId = localStorage.getItem("selectedCategoryId");

        if (!categoryId) {
          setError("No category selected.");
          setLoading(false);
          return;
        }

        const response = await axios.get(
          `https://api.shrirattantraders.com/api/v1/product/${categoryId}`
        );
        setProducts(response.data);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      setError("Failed to fetch products.");
      setLoading(false);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCategoryId = localStorage.getItem("selectedCategoryId");
      if (storedCategoryId) {
        setSelectedCategoryId(storedCategoryId);
      } else {
        setError("No category selected.");
        setLoading(false);
      }
    }
  }, []);

  useEffect(() => {
    // const storedCategoryId = localStorage.getItem("selectedCategoryId");
    // console.log("asasasasassasaa")
    if (selectedCategoryId) {
      getData();
    }
  }, [selectedCategoryId]);

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-danger">{error}</p>;
  }

  return (
    <>
      <Breadcrumb title="All Products" />

      <div className="container my-5">
        <h2 className="text-center text-danger">Products</h2>
        <p className="text-center">
          Our premium Products help maintain engine health, reduce friction, and
          enhance performance.
        </p>

        <div className="row">
          {products.length > 0 ? (
            products.map((product, index) => (
              <div
                key={product.id || index}
                className="col-lg-3 col-md-4 col-sm-6 col-6 mb-4"
              >
                <Link
                  href={`/pages/products/${product._id}`}
                  className="text-decoration-none"
                >
                  <div className="product-bg text-center shadow-sm rounded p-3">
                    <div className="product-img rounded-top">
                      <Image
                        src={product.image || "/fallback-image.png"}
                        alt={product.name}
                        width={150}
                        height={200}
                        className="img-fluid"
                      />
                    </div>
                    <div className="product-card-body">
                      <h5 className="product-title">{product.application}</h5>
                      <p className="product-category">{product.description}</p>
                      <button className="btn btn-danger btn-sm">
                        Know More
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <p className="text-center text-muted">No products found.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
