import styles from "../styles/Header.module.css";

export default function Header({ title }) {
  return (
    <>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </head>
      <header className={styles.header}>
        <a href="/">
          <img
            src="/fonopro_logo_close_cropped.png"
            alt="Fonopro Logo"
            style={{ height: "80px" }}
          />
        </a>
      </header>
    </>
  );
}
