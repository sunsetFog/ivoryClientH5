import React, { useState, useEffect, useRef } from 'react';
import styles from './index.module.scss';

const PullToRefresh = ({ children }: { children: any }) => {
    const startY = useRef(0);
    const [styObj, setStyOfObj] = useState({});

    const handleTouchStart = (event: any) => {
        // event.preventDefault(); // 阻止默认滚动行为
        startY.current = event.touches[0].clientY;
    };

    const handleTouchMove = (event: any) => {
        const currentY = event.touches[0].clientY;

        let diffY = currentY - startY.current;
        // console.log('--currentY--', startY.current);
        // 向下滑动
        if (diffY > 0) {
            diffY = Math.abs(diffY);
            diffY = Math.min(diffY * 0.2, 40);
            setStyOfObj({ transform: `translate3d(0px, ${diffY}px, 0px)`, transition: 'none' });
        }
    };

    const handleTouchEnd = () => {
        setStyOfObj({ transform: `translate3d(0px, 0px, 0px)`, transition: 'all 0.25s linear' });
    };

    useEffect(() => {
        // ivory经验问题：处理body自带下拉反弹
        let bodyBox = document.getElementsByTagName('body')[0];
        bodyBox.style.overflow = 'hidden';
        return () => {
            bodyBox.style.overflow = 'auto';
        };
    }, []);

    return (
        <div
            className={`${styles.pullToRefresh}`}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <div className={styles.loadingBox}>
                <div></div>
            </div>
            <main style={styObj} className={styles.contentBox}>
                {children}
            </main>
        </div>
    );
};

export default PullToRefresh;
