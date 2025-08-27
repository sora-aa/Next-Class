import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  const now = new Date();
  const dayNames = ["日", "月", "火", "水", "木", "金", "土"];
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const day = dayNames[now.getDay()];
  const hour = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const formatted = `${month}/${date}(${day}) ${hour}:${minutes}`;

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
