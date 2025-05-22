import styles from "./components.module.css";
import Image from "next/image";
import iWriteLogo from "@/../public/logo.svg";
import windowLogo from "@/../public/window.svg";
export default function Header() {
  return (
    <header className={styles.header}>
      <Image src={iWriteLogo} width={16} height={16} alt="" />
      <h1 className={styles.title}>iWrite</h1>
      <Image src={windowLogo} width={16} height={16} alt="" />
    </header>
  );
}
