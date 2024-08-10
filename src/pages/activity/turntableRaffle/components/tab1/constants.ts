export const gifts1 = [
    { id: 100, name: '彩金100元', money: 100 },
    { id: 200, name: '彩金200元', money: 200 },
    { id: 300, name: '彩金300元', money: 300 },
    { id: 400, name: '彩金400元', money: 400 },
    { id: 500, name: '彩金500元', money: 500 },
    { id: 600, name: '彩金600元', money: 600 },
    { id: 700, name: '彩金700元', money: 700 },
];

/*
问题：
require(`./img/${keyWay(arrBox.length)}.png`)
require带变量的在useSetState赋默认值值报错，不带变量就ok
*/
export const refreshing = {
    '6': {
        light: require(`./img/6.png`),
        night: require(`./img/6_night.png`),
    },
    '7': {
        light: require(`./img/7.png`),
        night: require(`./img/7_night.png`),
    },
    '8': {
        light: require(`./img/8.png`),
        night: require(`./img/8_night.png`),
    },
    '9': {
        light: require(`./img/9.png`),
        night: require(`./img/9_night.png`),
    },
};
