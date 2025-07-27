const now = new Date();
console.log(now);

const dayOfWeek = now.getDay();
const dayNames = ["日", "月", "火", "水", "木", "金", "土"];
const day = dayNames[dayOfWeek];
const month = now.getMonth() + 1;
const date = now.getDate();
const hour = now.getHours();
const minutes = now.getMinutes();

const scheduleData = [
    { 1: null, 2: null, 3: null, 4: null, 5: null, 6: null, 7: null },
    {
        1: {
            classname: "リスニング・スピーキング演習Ⅰ",
            classroom: "3110",
        },
        2: null,
        3: null,
        4: {
            classname: "コンピュータ・サイエンス概論Ⅰ",
            classroom: "2317",
        },
        5: null,
        6: null,
        7: null,
    },
    { 1: null, 2: null, 3: null, 4: null, 5: null, 6: null, 7: null },
    {
        1: null,
        2: {
            classname: "情報連携概論Ⅰ",
            classroom: "INIADホール",
        },
        3: {
            classname: "情報連携基礎実習Ⅰ",
            classroom: "3105",
        },
        4: null,
        5: null,
        6: {
            classname: "ミクロ経済学",
            classroom: "オンデマンド",
        },
        7: null,
    },
    {
        1: {
            classname: "リーディング・ライティング演習Ⅰ",
            classroom: "4205",
        },
        2: {
            classname: "リスニング・スピーキング演習Ⅰ",
            classroom: "3110",
        },
        3: null,
        4: null,
        5: {
            classname: "コンピュータ・サイエンス概論Ⅰ",
            classroom: "2317",
        },
        6: null,
        7: null,
    },
    {
        1: null,
        2: null,
        3: null,
        4: {
            classname: "情報連携のための確率・統計学Ⅰ",
            classroom: "3114",
        },
        5: {
            classname: "コンピュータ・サイエンス基礎演習Ⅰ",
            classroom: "3106",
        },
        6: null,
        7: null,
    },
    { 1: null, 2: null, 3: null, 4: null, 5: null, 6: null, 7: null },
];

console.log(scheduleData[1][1].classname);

const datetime = document.querySelector("#datetime");
const className = document.querySelector("#class-name");
const classTime = document.querySelector("#class-time");
const classroom = document.querySelector("#classroom");

datetime.textContent = `${month}/${date} (${day}) ${hour}:${minutes}`;
