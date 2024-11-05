import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { Rating } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [hoverId, setHoverId] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        const data = response.data;
        setProducts(data.products);
        setIsLoading(false);
      } catch (e) {
        console.log("ERROR:", e.message);
      }
    };
    fetchProducts();
  }, []);

  if (isLoading && products.length === 0) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h4
          style={{
            fontWeight: "400",
            fontSize: "20px",
            color: "#6A5ACD",
            padding: "10px 30px",
            boxShadow: "10px 15px 40px rgba(0, 0, 0, 0.2)",
            borderRadius: "8px",
          }}
        >
          Loading...!
        </h4>
      </div>
    );
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid container display="flex" justifyContent="center" gap={3}>
        {products?.map((product) => {
          return (
            <Grid
              item
              lg={2.8}
              md={3.7}
              sm={5.5}
              xs={11}
              style={{
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                borderRadius: "8px",
                transition: "transform 0.1s ease",
                transform: hoverId === product.id ? "scale(1.05)" : "scale(1)",
                maxHeight: "370px",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                // backgroundColor: 'rgba(0, 0, 0, 0.1)',
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                backdropFilter: 'blur(18px)',
              }}
              onMouseEnter={() => setHoverId(product.id)}
              onMouseLeave={() => setHoverId(null)}
              onClick={() => navigate(`/products/${product.id}`)}
            >
              <div style={{ height: "40%", padding: "10px" }}>
                <img
                  src={product.thumbnail}
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "contain",
                  }}
                  alt={`${product.title}`}
                />
              </div>
              <div style={{ height: "60%", padding: "10px" }}>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "400",
                    margin: "0",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    color: "#6A5ACD",
                  }}
                >
                  {product.title}
                </p>
                <p style={{ textTransform: "capitalize", fontSize: "13px" }}>
                  {product.category}, {product.warrantyInformation}
                </p>
                <p style={{ textTransform: "capitalize", fontSize: "12.6px" }}>
                  Brand - {product.brand ? product.brand : product.category}
                </p>
                <p style={{ color: "green", fontSize: "13px" }}>
                  Deal Price - ${product.price} <br />
                  <span style={{ color: "#cc0000" }}>Actual Price -</span>
                  <span
                    style={{ textDecoration: "line-through", color: "#cc0000" }}
                  >
                    ${parseFloat(Number(product.price) + 28.97).toFixed(2)}
                  </span>
                </p>
                <p style={{ textTransform: "capitalize", fontSize: "12.6px" }}>
                  {product.shippingInformation}
                </p>
                <p
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Rating
                    size="small"
                    precision={0.1}
                    value={product.rating}
                    readOnly
                  />
                  <span style={{ fontSize: "12.5px", color: product.stock < 50 ? "#cc0000" : "green"}}>
                    {product.stock} units are left {product.stock < 50 && ", hurry up!!"}
                  </span>
                </p>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Products;
