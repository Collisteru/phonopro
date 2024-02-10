// components/TitlePage.js

const TitlePage = () => {
  return (
    <div>
      <div style={{ textAlign: "center", fontSize: "1.5rem" }}>
        <h1>Welcome to</h1>
        <img
          src="/fonopro_logo_close_cropped.png"
          alt="Fonopro Logo"
          style={{ width: "1000px", height: "auto" }}
        />
      </div>
      <div style={{ textAlign: "center", fontSize: "2rem" }}>
        <p>
          An Educational Project for Blasterhacks 2024 By{" "}
          <strong>Jun Lee and Sean Carter</strong>
        </p>
      </div>
    </div>
  );
};

export default TitlePage;
