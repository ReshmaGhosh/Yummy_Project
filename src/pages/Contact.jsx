import React from "react";
import Layout from "../components/Layout";
import "../styles/Contact.css";

//import { Box, Typography } from "@mui/material";

function Contact() {
  return (
    <Layout>
      <div className="contact-details">
        <div className="contact">Contact Us</div>
        <p className="para1">
          We have hearing from you! Please contact us via the email address or
          phone numbers below. <br />
          For answers to frequentyasked questions about your subscription,please
          checkout our FAQ page.
        </p>

        <p className="para2">
          <span class="bold-text">Email address:</span> help@yammy.com
        </p>
        <p className="para5">We will respond to your email within 72hours.</p>

        <p className="para3">
          <span class="bold-text1">Toll-free number:</span> 855-344-566 <br />
          <span class="bold-text1">International number:</span> 332-234-5678
        </p>
        <p className="para4">
          Hours of operation:Monday through Friday, 9am to 7pm
        </p>
      </div>
    </Layout>
  );
}

export default Contact;
