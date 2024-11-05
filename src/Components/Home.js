import React from "react";

const Home = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        backdropFilter: "blur(10px)",
        borderRadius: "8px",
      }}
    >
      <h2
        style={{
          fontWeight: "400",
          fontSize: "20px",
          color: "#6A5ACD",
          padding: "10px",
          backgroundColor: "rgba(255, 255, 255, 0.3)",
          backdropFilter: "blur(18px)",
          boxShadow: "10px 15px 40px rgba(0, 0, 0, 0.2)",
          borderRadius: "8px",
        }}
      >
        Welcome to our brand new shopping Application!
      </h2>
    </div>
  );
};

export default Home;
