import React, { useState, useEffect, useRef } from 'react';

function pullToRefresh() {
    const [items, setItems] = useState([1, 2, 3, 4, 5]);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const touchStartY = useRef(0);
    const touchEndY = useRef(0);

    const handleTouchStart = (e) => {
        touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
        touchEndY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = () => {
        if (touchEndY.current > touchStartY.current + 50) {
            setIsRefreshing(true);
            refreshItems();
        }
    };

    const refreshItems = () => {
        setTimeout(() => {
            setItems((prevItems) => [...prevItems, prevItems.length + 1]);
            setIsRefreshing(false);
        }, 1000);
    };

    useEffect(() => {
        const container = document.querySelector('.refresh-container');
        container.addEventListener('touchstart', handleTouchStart);
        container.addEventListener('touchmove', handleTouchMove);
        container.addEventListener('touchend', handleTouchEnd);

        return () => {
            container.removeEventListener('touchstart', handleTouchStart);
            container.removeEventListener('touchmove', handleTouchMove);
            container.removeEventListener('touchend', handleTouchEnd);
        };
    }, []);

    return (
        <div className='refresh-container' style={{ overflowY: 'auto', height: '100vh' }}>
            <h1>下拉刷新示例</h1>
            {isRefreshing && <div>Refreshing...</div>}
            <ul>
                {items.map((item) => (
                    <li key={item}>Item {item}</li>
                ))}
            </ul>
        </div>
    );
}

export default pullToRefresh;
