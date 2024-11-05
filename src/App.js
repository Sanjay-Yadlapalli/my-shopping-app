import React, { Suspense } from "react";
import "./App.css";
// import Aboutus from "./Components/Aboutus";
// import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./Components/NotFound";
import { ContextProvider } from "./Context/context";
const Home = React.lazy(() => import("./Components/Home"));
const Aboutus = React.lazy(() => import("./Components/Aboutus"));
const Products = React.lazy(() => import("./Components/Products"));
const ProductDetail = React.lazy(() => import("./Components/ProductDetail"));
const Cart = React.lazy(() => import("./Components/Cart"));

function App() {
  return (
    <Router>
      <ContextProvider>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Navbar />
        <div
          style={{
            height: "85vh",
            overflowY: "auto",
            padding: "20px 5px 18px 10px",
            // backgroundImage:
            //   "url(https://cdn.pixabay.com/photo/2022/07/23/16/05/shopping-mall-7340181_1280.jpg)",
            // backgroundImage: "url(https://cdn.pixabay.com/photo/2017/12/26/09/15/woman-3040029_1280.jpg)",
            // backgroundSize: "cover",
            // backgroundPosition: "center",
            // backgroundRepeat: "no-repeat",
          }}
        >
          <Suspense
            fallback={
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Loading...!
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<Aboutus />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </div>
      </div>
      </ContextProvider>
    </Router>
  );
}

export default App;
