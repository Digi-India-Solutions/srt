"use client";
import React from "react";
import "./footer.css";
import Link from "next/link";

const Footer = () => {
  return (
    <>
    <footer className="container-fluid bg-danger text-white py-4">
        <div className="container">
          <div className="row">
            {/* Contact Details */}
            <div className="col-md-4 mb-3">
              <h5 className="text-uppercase fw-bold">Feel Free To <span className="text-white">Contact Us</span></h5>
              <p><i className="bi bi-geo-alt"></i> Head Office: L-73 Sec 3 Bawana Industrial Area, DL-39</p>
              <p><i className="bi bi-telephone"></i> Toll Free No. +919711851277</p>
              <p><i className="bi bi-phone"></i> +91-9711851240 , +91-9289336516</p>
              <p><i className="bi bi-envelope"></i> vivekaggarwal1612@gmail.com</p>
            </div>
            
            {/* Quick Links */}
            <div className="col-md-4 mb-3">
              <h5 className="text-uppercase fw-bold">Quick Links</h5>
              <ul className="list-unstyled">
                <li><Link href="/" className="text-white text-decoration-none">Home</Link></li>
                <li><Link href="/pages/about-us" className="text-white text-decoration-none">About Us</Link></li>
                <li><Link href="/pages/products" className="text-white text-decoration-none">Products</Link></li>
                <li><Link href="/pages/contact-us" className="text-white text-decoration-none">Contact Us</Link></li>
              </ul>
            </div>
            
            {/* Our Solutions */}
            <div className="col-md-4 mb-3">
              <h5 className="text-uppercase fw-bold">Our Solutions</h5>
              <ul className="list-unstyled">
                <li><a href="/pages/products" className="text-white text-decoration-none">Bike Engine Oils</a></li>
                <li><a href="/pages/products" className="text-white text-decoration-none">Diesel Engine Oils</a></li>
                <li><a href="/pages/products" className="text-white text-decoration-none">Petrol Engine Oil</a></li>
                <li><a href="/pages/products" className="text-white text-decoration-none">Grease</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
