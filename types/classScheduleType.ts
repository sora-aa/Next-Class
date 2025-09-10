interface ClassInfo {
  className: string;
  classroom: string;
}

export type Period = 1 | 2 | 3 | 4 | 5 | 6;
export type Day = "日" | "月" | "火" | "水" | "木" | "金" | "土";
// export type DayNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type ClassSchedule = {
  [key in Day]: {
    [period in Period]: ClassInfo | null;
  };
};
