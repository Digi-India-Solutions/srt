"use client";
import React from "react";
import Image from "next/image";
import banner1 from "../../images/banner-1.png";
import banner2 from "../../images/banner-2.png";
import banner3 from "../../images/banner-3.png";
import banner4 from "../../images/banner-4.png";
import "./hero.css";

const Page = () => {
  return (
    <>
      <section className="hero-section">
        {/* Banner Section */}
        <div className="banner">
          <div
            id="heroCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            {/* Carousel Indicators */}
            <div className="carousel-indicators">
              {[0, 1, 2, 3].map((index) => (
                <button
                  key={index}
                  type="button"
                  data-bs-target="#heroCarousel"
                  data-bs-slide-to={index}
                  className={index === 0 ? "active" : ""}
                  aria-current={index === 0}
                  aria-label={`Slide ${index + 1}`}
                ></button>
              ))}
            </div>

            {/* Carousel Items */}
            <div className="carousel-inner">
              {[banner1, banner2, banner3, banner4].map((banner, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                >
                  <Image
                    src={banner}
                    className="d-block w-100 banner-image"
                    alt={`Banner ${index + 1}`}
                    priority
                  />
                </div>
              ))}
            </div>

            {/* Carousel Controls */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        {/* Hero About Section */}
        <section className="hero-about text-center py-3">
          <div className="container">
            <div className="heading-back">
              <p>Engine Oil Distributors and Wholesalers</p>
            </div>
            <p className="hero-description">
              Looking for a reliable engine oil wholesaler? We specialize in
              supplying high-quality car and bike engine oils at the most
              competitive prices. Our extensive range includes premium
              lubricants, synthetic and semi-synthetic oils, and
              high-performance motor oils designed to enhance engine efficiency
              and longevity.
            </p>
          </div>
        </section>
      </section>
    </>
  );
};

export default Page;
