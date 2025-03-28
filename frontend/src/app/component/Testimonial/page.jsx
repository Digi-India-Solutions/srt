"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./testimonials.css";
import Image from "next/image";
import moni from "../../images/moni.png";
import gourav from "../../images/gourav.png";
import adil from "../../images/adil.png";
import dev from "../../images/dev.png";
const testimonials = [
  {
    name: "Mukesh Kumar",
    location: "Delhi, India",
    feedback:
      "Shri Rattan Traders provides high-quality engine oil with secure packaging and timely delivery. Their products enhance engine performance, and their customer service is excellent. A trustworthy supplier for all engine oil needs!",
    image: moni,
    rating: 5,
  },
  {
    name: "Gourav Panchal",
    location: "Mumbai, India",
    feedback:
      "We always rely on Shri Rattan Traders for premium engine oil. Their products improve engine efficiency, and deliveries are always prompt. Exceptional customer support makes them a highly recommended supplier!",
    image: gourav,
    rating: 5,
  },
  {
    name: "Aadil Khan",
    location: "Bangalore, India",
    feedback:
      "Shri Rattan Traders consistently delivers top-grade engine oil. Their products meet industry standards, ensuring smooth performance. Reliable service, competitive pricing, and quick delivery make them a preferred choice for bulk orders!",
    image: adil,
    rating: 5,
  },
  {
    name: "Dev Sisodiya",
    location: "Bangalore, India",
    feedback:
      "We trust Shri Rattan Traders for quality engine oil. Their oils enhance engine durability, and deliveries are always on time. Professional service and reliability make them an excellent long-term partner!",
    image: dev,
    rating: 5,
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="testimonial-container">
      <div className="text-center">
        <h2 className="section-title mb-3">
          What Our Clients{" "}
          <span className="highlight mb-0 text-white">Say</span>
        </h2>
      </div>
      <div className="container">
        <div className="testimonial-slider">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-profile">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="testimonial-img"
                  />
                  <div className="testimonial-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.location}</p>
                  </div>
                  <div className="testimonial-rating">
                    {Array.from({ length: testimonial.rating }, (_, index) => (
                      <i
                        key={index}
                        style={{ color: "gold" }}
                        className="bi bi-star-fill"
                      ></i>
                    ))}
                  </div>
                  <div className="testimonial-description">
                    <blockquote>
                      {testimonial.feedback.split(" ").length > 20
                        ? testimonial.feedback
                            .split(" ")
                            .slice(0, 10)
                            .join(" ") + "..."
                        : testimonial.feedback}
                    </blockquote>
                  </div>
                </div>
                {/* <p className="testimonial-feedback">"{testimonial.feedback}"</p> */}
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
