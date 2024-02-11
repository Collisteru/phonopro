import React from "react";

import Header from "@components/Header";
import Footer from "@components/Footer";

import Link from "next/link";

function CreditsPage() {
  return (
    <div
      style={{
        backgroundColor: "white",
        textAlign: "center",
        fontSize: "1.5rem",
        overflow: "auto",
        paddingBottom: "10vh",
      }}
    >
      <Header />
      <h1 style={{ fontSize: "5rem" }}>Credits</h1>
      <h1>Developed By:</h1>
      <br></br>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "space-evenly",
        }}
      >
        <div style={{ marginRight: "1em" }}>
          <h1>Sean Carter</h1>
          <Link
            href="https://www.linkedin.com/in/sean-carter-software-engineer/"
            style={{ color: "blue" }}
          >
            Sean's LinkedIn
          </Link>
          <br></br>
          <Link href="https://github.com/Collisteru" style={{ color: "blue" }}>
            Sean's GitHub
          </Link>
        </div>
        and
        <div style={{ marginLeft: "1em" }}>
          <h1>Jay Lee</h1>
          <Link
            href="https://www.linkedin.com/in/jayleeco/"
            style={{ color: "blue" }}
          >
            Jay's LinkedIn
          </Link>
          <br></br>
          <Link
            href="https://github.com/literaryverses"
            style={{ color: "blue" }}
          >
            Jay's GitHub
          </Link>
        </div>
      </div>
      <br></br>
      <h1>In 36 hours at Blasterhacks 2024</h1>
      <h1>Thanks to:</h1>
      <li>The CMU Pronouncing Dictionary</li>
      <li>The Wikimedia Project</li>
      <li>ChatGPT</li>
      <li>GitHub CoPilot</li>
      <Footer />
    </div>
  );
}

export default CreditsPage;
