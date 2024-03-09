/*
makeAutoObservable用于将对象自动转为mobx的观察者对象，使得mobx可以追踪和响应对象属性的变化
runInAction用于执行在action中定义的方法
*/
import { makeAutoObservable, runInAction } from 'mobx';
const themeStore = makeAutoObservable({
    data: {
        theme_value: 'light',
        screen_value: 'vertical',
    },
    setTheme: (type: string) => {
        const swan_html = document.documentElement || document.body;
        sessionStorage.setItem('theme_skin', type);
        // 修改html标签的类名
        swan_html.className = type;
        // html设置属性
        swan_html.setAttribute('data-theme', type);
        // runInAction(() => {
        themeStore.data.theme_value = type;
        // });
    },
    setScreenAndRem: () => {
        // const swan_html = document.querySelector('html');
        const swan_html = document.documentElement || document.body;
        const screen_status =
            swan_html.clientWidth > swan_html.clientHeight ? 'horizontal' : 'vertical';

        // 根据屏幕宽，计算html的font-size值
        let pixelSize = 16 * (swan_html.clientWidth / 390);
        if (screen_status == 'horizontal') {
            pixelSize = 16 * (swan_html.clientWidth / 844);
        }
        // html的font-size设置
        swan_html.style.fontSize = pixelSize + 'px';
        // console.log('--swan_html--', swan_html);
        // console.log('--pixelSize--', pixelSize, swan_html.clientWidth);

        swan_html?.setAttribute('data-screen', screen_status);
        // runInAction(() => {
        themeStore.data.screen_value = screen_status;
        // });
    },
}) as any;
export default themeStore;
