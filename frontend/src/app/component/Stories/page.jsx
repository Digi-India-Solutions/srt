import React from 'react'
import image1 from "../../images/story1.png"
import image2 from "../../images/story2.png"
import image3 from "../../images/story3.png"
import image4 from "../../images/story4.png"
import Image from 'next/image'
import './SuccessStyle.css'
import bikeImage from "../../images/bike-bg.png"

import HomeProduct from "../../component/HomeProducts/page"
const page = () => {
    return (
        <>
            <HomeProduct />
            <div className="home-image">
            </div>
            <section className="about-us-section">
                <div className="about-us-container">
                    <h2 className="about-us-title">
                        ABOUT <span className="highlight">US</span>
                    </h2>
                    <p className="about-us-description">
                        On the back of an illustrious 150-year legacy, Shri Rattan Traders is a trusted name in the lubricants industry, known for its commitment to quality and performance. Among the oldest and most respected brands in the market, Shri Rattan Traders has become synonymous with high-performance motoring solutions.
                    </p>
                </div>
                <div className="about-us-content">
                    <div className="stats-box">
                        <h3><span>150</span>&nbsp; YEARS OF SERVICE</h3>
                        <h3><span>50+</span>&nbsp; COUNTRIES SERVED</h3>
                    </div>
                    <div className="bike-image">
                        <Image src={bikeImage} alt="Bike" />
                    </div>
                    <div className="about-us-info">
                        <p>
                            Motorsport is at the heart of Shri Rattan Traders' legacy, with the company making its mark in racing disciplines since the 1950s. Over the years, it has played a key role as a dedicated technical partner to some of the most successful teams in motorsport history.
                        </p>
                        <button className="read-more">Read More</button>
                    </div>
                </div>
            </section>

            <section className="success-stories">
                {/* <div className='success-stories-heading'>
                    <div className="text-center"><h2 className="section-title mb-0">We Don’t Just Build Oils, <span className="highlight mb-0">We Built Faith Also.</span></h2></div>
                    <div className="text-center"><h2 className="section-title mt-0">Our <span className="highlight mt-0">Success Stories</span></h2></div>
                </div> */}
                {/* <div className="success-icons">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-6">
                                <div className='social-icon-image'>
                                    <Image src={image1} alt="success-stories" />
                                    <div className='text-center'>
                                        <p>2000+</p>
                                        <p>Satisfied Customers</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-6">
                                <div className='social-icon-image'>
                                    <Image src={image2} alt="success-stories" />
                                    <div className='text-center'>
                                        <p>1400</p>
                                        <p>Successful Projects</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-6">
                                <div className='social-icon-image'>
                                    <Image src={image3} alt="success-stories" />
                                    <div className='text-center'>
                                        <p>16800</p>
                                        <p>Working Hours</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-6">
                                <div className='social-icon-image'>
                                    <Image src={image4} alt="success-stories" />
                                    <div className='text-center'>
                                        <p>15 Years+</p>
                                        <p>Working Experience</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

              

                <div className="stories-main">
                    <div className="container">
                        <div className="text-center"><h2 className="section-title">Who Are <span className="highlight">We</span></h2></div>
                        <p>At Shri Rattan Traders, we are a leading engine oil wholesaler dedicated to providing high-quality lubricants for automobiles, industrial machinery, and commercial vehicles. With years of experience in the industry, we have built a strong reputation for reliability, efficiency, and excellence in product distribution.</p>
                        <p>
                            Our mission is to deliver top-grade engine oils that enhance engine performance, improve fuel efficiency, and extend the lifespan of vehicles and equipment. We work closely with trusted manufacturers to ensure that our customers receive only the best formulations that meet international standards.
                        </p>
                        <p>
                            With a commitment to customer satisfaction, competitive pricing, and timely delivery, we strive to be your preferred partner for all your engine oil needs. Whether you are a retailer, distributor, or business owner, we provide tailored solutions to help you succeed in the market.
                        </p>
                        <p>
                            🔹 Trusted Quality | 🔹 Bulk Supply & Wholesale Pricing | 🔹 Reliable Service
                        </p>
                        <p className='m-0'>Partner with us and experience excellence in engine oil distribution!</p>
                    </div>
                </div>

            </section>
        </>
    )
}

export default page