import React, { useEffect, useRef, useState } from 'react';

import styles from './index.module.scss';
// react 17的
// import ReactDOM from 'react-dom';
// react 18的
import ReactDOM from 'react-dom/client';
import CustomModal from '@/components/customModal';

function pleaseToDo() {
    const recRef = useRef<any>();
    const closeWay = () => {
        recRef.current.closeWay();
    };
    const sureWay = () => {
        closeWay();
    };
    const pleaseLogin = (callback = () => {}) => {
        // const { phone } = userStore.userInfo;
        let flag = false;
        if (flag) {
            return callback();
        }
        console.log('nono');
        let hamburger: React.JSX.Element = (
            <CustomModal title='登录提醒' onRef={recRef} show={true}>
                <div className={styles.coconut}>此功能仅对注册用户开放</div>
                <footer className={styles.grape}>
                    <button className={styles.tomato} onClick={sureWay}>
                        关闭
                    </button>
                    <button className={styles.tomato} onClick={sureWay}>
                        注册登录
                    </button>
                </footer>
            </CustomModal>
        );
        document.body.style.overflow = 'hidden';
        const elem = document.createElement('div');
        elem.setAttribute('id', 'jelloTemporary');
        // 这是Node参数添加方式，Element参数添加需要ReactDOM
        document.body.appendChild(elem);
        // react 18
        const root = ReactDOM.createRoot(elem);
        root.render(hamburger);
        // react 17
        // ReactDOM.render(hamburger, elem);
    };
    const pleaseBindPhone = (callback = () => {}) => {
        let flag = true;
        if (flag) {
            return callback();
        }
        let hamburger: React.JSX.Element = (
            <CustomModal title='温馨提示' onRef={recRef} show={true}>
                <div className={styles.coconut}>您需要绑定手机号！</div>
                <footer className={styles.grape}>
                    <button className={styles.potato} onClick={closeWay}>
                        暂不绑定
                    </button>
                    <button className={styles.potato} onClick={sureWay}>
                        前往绑定
                    </button>
                </footer>
            </CustomModal>
        );
        document.body.style.overflow = 'hidden';
        const elem = document.createElement('div');
        elem.setAttribute('id', 'jelloTemporary');
        document.body.appendChild(elem);
        const root = ReactDOM.createRoot(elem);
        root.render(hamburger);
    };
    return {
        pleaseLogin,
        pleaseBindPhone,
    };
}

export default pleaseToDo;
