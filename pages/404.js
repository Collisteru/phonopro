// pages/_error.js or pages/404.js

import Head from "next/head";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Link from "next/link";

const Custom404 = () => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "25vh",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div>
            <h1>404 - Page Not Found</h1>
            <p>Oops! The page you're looking for does not exist.</p>
            {/* Add any additional content or components here */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

// pages/quizzing.js

export default Custom404;
