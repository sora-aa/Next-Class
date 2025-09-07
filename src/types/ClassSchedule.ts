interface ClassInfo {
  className: string;
  classroom: string;
}

type Period = "1" | "2" | "3" | "4" | "5" | "6";
type Day = "日" | "月" | "火" | "水" | "木" | "金" | "土";

export type ClassSchedule = {
  [key in Day]: {
    [period in Period]: ClassInfo | null;
  };
};
