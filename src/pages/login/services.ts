import { get, post } from '@/@energy/ivoryDesign/@http/fetch';
// 全局弹窗配置信息
// export function getDialogConfig(): Promise<any> {
//     return get('/fd/api/v1/fast/getfastunpay', {
//         noToast: true,
//     });
// }
// let domain = 'http://localhost:8062/sky';
let domain = 'http://8.148.240.171:9091/sky';

// 每日签到接口
export function loginApi(params) {
    return post(domain + '/shop/list', {
        body: JSON.stringify(params),
    });
}
