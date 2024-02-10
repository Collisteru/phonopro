// components/TitlePage.js

import Button from "../components/Button";

const TitlePage = () => {
  const handleClick = () => {
    // Add your logic here
    console.log("Button clicked");
  };

  return (
    <div>
      <div style={{ textAlign: "center", fontSize: "1.5rem" }}>
        <h1>Welcome to</h1>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src="/fonopro_logo_close_cropped.png"
            alt="Fonopro Logo"
            style={{ width: "1000px", height: "auto" }}
          />
        </div>
      </div>
      <div
        style={{ textAlign: "center", fontSize: "2rem", marginBottom: "5rem" }}
      >
        <p>
          An Educational Project for Blasterhacks 2024 By{" "}
          <strong>Jun Lee and Sean Carter</strong>
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Button onClick={handleClick}>Learning Mode</Button>
        <Button onClick={handleClick}>Quizzing Mode</Button>
      </div>
    </div>
  );
};

export default TitlePage;
