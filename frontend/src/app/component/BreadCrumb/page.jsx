"use client";
import React from "react";
import "./breadcrumb.css";
import Link from "next/link";

const Page = ({ title, product }) => {
  return (
    <div className="costum-bread-crumb">
      <div className="costum-bread-overlay">
        <div className="container">
          <div className="costum-bread-content">
            <h2 className="breadcrumb-title">{title}</h2>
            <p className="m-0">
              <Link href="/">Home</Link> <span> | </span>
              <Link href="/pages/products">{product}</Link> <span> | </span>
              {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
