"use client";
import React from "react";
import Image from "next/image";
import "./about.css"; // Add a CSS file for custom styling
import aboutImage from "../../images/expert1.png"
import journey1 from "../../images/jurney1.png"
import journey2 from "../../images/jurney2.png"
import journey3 from "../../images/jurney3.png"
import journey4 from "../../images/jurney4.png"
import Breadcrumb from "../../component/BreadCrumb/page"
const page = () => {
  const features = [
    {
      title: "Superior Quality Products",
      description:
        "We supply high-performance engine oils that meet international standards, ensuring optimal protection and efficiency for all types of vehicles and machinery.",
    },
    {
      title: "Competitive Wholesale Pricing",
      description:
        "Our direct partnerships with top manufacturers allow us to offer competitive pricing without compromising on quality, ensuring the best value for your business.",
    },
    {
      title: "Wide Product Range",
      description:
        "From synthetic and semi-synthetic oils to heavy-duty lubricants, we provide a diverse selection to meet the needs of automotive, industrial, and commercial clients.",
    },
    {
      title: "Reliable Supply Chain & Fast Delivery",
      description:
        "We supply high-performance engine oils that meet international standards, ensuring optimal protection and efficiency for all types of vehicles and machinery.",
    },
    {
      title: "Exceptional Customer Support",
      description:
        "Our dedicated team is always available to assist with product recommendations, bulk orders, and after-sales support to ensure a seamless experience.",
    },
    {
      title: "Eco-Friendly Formulations",
      description:
        "We prioritize environmentally responsible solutions by offering low-emission, fuel-efficient engine oils that contribute to a greener future.",
    },
    {
      title: "Customized Solutions",
      description:
        "Whether you need private labeling, bulk orders, or specific formulations, we tailor our services to meet your business requirements.",
    },
  ];

  return (
    <>
      <div>
        <Breadcrumb title="About Us" />
        {/* <Stories /> */}
        <section className="about">
          <div className="container">
            <div className="about-content">
              <p>At Shri Rattan Traders, we take pride in being a trusted engine oil wholesaler, delivering premium-quality lubricants that enhance vehicle performance and engine longevity. Here’s why partnering with us is the right choice:</p>
            </div>
          </div>
        </section>

        <section className="py-3 bg-light">
          <div className="container">
            <h2 className="text-center fw-bold mb-4">
              Why <span className="text-danger">Choose Us?</span>
            </h2>

            <div className="row">
              {features.map((feature, index) => (
                <div className="col-md-4 mb-4" key={index}>
                  <div className="why-choose-card border-0 shadow-sm h-100">
                    <div className="why-choose-card-body text-center">
                      <div className="why-choose-heading">
                        <h5 className="text-white">{feature.title}</h5>
                      </div>
                      <div className="why-choose-desc">
                        <p className="mb-0">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        <section className="experts-section py-3">
          <div className="container">
            <h2 className="text-center fw-bold mb-4">
              Our <span className="text-danger">Experts</span>
            </h2>
            <div className="row">
              <div className="col-md-3 col-6">
                <div className="expert-card text-center">
                  <Image src={aboutImage} className="img-fluid rounded" alt="Expert" />
                  <h5 className="mt-3">John Leader</h5>
                  <p>Material Expert & Engineer</p>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="expert-card text-center">
                  <Image src={aboutImage} className="img-fluid rounded" alt="Expert" />
                  <h5 className="mt-3">John Leader</h5>
                  <p>Senior Industry Expert</p>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="expert-card text-center">
                  <Image src={aboutImage} className="img-fluid rounded" alt="Expert" />
                  <h5 className="mt-3">John Leader</h5>
                  <p>Customer Support Expert</p>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="expert-card text-center">
                  <Image src={aboutImage} className="img-fluid rounded" alt="Expert" />
                  <h5 className="mt-3">John Leader</h5>
                  <p>Customer Support Expert</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="journey-section py-3 bg-light">
          <div className="container">
            <h2 className="text-center fw-bold mb-4">
              Our <span className="text-danger">Journey</span>
            </h2>
            <div className="row text-center">
              <div className="col-md-3 col-6">
                <div className="journey-card">
                  <Image src={journey1} className="jurneyImage" alt="Journey" />
                  <h5 className="mt-2">1982</h5>
                  <p>Humble Beginnings</p>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="journey-card">
                  <Image src={journey2} className="jurneyImage" alt="Journey" />
                  <h5 className="mt-2">1985</h5>
                  <p>New Head Quarters</p>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="journey-card">
                  <Image src={journey3} className="jurneyImage" alt="Journey" />
                  <h5 className="mt-2">2010</h5>
                  <p>Opened New Locations</p>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="journey-card">
                  <Image src={journey4} className="jurneyImage" alt="Journey" />
                  <h5 className="mt-2">2017</h5>
                  <p>World Wide Coverage</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="aim-mission-section py-5">
          <div className="container">
            <h2 className="text-center fw-bold mb-4">
              Our <span className="text-danger">Aim & Mission</span>
            </h2>
            <p>To ensure long-term success and business expansion, our company should focus on clear and strategic aims. Here are four key aims & missions to drive growth in our business:</p>
            <ul className="list-unstyled mt-4">
              <li className="mb-2"><i className="bi bi-arrow-right-circle text-danger"></i> Expand Market Reach & Distribution Network</li>
              <li className="mb-2"><i className="bi bi-arrow-right-circle text-danger"></i> Maintain High-Quality Standards & Product Innovation</li>
              <li className="mb-2"><i className="bi bi-arrow-right-circle text-danger"></i> Strengthen Brand Identity & Customer Engagement</li>
              <li className="mb-2"><i className="bi bi-arrow-right-circle text-danger"></i> Achieve Sustainable & Profitable Growth</li>
            </ul>
          </div>
        </section>
      </div>
    </>
  )
}

export default page