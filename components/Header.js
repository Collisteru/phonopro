import styles from "../styles/Header.module.css";

export default function Header({ title }) {
  return (
    <header className={styles.header}>
      <img
        src="/fonopro_logo_close_cropped.png"
        alt="Fonopro Logo"
        style={{ height: "80px" }}
      />
    </header>
  );
}
