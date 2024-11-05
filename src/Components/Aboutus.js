import React from "react";

const Aboutus = () => {
  return (
    <div
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        backdropFilter: "blur(5px)",
        borderRadius: "8px",
        padding: "10px"
      }}
    >
      <h2 style={{ fontWeight: "400", color: "#6A5ACD" }}>About Us</h2>
      {/* <h3 style={{ fontWeight: "400" }}>Welcome to our Store!</h3> */}
      <p style={{ fontWeight: "400", fontSize: "14px" }}>
        At our online shop, we believe that shopping should be a delightful
        experience. Our mission is to provide high-quality products at
        competitive prices while delivering outstanding customer service.
      </p>
      <p style={{ fontWeight: "400", fontSize: "14px" }}>
        Our journey began with a passion for [describe the type of products,
        e.g., fashion, home goods, electronics]. We carefully curate our
        selection, sourcing items from trusted suppliers to ensure you receive
        only the best.
      </p>
      <h3 style={{ fontWeight: "400", color: "#6A5ACD" }}>Our Values:</h3>
      <ul>
        <li style={{ fontSize: "14px" }}>
          <h4 style={{ fontWeight: "400" }}>Quality:</h4>We are committed to
          offering products that meet our high standards of excellence.
        </li>
        <li style={{ fontSize: "14px" }}>
          <h4 style={{ fontWeight: "400" }}>Customer Focus:</h4>Your
          satisfaction is our top priority. Our dedicated team is here to assist
          you with any questions or concerns.
        </li>
        <li style={{ fontSize: "14px" }}>
          <h4 style={{ fontWeight: "400" }}>Sustainability:</h4>
          We strive to reduce our environmental impact by choosing sustainable
          products and eco-friendly packaging.
        </li>
      </ul>
      <p style={{ fontWeight: "400", fontSize: "14px" }}>
        Whether you're looking for the perfect gift or treating yourself, we're
        here to help you find exactly what you need. Thank you for choosing
        us—we're excited to be part of your shopping experience!
      </p>
      <h3
        style={{
          color: "#6A5ACD",
          fontWeight: "bold",
          fontSize: "20px",
          textAlign: "center",
          padding: "10px",
          boxShadow: "10px 15px 40px rgba(0, 0, 0, 0.2)",
          borderRadius: "8px",
        }}
      >
        ----- Happy Shopping! -----
      </h3>
    </div>
  );
};

export default Aboutus;
