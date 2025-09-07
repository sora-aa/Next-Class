import Link from "next/link";
import styles from "./Header.module.css";
import { formatted } from "@/utils/dateUtils";

const Header = () => {
  return (
    <div className={styles.header}>
      <p>{formatted}</p>
      <div className={styles.links}>
        <Link href="/">Home</Link>
        <Link href="/schedule">時間割</Link>
      </div>
    </div>
  );
};

export default Header;
