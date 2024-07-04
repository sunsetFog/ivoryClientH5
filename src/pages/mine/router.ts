export default {
    name: '我的',
    menuType: 'type1',
    superior: '',
    content: () => import(/* webpackChunkName: "mine" */ './index'),
};
