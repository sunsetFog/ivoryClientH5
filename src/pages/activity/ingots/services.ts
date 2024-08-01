import { post, get } from '@/utils/request';

// 第二重-每日签到接口
export function dayApplyTab2(params) {
    return post('/acts/api/v1/yuanbao/sign/day/apply', {
        body: JSON.stringify(params),
        transformResponse: (data) => data,
    });
}
// 第二重时间间隔签到接口
export function timeApplyTab2(params) {
    return post('/acts/api/v1/yuanbao/sign/time/apply', {
        body: JSON.stringify(params),
        transformResponse: (data) => data,
    });
}
// 第二重活动-奖励配置信息
export function dayInfoTab2(params) {
    return get('/acts/api/v1/yuanbao/sign/info', {
        body: JSON.stringify(params),
        transformResponse: (data) => data,
    });
}
// 第一重 礼物列表｜预发礼物列表
export function giftListTab1(params) {
    return post('/acts/api/v1/yuanbao/gift/list', {
        body: JSON.stringify(params),
        transformResponse: (data) => data,
    });
}
// 第一重 兑换礼物
export function giftExchangeTab1(params) {
    return post('/acts/api/v1/yuanbao/gift/exchange', {
        body: JSON.stringify(params),
        transformResponse: (data) => data,
    });
}
// 第一重 获取本月剩余元宝数量，累计兑换彩金
export function pointStatisticsTab1(params) {
    return post('/acts/api/v1/yuanbao/point/statistics', {
        body: JSON.stringify(params),
        transformResponse: (data) => data,
    });
}
// 第三重活动-申请存款奖励
export function depositApplyTab3(params) {
    return post('/acts/api/v1/yuanbao/deposit/apply', {
        body: JSON.stringify(params),
        transformResponse: (data) => data,
    });
}
// 第三重活动-存款奖励配置信息
export function depositInfoTab3(params) {
    return get('/acts/api/v1/yuanbao/deposit/info', {
        body: JSON.stringify(params),
        transformResponse: (data) => data,
    });
}
// 第三重活动-投注活动奖励信息
export function betInfoTab3(params) {
    return post('/acts/api/v1/yuanbao/bet/info', {
        body: JSON.stringify(params),
        transformResponse: (data) => data,
    });
}
// 第三重活动-投注活动奖励申请
export function betApplyTab3(params) {
    return post('/acts/api/v1/yuanbao/bet/apply', {
        body: JSON.stringify(params),
        transformResponse: (data) => data,
    });
}
// 元宝兑换-第四重活动-新人召唤
export function newCallTab4(params) {
    return post('/acts/api/v1/yuanbao/fourth/new/call', {
        body: JSON.stringify(params),
        transformResponse: (data) => data,
    });
}
// 元宝兑换-第四重活动-好友回归
export function oldReturnTab4(params) {
    return post('/acts/api/v1/yuanbao/fourth/old/return', {
        body: JSON.stringify(params),
        transformResponse: (data) => data,
    });
}
// 获取第四重活动配置
export function callConfigTab4(params) {
    return post('/acts/api/v1/yuanbao/fourth/config', {
        body: JSON.stringify(params),
        transformResponse: (data) => data,
    });
}
// 投注记录查看
export function betHistoryModal(params) {
    return post('/acts/api/v1/yuanbao/history', {
        body: JSON.stringify(params),
        transformResponse: (data) => data,
    });
}
// 兑换礼物记录列表-老友回归元宝领取记录-新人召唤元宝领取记录
export function changeRecordModal(params) {
    return post('/acts/api/v1/yuanbao/point/change/record', {
        body: JSON.stringify(params),
        transformResponse: (data) => data,
    });
}
// 第四重活动-邀请
export function inviteactivityTab4(params) {
    return get('/api/v3/move/inviteactivity', {
        body: JSON.stringify(params),
        transformResponse: (data) => data,
    });
}
// 获取新配置活动列表
export function getNewActivity(params) {
    return get('/api/v3/activities', {
        body: JSON.stringify(params),
        transformResponse: (data) => data,
    });
}
// 统计访问数量
export function adRecord(params) {
    return post('/acts/api/v1/yuanbao/sign/ad/record', {
        body: JSON.stringify(params),
        transformResponse: (data) => data,
    });
}
