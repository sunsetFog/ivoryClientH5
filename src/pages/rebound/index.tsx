import React from 'react';
import style from './index.module.scss';
import PullToRefresh from './components/pullToRefresh';
/*
吸顶和下拉反弹
*/
function Rebound() {
    return (
        <div className={style.Rebound}>
            <div className={style.spinach}></div>
            <div className={style.cabbage}>
                <div className={style.garlic}>
                    <ul>
                        <li></li>
                        <li></li>
                    </ul>
                </div>

                <div className={style.cauliflower}></div>
            </div>
            <PullToRefresh>
                <div className={style.cardBox}>
                    <main></main>
                </div>
            </PullToRefresh>
        </div>
    );
}

export default Rebound;
