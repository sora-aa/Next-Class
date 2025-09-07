import Image from "next/image";
import styles from "./page.module.css";
import classScheduleJson from "../data/ClassSchedule.json";
import { ClassSchedule } from "../types/ClassSchedule";
import classTimes from "@/constants/classTimes";

const classSchedule: ClassSchedule = classScheduleJson;

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <button className={styles.button}>
          <Image
            src="/arrow_circle_left_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg"
            alt="Button Image"
            width={50}
            height={50}
          />
        </button>
        <div className={styles.content}>
          <p>次の授業は</p>
          <h1>CS概論</h1>
          <h2>3110</h2>
          <h3>11:00 ～ 12:30</h3>
        </div>
        <button className={styles.button}>
          <Image
            src="/arrow_circle_right_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg"
            alt="Button Image"
            width={50}
            height={50}
          />
        </button>
      </div>
    </>
  );
}
