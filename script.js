const now = new Date();

let dayOfWeek = now.getDay();
const dayNames = ["日", "月", "火", "水", "木", "金", "土"];
let day = dayNames[dayOfWeek];
const month = now.getMonth() + 1;
const date = now.getDate();
const hour = now.getHours();
const minutes = now.getMinutes();

const scheduleData = [
    { 1: null, 2: null, 3: null, 4: null, 5: null, 6: null },
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
    },
    { 1: null, 2: null, 3: null, 4: null, 5: null, 6: null },
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
    },
    { 1: null, 2: null, 3: null, 4: null, 5: null, 6: null },
];
const classTimes = [
    "9:00 ~ 10:30",
    "10:40 ~ 12:10",
    "13:00 ~ 14:30",
    "14:45 ~ 16:15",
    "16:30 ~ 18:00",
    "18:15 ~ 19:45",
];

const datetime = document.querySelector("#datetime");
const className = document.querySelector("#class-name");
const classTime = document.querySelector("#class-time");
const classroom = document.querySelector("#classroom");

datetime.textContent = `${month}/${date} (${day}) ${hour}:${minutes}`;

const elapsedMinutes = hour * 60 + minutes;
let classPeriod;
if (elapsedMinutes < 630) {
    classPeriod = 1;
} else if (elapsedMinutes < 730) {
    classPeriod = 2;
} else if (elapsedMinutes < 870) {
    classPeriod = 3;
} else if (elapsedMinutes < 975) {
    classPeriod = 4;
} else if (elapsedMinutes < 1080) {
    classPeriod = 5;
} else if (elapsedMinutes < 1185) {
    classPeriod = 6;
} else {
    classPeriod = 1;
}

while (scheduleData[dayOfWeek][classPeriod] === null) {
    classPeriod++;
    if (classPeriod === 7) {
        classPeriod = 1;
        dayOfWeek++;
        if (dayOfWeek === 7) {
            dayOfWeek = 0;
        }
    }
}

className.textContent = scheduleData[dayOfWeek][classPeriod].classname;
classroom.textContent = scheduleData[dayOfWeek][classPeriod].classroom;
classTime.textContent = classTimes[classPeriod - 1];
