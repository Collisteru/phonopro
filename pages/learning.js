// pages/quizzing.js

import Head from "next/head";

import Header from "../components/Header";
import Footer from "../components/Footer";

const LearningPage = () => {
  return (
    <div>
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
          <h1>Learning Mode</h1>
          <p>This is the Learning Mode page. Add your content here.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LearningPage;
