import React, { useEffect, useRef, useState, useImperativeHandle } from 'react';

import styles from './index.module.scss';

interface PropsType {
    children?: React.ReactNode; // 子内容
    title?: string; // 标题
    onRef?: any; // ref
    show?: boolean; // 展示
}
/*
弹窗
*/
function customModal({ children, title, onRef, show }: PropsType) {
    useImperativeHandle(onRef, () => {
        return {
            initWay: initWay,
            closeWay: closeWay,
        };
    });
    const [isVisible, setIsOfVisible] = useState(show || false);
    const closeWay = () => {
        document.body.style.overflow = '';
        setIsOfVisible(false);
    };
    const initWay = () => {
        document.body.style.overflow = 'hidden';
        setIsOfVisible(true);
    };
    const defaultWay = (event) => {
        var ev = event || window.event;
        ev.stopPropagation();
    };
    useEffect(() => {
        if (!isVisible) {
            const coke = document.getElementById('jelloTemporary');
            if (!coke) return;
            document.body.removeChild(coke);
        }
    }, [isVisible]);
    return isVisible ? (
        <article className={styles.customModal} onClick={closeWay}>
            <main onClick={defaultWay} id='toImg'>
                {title ? <header>{title}</header> : null}

                {children}
            </main>
        </article>
    ) : null;
}

export default customModal;
