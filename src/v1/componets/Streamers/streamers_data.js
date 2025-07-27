import React from "react";
import {ReactComponent as TG} from "../../assets/svg/tg.svg";
import {ReactComponent as TW} from "../../assets/svg/tw.svg";
import {ReactComponent as YT} from "../../assets/svg/yt.svg";

// const streamers = {
//     "Dyrachyo": {
//         name: "Dyrachyo",
//         realName: "Антон Шкредов",
//         about: (
//             <>
//                 Один из лучших керри в Dota 2, стабилен и эффективен<br/>
//                 в самых напряжённых матчах. Настоящий командный боец<br/>
//                 с холодной головой
//             </>
//         ),
//         socials: [
//             {
//                 icon: <TG className="soc-icon"/>,
//                 count: "> 247k",
//                 url: "https://t.me/dyrachyo"
//             },
//             {
//                 icon: <TW className="soc-icon"/>,
//                 count: "> 389k",
//                 url: "https://www.twitch.tv/dyrachyo"
//             },
//             {
//                 icon: <YT className="soc-icon"/>,
//                 count: "> 88k",
//                 url: "https://www.youtube.com/@dyrachyo_youtube"
//             },
//         ],
//     },
//     "TpaBoMaH": {
//         name: "TpaBoMaH",
//         realName: "Тимур Хафизов",
//         about: (
//             <>
//                 Харизматичный стример с острым чувством юмора<br/>
//                 и живой реакцией, который заряжает аудиторию<br/>
//                 своим настроем
//             </>
//         ),
//         socials: [
//             {
//                 icon: <TG className="soc-icon"/>,
//                 count: "> 337k",
//                 url: "https://t.me/travobet"
//             },
//             {
//                 icon: <TW className="soc-icon"/>,
//                 count: "> 625k",
//                 url: "https://www.twitch.tv/tpabomah"
//             },
//             {
//                 icon: <YT className="soc-icon"/>,
//                 count: "> 478k",
//                 url: "https://www.youtube.com/@tpabomah_"
//             },
//         ],
//     },
//     "ybicanoooobov": {
//         name: "ybicanoooobov",
//         realName: "Федор Юрченко",
//         about: (
//             <>
//                 Ветеран комментаторской сцены Dota 2, всегда с глубоким<br/>
//                 аналитическим подходом и узнаваемым стилем подачи
//             </>
//         ),
//         socials: [
//             {
//                 icon: <TG className="soc-icon"/>,
//                 count: "> 43k",
//                 url: "https://t.me/YBNFedor"
//             },
//             {
//                 icon: <TW className="soc-icon"/>,
//                 count: "> 678k",
//                 url: "https://www.twitch.tv/ybicanoooobov"
//             },
//             {
//                 icon: <YT className="soc-icon"/>,
//                 count: "> 10k",
//                 url: "https://www.youtube.com/@DnevnikYbicanoooobov"
//             },
//         ],
//     },
//     "iltw1": {
//         name: "iltw1",
//         realName: "Игорь Филатов",
//         about: (
//             <>
//                 Механически сильный игрок, способный затащить<br/>
//                 даже безнадёжную игру. Его мувы часто становятся хайлайтами
//             </>
//         ),
//         socials: [
//             {
//                 icon: <TG className="soc-icon"/>,
//                 count: "> 8k",
//                 url: "https://t.me/iltw123"
//             },
//             {
//                 icon: <TW className="soc-icon"/>,
//                 count: "> 251k",
//                 url: "https://www.twitch.tv/iltw1"
//             },
//             {
//                 icon: <YT className="soc-icon"/>,
//                 count: "334",
//                 url: "https://www.youtube.com/@iLTW-TV"
//             },
//         ],
//     },
//     "Aunkere": {
//         name: "Aunkere",
//         realName: "Евгений Карьят",
//         about: (
//             <>
//                 Один из самых талантливых стрелков в CS-сцене,<br/>
//                 с мощным аимом и уверенным стилем игры
//             </>
//         ),
//         socials: [
//             {
//                 icon: <TG className="soc-icon"/>,
//                 count: "> 114k",
//                 url: "https://t.me/aunkeretg"
//             },
//             {
//                 icon: <TW className="soc-icon"/>,
//                 count: "> 632k",
//                 url: "https://www.twitch.tv/aunkere"
//             },
//             {
//                 icon: <YT className="soc-icon"/>,
//                 count: "> 50k",
//                 url: "https://www.youtube.com/@Aunkere"
//             },
//         ],
//     },
//     "Stray228": {
//         name: "Stray228",
//         realName: "Олег Бочаров",
//         about: (
//             <>
//                 Беспощадный и харизматичный, Stray выделяется искренностью<br/>
//                 и умением удерживать внимание зрителя
//             </>
//         ),
//         socials: [
//             {
//                 icon: <TG className="soc-icon"/>,
//                 count: "> 174k",
//                 url: "https://t.me/StrayDungeon228"
//             },
//             {
//                 icon: <TW className="soc-icon"/>,
//                 count: "> 1.7kk",
//                 url: "https://www.twitch.tv/stray228"
//             },
//             {
//                 icon: <YT className="soc-icon"/>,
//                 count: "> 50k",
//                 url: "https://www.youtube.com/c/StrayBest"
//             },
//         ],
//     },
// };

const streamers = {
    "Dyrachyo": {
        name: "Dyrachyo",
        realName: "Антон Шкредов",
        about: (
            <>
                Один из лучших керри в Dota 2, стабилен и эффективен в самых напряжённых матчах. Настоящий командный боец с холодной головой<br/>
            </>
        ),
        socials: [
            {icon: <TG className="soc-icon"/>, count: "> 247 k", url: "https://t.me/dyrachyo"},
            {icon: <TW className="soc-icon"/>, count: "> 389 k", url: "https://www.twitch.tv/dyrachyo"},
            {icon: <YT className="soc-icon"/>, count: "> 88 k", url: "https://www.youtube.com/@dyrachyo_youtube"},
        ],
    },
    "TpaBoMaH": {
        name: "TpaBoMaH",
        realName: "Тимур Хафизов",
        about: (
            <>
                Харизматичный стример с острым чувством юмора и живой реакцией, который заряжает аудиторию своим настроем<br/>
            </>
        ),
        socials: [
            {icon: <TG className="soc-icon"/>, count: "> 337 k", url: "https://t.me/travobet"},
            {icon: <TW className="soc-icon"/>, count: "> 625 k", url: "https://www.twitch.tv/tpabomah"},
            {icon: <YT className="soc-icon"/>, count: "> 478 k", url: "https://www.youtube.com/@tpabomah_"},
        ],
    },
    "ybicanoooobov": {
        name: "ybicanoooobov",
        realName: "Федор Юрченко",
        about: (
            <>
                Ветеран стриминга и один из добрейших людей в комьюнити. За долгие годы Федя собрал большую лояльную фанбазу своих зрителей
            </>
        ),
        socials: [
            {icon: <TG className="soc-icon"/>, count: "> 43 k", url: "https://t.me/YBNFedor"},
            {icon: <TW className="soc-icon"/>, count: "> 678 k", url: "https://www.twitch.tv/ybicanoooobov"},
            {icon: <YT className="soc-icon"/>, count: "> 10 k", url: "https://www.youtube.com/@DnevnikYbicanoooobov"},
        ],
    },
    "iltw1": {
        name: "iltw1",
        realName: "Игорь Филатов",
        about: (
            <>
                Механически сильный игрок, способный затащить даже безнадёжную игру. Его мувы часто становятся хайлайтами<br/>
            </>
        ),
        socials: [
            {icon: <TG className="soc-icon"/>, count: "> 8 k", url: "https://t.me/iltw123"},
            {icon: <TW className="soc-icon"/>, count: "> 251 k", url: "https://www.twitch.tv/iltw1"},
        ],
    },
    "Aunkere": {
        name: "Aunkere",
        realName: "Евгений Карьят",
        about: (
            <>
                Один из самых талантливых стрелков в CS-сцене, с мощным аимом и уверенным стилем игры<br/>
            </>
        ),
        socials: [
            {icon: <TG className="soc-icon"/>, count: "> 114 k", url: "https://t.me/aunkeretg"},
            {icon: <TW className="soc-icon"/>, count: "> 632 k", url: "https://www.twitch.tv/aunkere"},
            {icon: <YT className="soc-icon"/>, count: "> 50 k", url: "https://www.youtube.com/@Aunkere"},
        ],
    },
    "Stray228": {
        name: "Stray228",
        realName: "Олег Бочаров",
        about: (
            <>
                Беспощадный и харизматичный, Stray выделяется искренностью и умением удерживать внимание зрителя<br/>
            </>
        ),
        socials: [
            {icon: <TG className="soc-icon"/>, count: "> 174 k", url: "https://t.me/StrayDungeon228"},
            {icon: <TW className="soc-icon"/>, count: "> 1.7 kk", url: "https://www.twitch.tv/stray228"},
            {icon: <YT className="soc-icon"/>, count: "> 50 k", url: "https://www.youtube.com/c/StrayBest"},
        ],
    },
    "ct0m": {
        name: "ct0m",
        realName: "Артём Максимов",
        about: (
            <>
                Golden Boy в мире CS Twitch. Появившись совсем недавно, Артем быстро выбился в топы платформы по просмотрам, показывая игру на уровне профессиональных игроков в Counter-Strike 2
            </>
        ),
        socials: [
            {icon: <TG className="soc-icon"/>, count: "> 75 k", url: "https://t.me/ct0mislove"},
            {icon: <TW className="soc-icon"/>, count: "> 328 k", url: "https://www.twitch.tv/ct0m"},
        ],
    },
    "Rostikfacekid": {
        name: "Rostikfacekid",
        realName: "Ростислав Панков",
        about: (
            <>
                Молодой и амбициозный, стремительно набирает популярность благодаря своей энергии и уникальной подаче<br/>
            </>
        ),
        socials: [
            {icon: <TG className="soc-icon"/>, count: "> 193 k", url: "https://t.me/uglyfacekkk"},
            {icon: <TW className="soc-icon"/>, count: "> 789 k", url: "https://www.twitch.tv/rostikfacekid"},
        ],
    },
    // "avice": {
    //     name: "avice",
    //     realName: "Артем Темнов",
    //     about: (
    //         <>
    //             Тактичный и стильный игрок, демонстрирует высокий уровень игры и дисциплины в каждом матче<br/>
    //         </>
    //     ),
    //     socials: [
    //         {icon: <TG className="soc-icon"/>, count: "> 22 k", url: "https://t.me/aviciixd"},
    //         {icon: <TW className="soc-icon"/>, count: "> 117 k", url: "https://www.twitch.tv/avice"},
    //     ],
    // },
    // "eevochka": {
    //     name: "eevochka",
    //     realName: "Ева Денисова",
    //     about: (
    //         <>
    //             Искренняя и душевная стримерша, создающая комфортную атмосферу и близкий контакт со своей аудиторией<br/>
    //         </>
    //     ),
    //     socials: [
    //         {icon: <TG className="soc-icon"/>, count: "> 5.5 k", url: "https://t.me/eevochk4"},
    //         {icon: <TW className="soc-icon"/>, count: "> 33 k", url: "https://www.twitch.tv/eevochka"},
    //     ],
    // },
    "fcsm_kefir": {
        name: "fcsm_kefir",
        realName: "Сергей Никифоров",
        about: (
            <>
                Топ 1 СНГ стример в категории FIFA. В прошлом киберспортсмен, чемпион России в этой дисциплине 2012 и 2015 годов.<br/>
            </>
        ),
        socials: [
            {icon: <TG className="soc-icon"/>, count: "> 60к", url: "t.me/Fcsm_kefir"},
            {icon: <TW className="soc-icon"/>, count: "> 382к", url: "twitch.tv/fcsm_kefir"},
        ],
    },
    "FORZOREZOR": {
        name: "FORZOREZOR",
        realName: "Артемий Плетнёв",
        about: (
            <>
                Футболист ФК «АМКАЛ», показывает высокий скилл не только на поле, но и в дисциплине CS2<br/>
            </>
        ),
        socials: [
            {icon: <TG className="soc-icon"/>, count: "> 48 k", url: "https://t.me/forz9rr"},
            {icon: <TW className="soc-icon"/>, count: "> 148 k", url: "https://www.twitch.tv/forzorezor/about"},
        ],
    },
    "morphe_ya": {
        name: "morphe_ya",
        realName: "Валерия Высоцкая",
        about: (
            <>
                Яркая и запоминающаяся, ламповая и весёлая — Лера точно знает чем зацепить. На стримах присутствует как игровой, так и развлекательный контент, каждый найдёт себе что-то по вкусу<br/>
            </>
        ),
        socials: [
            {icon: <TG className="soc-icon"/>, count: "> 157к", url: "t.me/morpheyaa"},
            {icon: <TW className="soc-icon"/>, count: "> 738к", url: "twitch.tv/morphe_ya"},
        ],
    },
    "korya_mc": {
        name: "korya_mc",
        realName: "Карина Муса",
        about: (
            <>
                Лучшая в готовке изысканных блюд или в горячих косплеях, а может и просто в ламповом общении? — Это всё про Карину. На стримах всегда царит жаркая атмосфера, что заставит вас непременно остаться<br/>
            </>
        ),
        socials: [
            {icon: <TG className="soc-icon"/>, count: "> 102к", url: "t.me/koryaland"},
            {icon: <TW className="soc-icon"/>, count: "> 307к", url: "twitch.tv/korya_mc"},
        ],
    },
    "Sorabi_": {
        name: "Sorabi_",
        realName: "Полина Смирнова",
        about: (
            <>
                Хотите обсудить абсолютно любую тему? — вы по адресу. У Полины регулярно проходят различные дискуссии и припасено с десяток жизненных историй, которыми она возбудит вашу мозговую деятельность<br/>
            </>
        ),
        socials: [
            {icon: <TG className="soc-icon"/>, count: "> 14к", url: "t.me/SorabiToday"},
            {icon: <TW className="soc-icon"/>, count: "> 156к", url: "twitch.tv/sorabi_"},
        ],
    },
    "Shadowkekw": {
        name: "Shadowkekw",
        realName: "Максим Павлов",
        about: (
            <>
                На трансляциях Максима вы никогда не заскучаете: большое количество различных коллабораций, яркие реакции и самый активный чат — это то, что скрасит любой вечер<br/>
            </>
        ),
        socials: [
            {icon: <TG className="soc-icon"/>, count: "> 340к", url: "t.me/shadowkekw"},
            {icon: <TW className="soc-icon"/>, count: "> 828к", url: "twitch.tv/shadowkekw"},
        ],
    },
    "by_owl": {
        name: "by_owl",
        realName: "Юлия Ивлева",
        about: (
            <>
                Креативный подход к контенту, много общения с чатом, высококачевенные косплеи и захватывающий геймплей по различным сюжетным играм — всё это вы найдёте на канале у Юли, а возможно и что-то ещё<br/>
            </>
        ),
        socials: [
            {icon: <TG className="soc-icon"/>, count: "> 101к", url: "t.me/byowl"},
            {icon: <TW className="soc-icon"/>, count: "> 624к", url: "twitch.tv/by_owl"},
        ],
    },
    // "Recrent": {
    //     name: "Recrent",
    //     realName: "Дмитрий Осинцев",
    //     about: (
    //         <>
    //             Один из лидеров стриминга шутеров и киберспортивных дисциплин. Извесен своей профессиональной игрой, качественным контентом и сильной вовлеченностью зрителей<br/>
    //         </>
    //     ),
    //     socials: [
    //         {icon: <TG className="soc-icon"/>, count: "> 232к", url: "t.me/recrent"},
    //         {icon: <TW className="soc-icon"/>, count: "> 1.6кк", url: "twitch.tv/recrent"},
    //     ],
    // },
    "gr0mjkeee": {
        name: "gr0mjkeee",
        realName: "Герман Громов",
        about: (
            <>
                Голос десятка мероприятий и комьюнити кастов , таких как:The International, IEM Cologne,IEM Katowice, pubstomp, LIXXXURY CAMP, Fall Guys в реальной жизни и др. Отличается своей харизмой и подачей на трансляциях.<br/>
            </>
        ),
        socials: [
            {icon: <TG className="soc-icon"/>, count: "> 19 k", url: "https://t.me/gr0mjkeeee"},
            {icon: <TW className="soc-icon"/>, count: "> 15 k", url: "https://www.twitch.tv/gr0mjkeee"},
        ],
    },
    "leva2k": {
        name: "leva2k",
        realName: "Лев Богуш ",
        about: (
            <>
                Лева захватил внимание аудитории и не собирается останавливаться. Самый активный и креативный IRL стример Twitch. Может объездить всю Европу на велосипеде или подняться на Эльбрус в одиночку, хотя с ним всегда путешествуют его зрители на трансляции.
            </>
        ),
        socials: [
            {icon: <TG className="soc-icon"/>, count: "> 33 k", url: "https://t.me/lev_streams"},
            {icon: <TW className="soc-icon"/>, count: "> 200 k", url: "https://twitch.tv/leva2k"},
        ],
    }
}


export default streamers;