"use client"; // Ensure client-side rendering
import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation"; // Correct import for App Router
// import "../../product.css";
import "../../products/product.css";
import Breadcrumb from "../../../component/BreadCrumb/page";
import axios from "axios";
import "../../../component/HomeProducts/ProductSlider.css";
const Page = () => {
  const { category } = useParams();
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  //   const getData = async () => {
  //     try {
  //       setLoading(true);
  //       if (typeof window !== "undefined") {
  //         const categoryId = localStorage.getItem("selectedCategoryId");

  //         if (!categoryId) {
  //           setError("No category selected.");
  //           setLoading(false);
  //           return;
  //         }

  //         const response = await axios.get(
  //           `https://api.shrirattantraders.com/api/v1/product/${categoryId}`
  //         );
  //         setProducts(response.data);
  //         setLoading(false);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching products:", error);
  //       setError("Failed to fetch products.");
  //       setLoading(false);
  //     }
  //   };

  //   useEffect(() => {
  //     if (typeof window !== "undefined") {
  //       const storedCategoryId = localStorage.getItem("selectedCategoryId");
  //       if (storedCategoryId) {
  //         setSelectedCategoryId(storedCategoryId);
  //       } else {
  //         setError("No category selected.");
  //         setLoading(false);
  //       }
  //     }
  //   }, []);

  const getProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.shrirattantraders.com/api/v1/product/${category}`
      );
      // console.log("response",response);

      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setError("Failed to fetch products.");
      setLoading(false);
    }
  };
  useEffect(() => {
    getProducts();
  }, [category]);

  //67c83128fd5bba05a3f0e1d4
  //67c830a2fd5bba05a3f0e1c9
  return (
    <>
      <Breadcrumb title="Products" />

      <div className="container my-3">
        <h2 className="text-center text-danger">Products</h2>
        <p className="text-center">
          Our premium Products help maintain engine health, reduce friction, and
          enhance performance.
        </p>

        <div className="row">
          {products.length > 0 ? (
            products.map((product, index) => (
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
                        ? product.description.split(" ").slice(0, 5).join(" ") +
                          "..."
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
    </>
  );
};

export default Page;
