export default {
    name: '身份认证',
    superior: '',
    content: () => import(/* webpackChunkName: "authentication" */ './index'),
};
