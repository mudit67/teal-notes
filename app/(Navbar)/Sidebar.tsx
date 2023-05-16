import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Sidebar() {
  return (
    <div className={`${styles.sideBar}`}>
      <Link href={"/"}>Home</Link>
      <span>Search</span>
      <Link href={`/about`}>About Me</Link>
      <Link href={`/contact`}>Contact</Link>
      <span>Categories</span>
    </div>
  );
}
