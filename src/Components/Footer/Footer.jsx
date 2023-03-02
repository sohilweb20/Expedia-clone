// import { Box, Container, Grid } from "@chakra-ui/react";
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      {/* Footer Here */}
      <div className="footer">
        <li className="Box">
          <p>Company</p>
          <ul>About</ul>
          <ul>Jobs</ul>
          <ul>List your property </ul>
          <ul>Partnerships</ul>
          <ul>Newsroom</ul>
          <ul>Investor Relations</ul>
          <ul>Site Map</ul>
          <ul>Expedia Rewards</ul>
          <ul>Advertising</ul>
        </li>

        <li className="Box">
          <p>Explore</p>
          <ul>Vacation Rentals in United States</ul>
          <ul>Car Rentals in United States</ul>
          <ul>TDomestic Fights</ul>
          <ul>Privacy Policy</ul>
          <ul>Vacations Package in United States</ul>
          <ul>Expedia Reviews</ul>
          <ul>Orbitz Coupons</ul>
          <ul>LGBTQ Travels</ul>
          <ul>Unique Accommodations</ul>
          <ul>Travel Blog </ul>
        </li>
        <li className="Box">
          <p>Policy</p>

          <ul>Privacy Policy</ul>
          <ul>Terms Of Use</ul>
          <ul>Vrbo terms and conditions</ul>
          <ul>Orbitz Rewards Terms</ul>
          <ul>Do not sell my personal information</ul>
        </li>
      </div>
      <div className="copyright">
        <p>
          © 2022 Expedia, LLC, an Expedia Group Company. All rights reserved.
        </p>
        <p>
          Expedia, Expedia.com, and the Expedia logo are trademarks or
          registered trademarks of Expedia, LLC. CST# 2083930-50.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
