'use client';
import React, { useEffect, useState } from 'react';
import './contact.css';
import Breadcrumb from "../../component/BreadCrumb/page"

const page = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    number: "",
    state: "",
    message: ""
  });

  const getInputData = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const res = await axios.post("https://api.panchgavyamrit.com/api/send-enquery", data);
      if (res.status === 200) {
        Swal.fire({
          title: 'Success!',
          text: 'Your enquiry has been sent successfully.',
          icon: 'success',
          confirmButtonText: 'Ok'
        });
        setData({
          name: "",
          email: "",
          number: "",
          state: "",
          message: ""
        });
      }
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'There was an issue sending your enquiry.',
        icon: 'error',
        confirmButtonText: 'Try Again'
      });
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <Breadcrumb title="Contact Us" />
      <section className="contactUs">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mt-4">
              <h2 className="text-center fw-bold mb-4">
                Contact <span className="text-danger">Information</span>
              </h2>
              <div className="row">
                {/* Telephone */}
                <div className="col-12 mb-4">
                  <div className="contact-detail-card">
                    <h5><b><i className="bi bi-phone-vibrate"></i> Toll Free No.</b></h5>
                    <a href="tel:+919711851277" className='contact-link'>+91-9711851277</a>
                  </div>
                </div>

                {/* Address */}
                <div className="col-12 mb-4">
                  <div className="contact-detail-card">
                    <h5><b><i className="bi bi-geo-alt"></i> Address</b></h5>
                    <address className="contact-address">Head Office: L-73 Sec 3 Bawana Industrial Area, DL-39</address>
                  </div>
                </div>

                {/* Email */}
                <div className="col-12 mb-4">
                  <div className="contact-detail-card">
                    <h5><b>Email</b></h5>
                    <a href="mailto:vivekaggarwal1612@gmail.com" className="contact-link"><i className="bi bi-envelope"></i> vivekaggarwal1612@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="col-md-6">
              <div className="contactForm">
                <h2 className="text-center fw-bold mb-4">
                  Get In<span className="text-danger">Touch With Us</span>
                </h2>
                <p className="text-center">To Get In Touch With Us, please Fill The Required Info In the contact form below.</p>
                <form onSubmit={handleSubmit}>
                  <div className="contact-form-field">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" name="name" value={data.name} placeholder="Full Name" required onChange={getInputData} />
                  </div>
                  <div className="contact-form-field">
                    <label htmlFor="number">Your Number</label>
                    <input type="number" name="number" value={data.number} placeholder="Phone Number" required onChange={getInputData} />
                  </div>
                  <div className="contact-form-field">
                    <label htmlFor="email">E-Mail Address</label>
                    <input type="email" name="email" value={data.email} placeholder="Email" required onChange={getInputData} />
                  </div>
                  <div className="contact-form-field">
                    <label htmlFor="subject">State / City</label>
                    <input type="text" name="subject" value={data.state} placeholder="State / City" required onChange={getInputData} />
                  </div>
                  <div className="contact-form-field text-center">
                    <button type="submit">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="maps">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3496.901658833028!2d77.05334957430006!3d28.782192777270875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0782847d298d%3A0xbbd228d286cd3c64!2s73%2C%20L%20Block%20Rd%2C%20DSIIDC%20Industrial%20Area%2C%20Sector%203%2C%20Puth%20Khurd%2C%20Delhi%2C%20110039!5e0!3m2!1sen!2sin!4v1740649780530!5m2!1sen!2sin"
          style={{ border: "0", width: "100%", height: "450px" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
};

export default page;
