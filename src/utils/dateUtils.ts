import { Day } from "../../types/classScheduleType";

export const dayNames: Day[] = ["日", "月", "火", "水", "木", "金", "土"];

// export const formatCurrentDate = (): string => {
//   const now = new Date();
//   const month = now.getMonth() + 1;
//   const date = now.getDate();
//   const day = dayNames[now.getDay()];
//   const hour = now.getHours();
//   const minutes = String(now.getMinutes()).padStart(2, "0");
//   return `${month}/${date}(${day}) ${hour}:${minutes}`;
// };

const now = new Date();
const month = now.getMonth() + 1;
const date = now.getDate();
export const dayNumber = now.getDay();
export const day = dayNames[dayNumber];
export const hour = now.getHours();
export const minutes = now.getMinutes();
export const elapsedMinutes = hour * 60 + minutes;
export const formatted = `${month}/${date}(${day}) ${hour}:${String(
  minutes
).padStart(2, "0")}`;
