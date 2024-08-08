import { Children } from 'react';

const metals = [
    {
        cName: '阿塞拜疆',
        cCode: 'AZ',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cirsahl5rj7aurr30330_342876.png',
        cNum: '994',
        cReg: '^(00){0,1}(994){1}\\d{6,15}$',
    },
    {
        cName: '巴林',
        cCode: 'BH',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cirsvld5rj7aurr31ut0_571204.png',
        cNum: '973',
        cReg: '^(00){0,1}(973){1}\\d{6,15}$',
    },
    {
        cName: '文莱达鲁萨兰国',
        cCode: 'BN',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cisdtsl5rj7aurr3eepg_332824.png',
        cNum: '673',
        cReg: '^(00){0,1}(673){1}\\d{6,15}$',
    },
    {
        cName: '瑞士',
        cCode: 'CH',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cisi7jd5rj7aurr3tv9g_784801.png',
        cNum: '41',
        cReg: '^(00){0,1}(41){1}\\d{6,12}$',
    },
    {
        cName: '智利',
        cCode: 'CL',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cise19t5rj7aurr3en50_765327.png',
        cNum: '56',
        cReg: '^(00){0,1}(56){1}\\d{6,12}$',
    },
    {
        cName: '哥斯达黎加',
        cCode: 'CR',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cise1et5rj7aurr3enhg_275995.png',
        cNum: '506',
        cReg: '^(00){0,1}(506){1}\\d{6,15}$',
    },
    {
        cName: '德国',
        cCode: 'DE',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cise70d5rj7aurr3f4ug_427910.png',
        cNum: '49',
        cReg: '^(00){0,1}(49){1}1(\\d{5,6}|\\d{9,12})$',
    },
    {
        cName: '吉布提',
        cCode: 'DJ',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cise1ol5rj7aurr3eob0_825321.png',
        cNum: '253',
        cReg: '^(00){0,1}(253){1}\\d{6,15}$',
    },
    {
        cName: '丹麦',
        cCode: 'DK',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cishht55rj7aurr3s2ng_731188.png',
        cNum: '45',
        cReg: '^(00){0,1}(45){1}\\d{6,12}$',
    },
    {
        cName: '西班牙',
        cCode: 'ES',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cisi67d5rj7aurr3trig_249718.png',
        cNum: '34',
        cReg: '^(00){0,1}(34){1}\\d{6,12}$',
    },
    {
        cName: '芬兰',
        cCode: 'FI',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cise1tt5rj7aurr3eoog_569561.png',
        cNum: '358',
        cReg: '^(00){0,1}(358){1}\\d{6,12}$',
    },
    {
        cName: '法国',
        cCode: 'FR',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cise2355rj7aurr3ep7g_128344.png',
        cNum: '33',
        cReg: '^(00){0,1}(33){1}(\\d{6}|\\d{8,9})$',
    },
    {
        cName: '格林纳达',
        cCode: 'GD',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cise83d5rj7aurr3f840_802669.png',
        cNum: '1473',
        cReg: '^(00){0,1}(1473){1}\\d{6,15}$',
    },
    {
        cName: '格鲁吉亚',
        cCode: 'GE',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cise6rl5rj7aurr3f4h0_421015.png',
        cNum: '995',
        cReg: '^(00){0,1}(995){1}\\d{6,15}$',
    },
    {
        cName: '几内亚',
        cCode: 'GN',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cise8d55rj7aurr3f8v0_521427.png',
        cNum: '224',
        cReg: '^(00){0,1}(224){1}\\d{6,15}$',
    },
    {
        cName: '希腊',
        cCode: 'GR',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cise7955rj7aurr3f5sg_810760.png',
        cNum: '30',
        cReg: '^(00){0,1}(30){1}\\d{6,12}$',
    },
    {
        cName: '危地马拉',
        cCode: 'GT',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cise88d5rj7aurr3f8g0_315559.png',
        cNum: '502',
        cReg: '^(00){0,1}(502){1}\\d{6,15}$',
    },
    {
        cName: '几内亚比绍',
        cCode: 'GW',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cise8hl5rj7aurr3f9bg_165938.png',
        cNum: '245',
        cReg: '^(00){0,1}(245){1}\\d{6,15}$',
    },
    {
        cName: '圭亚那',
        cCode: 'GY',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cise8nt5rj7aurr3f9s0_702266.png',
        cNum: '592',
        cReg: '^(00){0,1}(592){1}\\d{6,15}$',
    },
    {
        cName: '香港',
        cCode: 'HK',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cisdust5rj7aurr3ehkg_690385.png',
        cNum: '852',
        cReg: '^(00){0,1}(852){1}0{0,1}[1,5,6,9](?:\\d{7}|\\d{8}|\\d{12})$',
    },
    {
        cName: '洪都拉斯',
        cCode: 'HN',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cise8tt5rj7aurr3fabg_846687.png',
        cNum: '504',
        cReg: '^(00){0,1}(504){1}\\d{6,15}$',
    },
    {
        cName: '克罗地亚',
        cCode: 'HR',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cise1jt5rj7aurr3enu0_301590.png',
        cNum: '385',
        cReg: '^(00){0,1}(385){1}\\d{6,15}$',
    },
    {
        cName: '匈牙利',
        cCode: 'HU',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cise9755rj7aurr3fb70_956205.png',
        cNum: '36',
        cReg: '^(00){0,1}(36){1}\\d{6,12}$',
    },
    {
        cName: '印度尼西亚',
        cCode: 'ID',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cish6255rj7aurr3rbp0_236086.png',
        cNum: '62',
        cReg: '^(00){0,1}(62){1}[2-9]\\d{7,11}$',
    },
    {
        cName: '爱尔兰',
        cCode: 'IE',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cisig5d5rj7aurr3us8g_724391.png',
        cNum: '353',
        cReg: '^(00){0,1}(353){1}\\d{6,12}$',
    },
    {
        cName: '以色列',
        cCode: 'IL',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cishfpt5rj7aurr3ruk0_769721.png',
        cNum: '972',
        cReg: '^(00){0,1}(972){1}\\d{6,12}$',
    },
    {
        cName: '印度',
        cCode: 'IN',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cish5sd5rj7aurr3rb8g_974661.png',
        cNum: '91',
        cReg: '^(00){0,1}(91){1}\\d{6,12}$',
    },
    {
        cName: '意大利',
        cCode: 'IT',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cisictd5rj7aurr3ui5g_741399.png',
        cNum: '39',
        cReg: '^(00){0,1}(39){1}[37]\\d{8,11}$',
    },
    {
        cName: '牙买加',
        cCode: 'JM',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cishfud5rj7aurr3ruvg_548412.png',
        cNum: '1876',
        cReg: '^(00){0,1}(1876){1}\\d{6,15}$',
    },
    {
        cName: '约旦',
        cCode: 'JO',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cishg4d5rj7aurr3rvdg_601459.png',
        cNum: '962',
        cReg: '^(00){0,1}(962){1}\\d{6,12}$',
    },
    {
        cName: '日本',
        cCode: 'JP',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cise0kt5rj7aurr3elj0_292100.png',
        cNum: '81',
        cReg: '^(00){0,1}(81){1}0{0,1}[7,8,9](?:\\d{8}|\\d{9})$',
    },
    {
        cName: '肯尼亚',
        cCode: 'KE',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cishhnt5rj7aurr3s2c0_531657.png',
        cNum: '254',
        cReg: '^(00){0,1}(254){1}\\d{6,15}$',
    },
    {
        cName: '吉尔吉斯',
        cCode: 'KG',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cishmet5rj7aurr3sd80_267443.png',
        cNum: '996',
        cReg: '^(00){0,1}(996){1}\\d{6,12}$',
    },
    {
        cName: '柬埔寨',
        cCode: 'KH',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cisdumt5rj7aurr3eh8g_440220.png',
        cNum: '855',
        cReg: '^(00){0,1}(855){1}\\d{6,12}$',
    },
    {
        cName: '韩国',
        cCode: 'KR',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cise0rd5rj7aurr3em30_823808.png',
        cNum: '82',
        cReg: '^(00){0,1}(82){1}0{0,1}[7,1](?:\\d{8}|\\d{9})$',
    },
    {
        cName: '科威特',
        cCode: 'KW',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cishi2d5rj7aurr3s340_181256.png',
        cNum: '965',
        cReg: '^(00){0,1}(965){1}\\d{6,15}$',
    },
    {
        cName: '斯里兰卡',
        cCode: 'LK',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cisi6l55rj7aurr3tsjg_175735.png',
        cNum: '94',
        cReg: '^(00){0,1}(94){1}\\d{6,12}$',
    },
    {
        cName: '莱索托',
        cCode: 'LS',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cishmot5rj7aurr3se60_371244.png',
        cNum: '266',
        cReg: '^(00){0,1}(266){1}\\d{6,15}$',
    },
    {
        cName: '立陶宛',
        cCode: 'LT',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cishmv55rj7aurr3sej0_686617.png',
        cNum: '370',
        cReg: '^(00){0,1}(370){1}\\d{6,12}$',
    },
    {
        cName: '卢森堡',
        cCode: 'LU',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cishn6t5rj7aurr3sf50_760961.png',
        cNum: '352',
        cReg: '^(00){0,1}(352){1}\\d{6,12}$',
    },
    {
        cName: '拉脱维亚',
        cCode: 'LV',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cishmjt5rj7aurr3sdp0_797016.png',
        cNum: '371',
        cReg: '^(00){0,1}(371){1}\\d{6,15}$',
    },
    {
        cName: '摩洛哥',
        cCode: 'MA',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cishr9d5rj7aurr3spbg_821018.png',
        cNum: '212',
        cReg: '^(00){0,1}(212){1}\\d{6,12}$',
    },
    {
        cName: '摩尔多瓦',
        cCode: 'MD',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cishq6d5rj7aurr3sm0g_462114.png',
        cNum: '373',
        cReg: '^(00){0,1}(373){1}\\d{6,15}$',
    },
    {
        cName: '马达加斯加',
        cCode: 'MG',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cishnm55rj7aurr3sgag_340460.png',
        cNum: '261',
        cReg: '^(00){0,1}(261){1}\\d{6,15}$',
    },
    {
        cName: '马里',
        cCode: 'ML',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cisho5d5rj7aurr3shgg_502834.png',
        cNum: '223',
        cReg: '^(00){0,1}(223){1}\\d{6,15}$',
    },
    {
        cName: '外蒙古',
        cCode: 'MN',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cishqtt5rj7aurr3so4g_526749.png',
        cNum: '976',
        cReg: '^(00){0,1}(976){1}\\d{6,12}$',
    },
    {
        cName: '澳门',
        cCode: 'MO',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cisdv355rj7aurr3ei4g_165444.png',
        cNum: '853',
        cReg: '^(00){0,1}(853){1}6\\d{7}$',
    },
    {
        cName: '毛里求斯',
        cCode: 'MU',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cisho9t5rj7aurr3shq0_452152.png',
        cNum: '230',
        cReg: '^(00){0,1}(230){1}\\d{6,15}$',
    },
    {
        cName: '马尔代夫',
        cCode: 'MV',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cisho0t5rj7aurr3sh4g_853016.png',
        cNum: '960',
        cReg: '^(00){0,1}(960){1}\\d{6,12}$',
    },
    {
        cName: '马拉维',
        cCode: 'MW',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cishnql5rj7aurr3sglg_492401.png',
        cNum: '265',
        cReg: '^(00){0,1}(265){1}\\d{6,15}$',
    },
    {
        cName: '墨西哥',
        cCode: 'MX',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cishoed5rj7aurr3si40_951918.png',
        cNum: '52',
        cReg: '^(00){0,1}(52){1}\\d{6,12}$',
    },
    {
        cName: '马来西亚',
        cCode: 'MY',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cisdvil5rj7aurr3ej9g_876810.png',
        cNum: '60',
        cReg: '^(00){0,1}(60){1}1\\d{8,9}$',
    },
    {
        cName: '莫桑比克',
        cCode: 'MZ',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cishrol5rj7aurr3sqp0_369907.png',
        cNum: '258',
        cReg: '^(00){0,1}(258){1}\\d{6,15}$',
    },
    {
        cName: '那米比亚',
        cCode: 'NA',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cishrvt5rj7aurr3srdg_530887.png',
        cNum: '264',
        cReg: '^(00){0,1}(264){1}\\d{6,15}$',
    },
    {
        cName: '尼日尔',
        cCode: 'NE',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cishsat5rj7aurr3ssig_813663.png',
        cNum: '227',
        cReg: '^(00){0,1}(227){1}\\d{6,15}$',
    },
    {
        cName: '尼日利亚',
        cCode: 'NG',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cishsft5rj7aurr3st40_218047.png',
        cNum: '234',
        cReg: '^(00){0,1}(234){1}\\d{6,12}$',
    },
    {
        cName: '尼加拉瓜',
        cCode: 'NI',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cisidkt5rj7aurr3ukmg_409650.png',
        cNum: '505',
        cReg: '^(00){0,1}(505){1}\\d{6,15}$',
    },
    {
        cName: '荷兰',
        cCode: 'NL',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cishs4t5rj7aurr3srv0_175507.png',
        cNum: '31',
        cReg: '^(00){0,1}(31){1}6\\d{8}$',
    },
    {
        cName: '挪威',
        cCode: 'NO',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cishsmt5rj7aurr3stng_990789.png',
        cNum: '47',
        cReg: '^(00){0,1}(47){1}\\d{6,12}$',
    },
    {
        cName: '新西兰/皮特凯恩岛',
        cCode: 'NZ',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cisi0bt5rj7aurr3t9jg_901524.png',
        cNum: '64',
        cReg: '^(00){0,1}(64){1}[278]\\d{7,9}$',
    },
    {
        cName: '阿曼',
        cCode: 'OM',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cishssd5rj7aurr3sua0_962554.png',
        cNum: '968',
        cReg: '^(00){0,1}(968){1}\\d{6,15}$',
    },
    {
        cName: '巴拿马',
        cCode: 'PA',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cishtml5rj7aurr3t17g_742155.png',
        cNum: '507',
        cReg: '^(00){0,1}(507){1}\\d{6,12}$',
    },
    {
        cName: '秘鲁',
        cCode: 'PE',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cishuu55rj7aurr3t570_561957.png',
        cNum: '51',
        cReg: '^(00){0,1}(51){1}\\d{6,12}$',
    },
    {
        cName: '巴布亚新几内亚',
        cCode: 'PG',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cishufd5rj7aurr3t3mg_363993.png',
        cNum: '675',
        cReg: '^(00){0,1}(675){1}\\d{6,15}$',
    },
    {
        cName: '菲律宾',
        cCode: 'PH',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cishvel5rj7aurr3t6qg_816763.png',
        cNum: '63',
        cReg: '^(00){0,1}(63){1}(0){0,1}[24579](\\d{7,9}|\\d{12})$',
    },
    {
        cName: '波兰',
        cCode: 'PL',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cisi0kl5rj7aurr3tag0_947356.png',
        cNum: '48',
        cReg: '^(00){0,1}(48){1}\\d{6,12}$',
    },
    {
        cName: '葡萄牙',
        cCode: 'PT',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cisi0pt5rj7aurr3tb10_679496.png',
        cNum: '351',
        cReg: '^(00){0,1}(351){1}\\d{6,12}$',
    },
    {
        cName: '卡塔尔',
        cCode: 'QA',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cisi1055rj7aurr3tbk0_124151.png',
        cNum: '974',
        cReg: '^(00){0,1}(974){1}\\d{6,12}$',
    },
    {
        cName: '罗马尼亚',
        cCode: 'RO',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cisi16l5rj7aurr3tc9g_496948.png',
        cNum: '40',
        cReg: '^(00){0,1}(40){1}\\d{6,12}$',
    },
    {
        cName: '俄罗斯联邦',
        cCode: 'RU',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cisi1bd5rj7aurr3td10_839363.png',
        cNum: '7',
        cReg: '^(00){0,1}(7){1}[13489]\\d{9,11}$',
    },
    {
        cName: '卢旺达',
        cCode: 'RW',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cisi26l5rj7aurr3tfmg_385717.png',
        cNum: '250',
        cReg: '^(00){0,1}(250){1}\\d{6,15}$',
    },
    {
        cName: '沙特阿拉伯',
        cCode: 'SA',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cisi2cd5rj7aurr3tg7g_649822.png',
        cNum: '966',
        cReg: '^(00){0,1}(966){1}\\d{6,12}$',
    },
    {
        cName: '塞舌尔',
        cCode: 'SC',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cisi39t5rj7aurr3tj60_582596.png',
        cNum: '248',
        cReg: '^(00){0,1}(248){1}\\d{6,12}$',
    },
    {
        cName: '瑞典',
        cCode: 'SE',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cisi7bt5rj7aurr3tujg_316799.png',
        cNum: '46',
        cReg: '^(00){0,1}(46){1}[124-7](\\d{8}|\\d{10}|\\d{12})$',
    },
    {
        cName: '新加坡',
        cCode: 'SG',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cise1055rj7aurr3eme0_891509.png',
        cNum: '65',
        cReg: '^(00){0,1}(65){1}[13689]\\d{6,7}$',
    },
    {
        cName: '斯洛文尼亚',
        cCode: 'SI',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cisi5e55rj7aurr3tplg_254832.png',
        cNum: '386',
        cReg: '^(00){0,1}(386){1}\\d{6,15}$',
    },
    {
        cName: '斯洛伐克',
        cCode: 'SK',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cisi41d5rj7aurr3tll0_195643.png',
        cNum: '421',
        cReg: '^(00){0,1}(421){1}\\d{6,15}$',
    },
    {
        cName: '塞拉利昂',
        cCode: 'SL',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cisi3s55rj7aurr3tl3g_536350.png',
        cNum: '232',
        cReg: '^(00){0,1}(232){1}\\d{6,15}$',
    },
    {
        cName: '塞内加尔',
        cCode: 'SN',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cisi34l5rj7aurr3tiig_817820.png',
        cNum: '211',
        cReg: '^(00){0,1}(221){1}\\d{6,15}$',
    },
    {
        cName: '苏里南',
        cCode: 'SR',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cisigr55rj7aurr3uu60_464306.png',
        cNum: '597',
        cReg: '^(00){0,1}(597){1}\\d{6,15}$',
    },
    {
        cName: '斯威士兰',
        cCode: 'SZ',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cisi74l5rj7aurr3tttg_236577.png',
        cNum: '268',
        cReg: '^(00){0,1}(268){1}\\d{6,15}$',
    },
    {
        cName: '泰国',
        cCode: 'TH',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cisdvnd5rj7aurr3ejjg_622031.png',
        cNum: '66',
        cReg: '^(00){0,1}(66){1}[13456789]\\d{7,8}$',
    },
    {
        cName: '塔吉克',
        cCode: 'TJ',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cisia1t5rj7aurr3u780_728217.png',
        cNum: '992',
        cReg: '^(00){0,1}(992){1}\\d{6,15}$',
    },
    {
        cName: '土耳其',
        cCode: 'TR',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cise14l5rj7aurr3emo0_770235.png',
        cNum: '90',
        cReg: '^(00){0,1}(90){1}\\d{6,12}$',
    },
    {
        cName: '台湾',
        cCode: 'TW',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cisdv855rj7aurr3eiig_184722.png',
        cNum: '886',
        cReg: '^(00){0,1}(886){1}0{0,1}[6,7,9](?:\\d{7}|\\d{8}|\\d{10})$',
    },
    {
        cName: '坦桑尼亚',
        cCode: 'TZ',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cisib155rj7aurr3uavg_854305.png',
        cNum: '255',
        cReg: '^(00){0,1}(255){1}\\d{6,15}$',
    },
    {
        cName: '美国',
        cCode: 'US',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cisici55rj7aurr3ugsg_458887.png',
        cNum: '1',
        cReg: '^(00){0,1}(1){1}\\d{10,12}$',
    },
    {
        cName: '乌拉圭',
        cCode: 'UY',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cisicn55rj7aurr3uhj0_100318.png',
        cNum: '598',
        cReg: '^(00){0,1}(598){1}\\d{6,15}$',
    },
    {
        cName: '委内瑞拉',
        cCode: 'VE',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cisidc55rj7aurr3ujm0_537903.png',
        cNum: '58',
        cReg: '^(00){0,1}(58){1}\\d{6,12}$',
    },
    {
        cName: '越南',
        cCode: 'VN',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cisdvdl5rj7aurr3eiug_199399.png',
        cNum: '84',
        cReg: '^(00){0,1}(84){1}[1-9]\\d{6,9}$',
    },
    {
        cName: '也门',
        cCode: 'YE',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cisidgd5rj7aurr3uk30_456780.png',
        cNum: '967',
        cReg: '^(00){0,1}(967){1}\\d{6,15}$',
    },
    {
        cName: '南非',
        cCode: 'ZA',
        cPicUrl:
            'https://y0fatbackendstatic.s3.ap-east-1.amazonaws.com/images/new_public/web/bg/fd/cs/cisi5n55rj7aurr3tqc0_613139.png',
        cNum: '27',
        cReg: '^(00){0,1}(27){1}\\d{6,12}$',
    },
];

export const vegetable = () => {
    const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
    // console.log(alphabet);
    let milk = [];

    for (let i = 0; i < alphabet.length; i++) {
        let item = alphabet[i];
        let peach = {
            title: '',
            children: [],
        };
        for (let j = 0; j < metals.length; j++) {
            let row = metals[j];
            if (item == row.cCode.charAt(0)) {
                peach.children.push(row);
            }
        }
        peach.title = item;
        if (peach.children.length != 0) {
            milk.push(peach);
        }
    }
    return milk;
};
