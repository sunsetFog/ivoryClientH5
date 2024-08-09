import React, { useState, useRef, useImperativeHandle } from 'react';
import styles from './index.module.scss';

interface PropsType {
    children?: React.ReactNode; // 子内容
    title?: string; // 标题
    onRef?: any; // ref
    show?: boolean; // 展示
}
/*
下拉菜单
*/
function dropdown({ children, onRef, show }: PropsType) {
    useImperativeHandle(onRef, () => {
        return {
            initWay: initWay,
            closeWay: closeWay,
        };
    });
    const closeWay = () => {
        document.body.style.overflow = '';
        setIsOfVisible(false);
    };
    const initWay = (topNum: number) => {
        document.body.style.overflow = 'hidden';
        setIsOfVisible(true);
        setTopOfBee(topNum);
        console.log('topBee', topNum);
    };
    const defaultWay = (event) => {
        var ev = event || window.event;
        ev.stopPropagation();
    };
    const [isVisible, setIsOfVisible] = useState(show || false);
    const [topBee, setTopOfBee] = useState(0);
    return isVisible ? (
        <article className={styles.dropdown} onClick={closeWay} style={{ top: topBee + 'px' }}>
            <main onClick={defaultWay}>{children}</main>
        </article>
    ) : null;
}
export default dropdown;
