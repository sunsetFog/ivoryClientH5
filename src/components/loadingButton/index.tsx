import React, { useEffect, useRef, useState, useImperativeHandle } from 'react';

import styles from './index.module.scss';
import { dotDom } from './constants';

interface PropsType {
    children?: React.ReactNode; // 子内容
    className?: string; // 类名
    loadingActive?: boolean; // 正在加载按钮 & 禁用状态
    disabledActive?: boolean; // 是否禁用
    onClick?: () => any; // 点击
}

// 设置默认值方式1 {loadingActive=false}
const LoadingButton: React.FC<PropsType> = ({
    children,
    className,
    loadingActive,
    disabledActive,
    onClick,
}) => {
    const sureWay = () => {
        // 禁用点击不了
        if (loadingActive || disabledActive) {
            return;
        }
        onClick();
    };

    return (
        <button
            className={`${styles.LoadingButton} ${
                loadingActive || disabledActive ? styles.dimActive : ''
            } ${className}`}
            onClick={sureWay}
        >
            {loadingActive ? <img src={require('./img/1.png')} /> : null}
            {/* {loadingActive ? dotDom() : null} */}

            {children}
        </button>
    );
};
// 设置默认值方式2
LoadingButton.defaultProps = {
    loadingActive: false,
    disabledActive: false,
};
export default LoadingButton;
