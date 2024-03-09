/*
PostCSS 的配置文件, 对 CSS 进行处理和转换
*/
// ---方式1---
// 默认配置
// let plugins = [
//     // 默认配置 https://www.nextjs.cn/docs/advanced-features/customizing-postcss-config
//     'postcss-flexbugs-fixes',
//     [
//         'postcss-preset-env',
//         {
//             autoprefixer: {
//                 flexbox: 'no-2009',
//             },
//             stage: 3,
//             features: {
//                 'custom-properties': false,
//             },
//         },
//     ],
// ];
// plugins.push([
//     'postcss-px-to-viewport-8-plugin',
//     {
//         unitToConvert: 'px', //需要转换的单位，默认为"px"
//         viewportWidth: 390, // 视窗的宽度，对应的是我们设计稿的宽度
//         unitPrecision: 6, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
//         propList: ['*'], // 能转化为vw的属性列表
//         viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw
//         fontViewportUnit: 'vw', //字体使用的视口单位
//         selectorBlackList: ['ignorePx'], //指定不转换为视窗单位的类,类名包含ignorePx字段不发生转化,忽略单行， PX大写,如果prettier格式化为小写 就在这行上面加/* prettier-ignore */
//         minPixelValue: 0.2, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
//         mediaQuery: true, // 允许在媒体查询中转换`px`
//         replace: true, //是否直接更换属性值，而不添加备用属性
//         exclude: [/node_modules/, /rest.scss/], //忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
//         landscape: false, //是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
//         landscapeUnit: 'vw', //横屏时使用的单位
//         landscapeWidth: 844, //横屏时使用的视口宽度
//     },
// ]);

// ---方式2---
let plugins = {
    'postcss-px-to-viewport': {
        unitToConvert: 'px', // 要转化的单位
        viewportWidth: 390, // 窗口宽度: UI设计稿给的手机的窗口宽度 （xx/750*100vw）
        viewportHeight: 1624, // 视窗的高
        unitPrecision: 6, // 转换后的精度，即小数点位数
        propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
        viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
        fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
        selectorBlackList: [], // 指定不转换为视窗单位的类名，/* prettier-ignore */
        minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
        mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
        replace: true, // 是否转换后直接更换属性值
        exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
        landscape: false, // 是否处理横屏情况
        landscapeUnit: 'vw', //横屏时使用的单位
        landscapeWidth: 844, //横屏时使用的视口宽度
    },
};
module.exports = {
    // 去掉px 转 vw
    // plugins,
};
