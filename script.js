const now = new Date();

let dayOfWeek = now.getDay();
const dayNames = ["日", "月", "火", "水", "木", "金", "土"];
const day = dayNames[dayOfWeek];
const month = now.getMonth() + 1;
const date = now.getDate();
const hour = now.getHours();
const minutes = now.getMinutes();

const scheduleData = [
    { 1: null, 2: null, 3: null, 4: null, 5: null, 6: null },
    {
        1: {
            className: "リスニング・スピーキング演習Ⅰ",
            classroom: "3110",
        },
        2: null,
        3: null,
        4: {
            className: "コンピュータ・サイエンス概論Ⅰ",
            classroom: "2317",
        },
        5: null,
        6: null,
    },
    { 1: null, 2: null, 3: null, 4: null, 5: null, 6: null },
    {
        1: null,
        2: {
            className: "情報連携概論Ⅰ",
            classroom: "INIADホール",
        },
        3: {
            className: "情報連携基礎実習Ⅰ",
            classroom: "3105",
        },
        4: null,
        5: null,
        6: {
            className: "ミクロ経済学",
            classroom: "オンデマンド",
        },
    },
    {
        1: {
            className: "リーディング・ライティング演習Ⅰ",
            classroom: "4205",
        },
        2: {
            className: "リスニング・スピーキング演習Ⅰ",
            classroom: "3110",
        },
        3: null,
        4: null,
        5: {
            className: "コンピュータ・サイエンス概論Ⅰ",
            classroom: "2317",
        },
        6: null,
    },
    {
        1: null,
        2: null,
        3: null,
        4: {
            className: "情報連携のための確率・統計学Ⅰ",
            classroom: "3114",
        },
        5: {
            className: "コンピュータ・サイエンス基礎演習Ⅰ",
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
const classNameElement = document.querySelector("#class-name");
const classTimeElement = document.querySelector("#class-time");
const classroomElement = document.querySelector("#classroom");

// prettier-ignore
datetime.textContent = `${month}/${date} (${day}) ${hour}:${String(minutes).padStart(2, "0")}`;

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
    dayOfWeek++;
}

// const getNextClass = () => {
//     while (scheduleData[dayOfWeek][classPeriod] === null) {
//         classPeriod++;
//         if (classPeriod === 7) {
//             classPeriod = 1;
//             dayOfWeek++;
//             if (dayOfWeek === 7) {
//                 dayOfWeek = 0;
//             }
//         }
//     }
//     console.log("success");
// };

const getNextClass = () => {
    for (let i = 0; i < 42; i++) {
        if (classPeriod > 6) {
            classPeriod = 1;
            dayOfWeek++;
        }
        if (dayOfWeek > 6) {
            dayOfWeek = 0;
        }
        if (scheduleData[dayOfWeek][classPeriod] !== null) {
            return;
        }
        classPeriod++;
    }
};

const getPreviousClass = () => {
    for (let i = 0; i < 42; i++) {
        if (classPeriod < 1) {
            classPeriod = 6;
            dayOfWeek--;
        }
        if (dayOfWeek < 0) {
            dayOfWeek = 6;
        }
        if (scheduleData[dayOfWeek][classPeriod] !== null) {
            return;
        }
        classPeriod--;
    }
};

const displayContent = () => {
    const nextClass = scheduleData[dayOfWeek][classPeriod];
    classNameElement.textContent = nextClass.className;
    classroomElement.textContent = nextClass.classroom;
    classTimeElement.textContent = classTimes[classPeriod - 1];
};

getNextClass();
displayContent();

const showNextClass = () => {
    classPeriod++;
    console.log(classPeriod);
    getNextClass();
    displayContent();
};

const showPreviousClass = () => {
    classPeriod--;
    getPreviousClass();
    displayContent();
};
