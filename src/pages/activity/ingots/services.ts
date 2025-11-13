import { post, get } from '@/@energy/ivoryDesign/@http/fetch';
// let domain = 'http://localhost:8062/sky';
let domain = 'http://8.148.240.171:9091/sky';

// 每日签到接口
export function dayApplyTab1(params) {
    return post(domain + '/shop/list', {
        body: JSON.stringify(params),
    });
}
// 时间间隔签到接口
export function timeApplyTab1(params) {
    return post(domain + '/shop/list', {
        body: JSON.stringify(params),
    });
}
// 奖励配置信息
export function dayInfoTab1(params) {
    return post(domain + '/shop/list', {
        body: JSON.stringify(params),
    });
}
// 礼物列表｜预发礼物列表
export function giftListTab4(params) {
    return post(domain + '/shop/list', {
        body: JSON.stringify(params),
    });
}
// 兑换礼物
export function giftExchangeTab4(params) {
    return post(domain + '/shop/list', {
        body: JSON.stringify(params),
    });
}
// 获取本月剩余元宝数量，累计兑换彩金
export function pointStatisticsTab4(params) {
    return post(domain + '/shop/list', {
        body: JSON.stringify(params),
    });
}
// 申请存款奖励
export function depositApplyTab2(params) {
    return post(domain + '/shop/list', {
        body: JSON.stringify(params),
    });
}
// 存款奖励配置信息
export function depositInfoTab2(params) {
    return post(domain + '/shop/list', {
        body: JSON.stringify(params),
    });
}
// 投注活动奖励信息
export function betInfoTab3(params) {
    return post(domain + '/shop/list', {
        body: JSON.stringify(params),
    });
}
// 投注活动奖励申请
export function betApplyTab3(params) {
    return post(domain + '/shop/list', {
        body: JSON.stringify(params),
    });
}
// 新人召唤
export function newCallTab3(params) {
    return post(domain + '/shop/list', {
        body: JSON.stringify(params),
    });
}
// 好友回归
export function oldReturnTab3(params) {
    return post(domain + '/shop/list', {
        body: JSON.stringify(params),
    });
}
// 活动配置
export function callConfigTab3(params) {
    return post(domain + '/shop/list', {
        body: JSON.stringify(params),
    });
}
// 投注记录查看
export function betHistoryModal(params) {
    return post(domain + '/shop/list', {
        body: JSON.stringify(params),
    });
}
// 兑换礼物记录列表-老友回归元宝领取记录-新人召唤元宝领取记录
export function changeRecordModal(params) {
    return post(domain + '/shop/list', {
        body: JSON.stringify(params),
    });
}
// 邀请
export function inviteactivityTab3(params) {
    return post(domain + '/shop/list', {
        body: JSON.stringify(params),
    });
}
// 获取新配置活动列表
export function getNewActivity(params) {
    return post(domain + '/shop/list', {
        body: JSON.stringify(params),
    });
}
// 统计访问数量
export function adRecord(params) {
    return post(domain + '/shop/list', {
        body: JSON.stringify(params),
    });
}
