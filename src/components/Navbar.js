import Image from "next/image";
import styles from "./../styles/Navbar.module.css";
import logoSrc from "./../logo.jpg";
export default function Navbar() {
  return (
    <nav className={`${styles.navBar} font-serif`}>
      <Image src={logoSrc} width={64} height={64} />
      Teal Notes
    </nav>
  );
}
