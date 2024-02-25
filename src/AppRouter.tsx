import React, { useState, useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
// import Tab from '@/view/Tab';
import routes from '@/router';
import SwitchRouter from '@/router/switch';

function App(props: any) {
    const [routerActive, setRouterActive] = useState(true);
    // 通过useRoutes配置实现路由管理
    const element = useRoutes(routes);
    useEffect(() => {
        /*
            生产环境，开发环境不开启。测试环境才开启
            npm install vconsole --save
        */
        if (process.env.NODE_ENV !== 'development' && process.env.NODE_ENV !== 'production') {
            const VConsole = require('vconsole/dist/vconsole.min.js');
            new VConsole({ maxLogNumber: 1000 });
        }
        // console.log('--VConsole--', process.env.NODE_ENV);
    }, []);
    return (
        <>
            {/* <Tab /> */}
            {/* {element} */}
            {routerActive ? element : <SwitchRouter></SwitchRouter>}
        </>
    );
}

export default App;
