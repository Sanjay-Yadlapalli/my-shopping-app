import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import CartContext from "../Context/context";
import { useMediaQuery } from "@mui/material";

const Navbar = () => {
  const { items } = useContext(CartContext);
  const isSmallScreen = useMediaQuery("(max-width:690px)");
  return (
    <nav
      style={{
        backgroundColor: "#6A5ACD",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        width: "100%",
        padding: "8px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "sticky",
        top: "0px",
        zIndex: "100",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          gap: "25px",
        }}
      >
        {!isSmallScreen && (
          <div
            style={{
              display: "flex",
              gap: "5px",
              alignItems: "center",
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              backdropFilter: "blur(5px)",
              borderRadius: "8px",
              padding: "0px 10px",
            }}
          >
            <p
              style={{
                fontWeight: "400",
                fontSize: "13px",
                color: "#000000",
                cursor: "pointer",
              }}
            >
              SEARCH -
            </p>
            <input
              style={{
                outline: "none",
                border: "0",
                padding: "5px",
                borderRadius: "8px",
                cursor: "pointer",
                boxShadow: "10px 15px 40px rgba(0, 0, 0, 0.2)",
                backgroundColor: "rgba(255, 255, 255, 0.3)",
                backdropFilter: "blur(5px)",
                // borderRadius: "8px",
              }}
            />
          </div>
        )}
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "#000000" : "#ffffff",
              textDecoration: "none",
              boxShadow: isActive && "10px 15px 40px rgba(0, 0, 0, 0.2)",
              borderRadius: "8px",
              padding: "0px 10px 0px 10px",
              fontWeight: isActive ? "500" : "400",
              // backgroundColor: isActive && "rgba(255, 255, 255, 0.3)",
              backgroundColor: isActive && "rgba(255, 255, 255, 0.7)",
              backdropFilter: "blur(5px)",
            })}
          >
            <p
              style={{
                fontSize: "13px",
                cursor: "pointer",
              }}
            >
              HOME
            </p>
          </NavLink>
          <NavLink
            to="/products"
            style={({ isActive }) => ({
              color: isActive ? "#000000" : "#ffffff",
              textDecoration: "none",
              boxShadow: isActive && "10px 15px 40px rgba(0, 0, 0, 0.2)",
              borderRadius: "8px",
              padding: "0px 10px 0px 10px",
              fontWeight: isActive ? "500" : "400",
              // backgroundColor: isActive && "rgba(255, 255, 255, 0.3)",
              backgroundColor: isActive && "rgba(255, 255, 255, 0.7)",
              backdropFilter: "blur(5px)",
            })}
          >
            <p
              style={{
                fontSize: "13px",
                cursor: "pointer",
              }}
            >
              PRODUCTS
            </p>
          </NavLink>
          <NavLink
            to="/about-us"
            style={({ isActive }) => ({
              color: isActive ? "#000000" : "#ffffff",
              textDecoration: "none",
              boxShadow: isActive && "10px 15px 40px rgba(0, 0, 0, 0.2)",
              borderRadius: "8px",
              padding: "0px 10px 0px 10px",
              fontWeight: isActive ? "500" : "400",
              // backgroundColor: isActive && "rgba(255, 255, 255, 0.3)",
              backgroundColor: isActive && "rgba(255, 255, 255, 0.7)",
              backdropFilter: "blur(5px)",
            })}
          >
            <p
              style={{
                fontSize: "13px",
                cursor: "pointer",
              }}
            >
              ABOUT US
            </p>
          </NavLink>
        </div>
        <NavLink
          to="/cart"
          style={({ isActive }) => ({
            color: isActive ? "#000000" : "#ffffff",
            textDecoration: "none",
            boxShadow: isActive && "10px 15px 40px rgba(0, 0, 0, 0.2)",
            borderRadius: "8px",
            padding: "0px 10px 0px 10px",
            position: "relative",
            fontWeight: isActive ? "500" : "400",
            // backgroundColor: isActive && "rgba(255, 255, 255, 0.3)",
            backgroundColor: isActive && "rgba(255, 255, 255, 0.7)",
            backdropFilter: "blur(5px)",
          })}
        >
          {/* <div> */}
          <p
            style={{
              fontSize: "15px",
              cursor: "pointer",
            }}
          >
            CART
          </p>
          <div
            style={{
              position: "absolute",
              top: "-8px",
              right: "-5px",
              borderRadius: "50%",
              backgroundColor: items?.length > 0 ? "green" : "red",
              height: "20px",
              width: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p
              style={{
                color: "#ffffff",
                fontSize: "12px",
                fontWeight: "500",
              }}
            >
              {items?.reduce((sum, itm) => sum + itm.quantity, 0)}
            </p>
          </div>
          {/* </div> */}
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
