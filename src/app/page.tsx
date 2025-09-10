"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { classSchedule } from "../data/ClassSchedule";
import classTimes from "@/constants/classTimes";
import { dayNumber, elapsedMinutes, dayNames } from "@/utils/dateUtils";
import { useEffect, useState, useCallback } from "react";
import { Period } from "../../types/classScheduleType";

export default function Home() {
  const [classPeriod, setClassPeriod] = useState<Period>(1);
  // const [dayOfWeek, setDayOfWeek] = useState<Day>(dayNames[dayNumber]);
  const [selectedDayNumber, setSelectedDayNumber] = useState<number>(dayNumber);

  const findNextClassFromNow = useCallback(() => {
    if (elapsedMinutes < 630) {
      setClassPeriod(1);
    } else if (elapsedMinutes < 730) {
      setClassPeriod(2);
    } else if (elapsedMinutes < 870) {
      setClassPeriod(3);
    } else if (elapsedMinutes < 975) {
      setClassPeriod(4);
    } else if (elapsedMinutes < 1080) {
      setClassPeriod(5);
    } else if (elapsedMinutes < 1185) {
      setClassPeriod(6);
    } else {
      // 曜日の数で割ったあまりを代入することで曜日の数を超えても正しく動作する
      // setDayOfWeek(dayNames[(dayNumber + 1) % dayNames.length]);
      setSelectedDayNumber((dayNumber + 1) % dayNames.length);
      setClassPeriod(1);
    }
  }, []); // elapsedMinutes は定数なので依存配列は空

  const isClassExist = useCallback(() => {
    for (let i = 0; i < 42; i++) {
      if (classSchedule[dayNames[selectedDayNumber]][classPeriod] === null) {
        setSelectedDayNumber((prev) => {
          // return prev < 6 ? ((prev + 1) as Period) : 1;
          return (prev + 1) % dayNames.length;
        });
        setClassPeriod((prev) => {
          return prev < 6 ? ((prev + 1) as Period) : 1;
        });
      } else {
        break;
      }
    }
  }, [selectedDayNumber, classPeriod]); // 使用している状態を依存配列に追加

  // useEffect(() => {
  //   setDayOfWeek(dayNames[selectedDayNumber])
  // }, [selectedDayNumber])

  useEffect(() => {
    findNextClassFromNow();
    isClassExist();
  }, [findNextClassFromNow, isClassExist]);

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
          {/* <p>次の授業は</p>
          <h1>CS概論</h1>
          <h2>3110</h2>
          <h3>11:00 ～ 12:30</h3> */}
          <p>次の授業は</p>
          <h1>
            {classSchedule[dayNames[selectedDayNumber]][classPeriod]?.className}
          </h1>
          <h2>
            {classSchedule[dayNames[selectedDayNumber]][classPeriod]?.classroom}
          </h2>
          <h3>{classTimes[classPeriod]}</h3>
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
