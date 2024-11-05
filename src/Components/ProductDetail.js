import { Divider, Grid, Rating } from "@mui/material";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import RatingDialog from "./RatingDialog";
import CartContext from "../Context/context";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const { id } = useParams();

  const { items, setItems } = useContext(CartContext);
  const [isItem, setIsItem] = useState(null);
  const isSmallScreen = useMediaQuery("(max-width:800px)");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          "https://dummyjson.com/products/" + id
        );
        const data = await response.data;
        const isItemPresentInCart = await items.find(
          (item) => item.id === data.id
        );
        await setIsItem(isItemPresentInCart);
        setProduct(data);
        document.title = data.title;
        setIsLoading(false);
      } catch (e) {
        console.log("ERROR:", e.message);
      }
    };
    fetchProduct();
  }, [id, items]);

  const handleAddToCart = (prod) => {
    if (!isItem) {
      setItems([...items, { ...prod, quantity: 1 }]);
    } else {
      const qnty = isItem.quantity;
      const updatedItems = items.map((itm) => {
        if (itm.id === prod.id) {
          return {
            ...itm,
            quantity: qnty + 1,
          };
        }
        return itm;
      });
      setItems(updatedItems);
    }
  };

  if (isLoading && product === null) {
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
    <>
      <Grid
        container
        gap={2}
        style={{
          display: "flex",
          justifyContent: "center",
          height: "100%",
          //   backgroundColor: 'rgba(0, 0, 0, 0.1)',
          backgroundColor: "rgba(255, 255, 255, 0.3)",
          backdropFilter: "blur(8px)",
          borderRadius: "8px",
        }}
      >
        <Grid
          item
          lg={5}
          md={5.8}
          sm={5.8}
          xs={12}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: !isSmallScreen ? "100%": "60%",
          }}
        >
          {/* <img
            src={product?.thumbnail}
            style={{
              height: "80%",
              width: "80%",
              objectFit: "contain",
            }}
            alt={`${product.title}`}
          /> */}

          <div style={{ width: "100%", height: "100%" }}>
            <Swiper
              style={{
                height: "100%",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alaignItems: "center",
              }}
              spaceBetween={10}
              slidesPerView={1}
              pagination={{ clickable: true }}
              modules={[Pagination]}
            >
              {product?.images.map((image, i) => {
                return (
                  <SwiperSlide>
                    <img
                      src={image}
                      alt={i}
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </Grid>
        <Grid
          item
          lg={6}
          md={5.8}
          sm={5.8}
          xs={12}
          style={{
            height: "99%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              overflowY: "scroll",
            }}
          >
            <div
              style={{
                height: "100%",
                padding: "10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              <p
                style={{
                  fontSize: "17px",
                  fontWeight: "bold",
                  margin: 0,
                  color: "#6A5ACD",
                }}
              >
                {product.title} || {product.sku}
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "5px",
                    width: "70%"
                  }}
                >
                  <p
                    style={{
                      textTransform: "capitalize",
                      fontSize: "14px",
                      margin: 0,
                      padding: 0,
                    }}
                  >
                    {product.category}, {product.warrantyInformation}
                  </p>
                  <p
                    style={{
                      textTransform: "capitalize",
                      fontSize: "14px",
                      margin: 0,
                      padding: 0,
                    }}
                  >
                    Brand - {product.brand ? product.brand : product.category}
                  </p>
                  <p
                    style={{
                      color: "green",
                      fontSize: "14.5px",
                      margin: 0,
                      padding: 0,
                    }}
                  >
                    Deal Price - ${product.price} <br />
                    <span style={{ color: "#cc0000" }}>Actual Price -</span>
                    <span
                      style={{
                        textDecoration: "line-through",
                        color: "#cc0000",
                      }}
                    >
                      ${parseFloat(Number(product.price) + 28.97).toFixed(2)}
                    </span>
                  </p>
                  <p
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      margin: 0,
                      padding: 0,
                    }}
                  >
                    <Rating
                      size="medium"
                      precision={0.1}
                      value={product.rating}
                      readOnly
                    />
                  </p>
                  <p
                    style={{
                      textTransform: "capitalize",
                      fontSize: "14px",
                      margin: 0,
                      padding: 0,
                    }}
                  >
                    {product.shippingInformation}
                  </p>
                  <p
                    style={{
                      fontSize: "14px",
                      margin: 0,
                      padding: 0,
                    }}
                  >
                    {product.returnPolicy}
                  </p>
                  <p
                    style={{
                      fontSize: "14px",
                      color: product.stock < 50 ? "#cc0000" : "green",
                      margin: 0,
                      padding: 0,
                    }}
                  >
                    {product.stock} units are left{" "}
                    {product.stock < 50 && ", hurry up!!"}
                  </p>
                </div>
                <div style={{ width: "30%" }}>
                  <img
                    style={{
                      objectFit: "contain",
                      height: "100%",
                      width: "100%",
                    }}
                    src={product?.meta?.qrCode}
                    alt={`qr-code-${product.title}`}
                  />
                </div>
              </div>

              <p
                style={{
                  textTransform: "capitalize",
                  fontSize: "14px",
                  margin: 0,
                  padding: 0,
                }}
              >
                {product.description}
              </p>
            </div>
            <div
              style={{
                padding: "10px",
                display: "flex",
                gap: "20px",
                margin: 0,
              }}
            >
              <button
                style={{
                  backgroundColor: "green",
                  border: "0",
                  borderRadius: "8px",
                  padding: "8px 15px",
                  color: "#ffffff",
                  cursor: "pointer",
                  fontWeight: "400",
                  fontSize: "13px",
                }}
              >
                BUY NOW
              </button>
              <button
                onClick={() => handleAddToCart(product)}
                style={{
                  backgroundColor: "#6A5ACD",
                  border: "0",
                  borderRadius: "8px",
                  padding: "08px 15px",
                  color: "#ffffff",
                  cursor: "pointer",
                  fontWeight: "400",
                  fontSize: "13px",
                }}
              >
                ADD TO CART
              </button>
            </div>
            <Divider style={{ marginTop: "20px" }} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "10px",
              }}
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <h3 style={{ fontWeight: "500", fontSize: "18px" }}>
                  RATING || REVIEWS
                </h3>
                <button
                  style={{
                    border: "0px",
                    padding: "8px",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontSize: "13px",
                    fontWeight: "400",
                  }}
                  onClick={() => setIsOpen(true)}
                >
                  Add Review
                </button>
                <RatingDialog isOpen={isOpen} setIsOpen={setIsOpen} />
              </div>
              {product?.reviews?.map((review, i) => {
                return (
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      gap: "5px",
                      marginTop: "10px",
                    }}
                  >
                    <div
                      style={{
                        display: "inline-flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "14px",
                          fontWeight: "400",
                          margin: 0,
                          padding: 0,
                        }}
                      >
                        {review?.reviewerName}
                      </p>
                      <p
                        style={{
                          fontSize: "14px",
                          alignSelf: "flex-start",
                          margin: 0,
                          padding: 0,
                        }}
                      >
                        Posted on: {new Date(review?.date).toLocaleDateString()}
                      </p>
                    </div>
                    <p
                      style={{
                        color: "grey",
                        fontSize: "14px",
                        fontWeight: "400",
                        margin: 0,
                        padding: 0,
                      }}
                    >
                      {review?.reviewerEmail}
                    </p>
                    <Rating
                      style={{ margin: 0, padding: 0 }}
                      precision={0.1}
                      value={review?.rating}
                      readOnly
                    />
                    <p
                      style={{
                        fontStyle: "italic",
                        fontWeight: "300",
                        fontSize: "14px",
                        margin: 0,
                        padding: 0,
                      }}
                    >
                      "{review?.comment}"
                    </p>
                    <Divider style={{ marginTop: "10px" }} />
                  </div>
                );
              })}
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default ProductDetail;
