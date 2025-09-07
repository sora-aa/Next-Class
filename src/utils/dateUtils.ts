const dayNames = ["日", "月", "火", "水", "木", "金", "土"];

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
export const day = dayNames[now.getDay()];
export const hour = now.getHours();
export const minutes = String(now.getMinutes()).padStart(2, "0");
export const formatted = `${month}/${date}(${day}) ${hour}:${minutes}`;
