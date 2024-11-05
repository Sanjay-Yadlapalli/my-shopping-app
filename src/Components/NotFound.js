import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        backdropFilter: "blur(8px)",
        borderRadius: "8px",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h2
          style={{
            fontWeight: "400",
            fontSize: "20px",
            // color: "purple",
            color: "#6A5ACD",
            padding: "10px 25px",
            boxShadow: "10px 15px 40px rgba(0, 0, 0, 0.2)",
            borderRadius: "8px",
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            backdropFilter: "blur(8px)",
          }}
        >
          Page Not found, Kindly check the URL!!
        </h2>
        <h4 style={{ fontWeight: "400", fontSize: "14px" }}>
          Go to Home page.? <Link to="/">Click here</Link>
        </h4>
      </div>
    </div>
  );
};

export default NotFound;
