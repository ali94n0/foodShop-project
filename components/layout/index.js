import Link from "next/link";
import styles from "./layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link href={"/"}>DigiFood</Link>
        </div>
        <div className={styles.nav}>
          <Link href={"/menu"}>menu</Link>
          <Link href={"/categories"}>categories</Link>
        </div>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>DigiFood-Next Project 2023</footer>
    </>
  );
}

export default Layout;
