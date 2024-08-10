export default {
    name: 'treasureChest',
    superior: '',
    content: () => import(/* webpackChunkName: "treasureChest" */ './index'),
};
