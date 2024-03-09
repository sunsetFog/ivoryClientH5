export default {
    name: 'screen',
    menuType: 'type1',
    superior: '',
    content: () => import(/* webpackChunkName: "screen" */ './index'),
};
