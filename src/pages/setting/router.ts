export default {
    name: '设置',
    menuType: 'type1',
    superior: '',
    content: () => import(/* webpackChunkName: "setting" */ './index'),
};
