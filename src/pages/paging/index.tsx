import React, { useState } from 'react';
// styles
import styles from './index.module.scss';
import { giftList1 } from './contants';
import HeaderUnit from '@/components/headerUnit';
import TabPanel from './components/tabPanel';
/*
查看更多&收起
*/
function paging() {
    const [giftList2, setGiftOfList2] = useState(giftList1);
    const [pageNum, setPageOfNum] = useState(1);
    const [totalPage, setTotal] = useState(Math.ceil(giftList1.length / 4));

    const pageWay = () => {
        console.log('--pageWay--', totalPage, pageNum);
        if (totalPage == pageNum) {
            return;
        }
        if (totalPage > pageNum) {
            setPageOfNum(pageNum + 1);
            return;
        }
    };
    const upWay = () => {
        setPageOfNum(1);
    };
    return (
        <section className={styles.paging}>
            <HeaderUnit></HeaderUnit>
            <div className={styles.banner}></div>
            <TabPanel></TabPanel>
            <div className={styles.cabbage}>
                <ul>
                    {giftList2.slice(0, pageNum * 4).map((item, index) => {
                        return (
                            <li key={index}>
                                <div className={styles.cartoon}>
                                    <img src={item.img_url} />
                                </div>
                                <div className={styles.bean}>{item.giftName}</div>
                                <div className={styles.spring}>{item.jackpot}元</div>
                                <div className={styles.fabulous}>
                                    <button>立即兑换</button>
                                </div>
                                <div className={styles.dragonfly}>
                                    <label>需首存金额</label>
                                    <span>¥{item.competency.toLocaleString()}</span>
                                    <div style={{ clear: 'both' }}></div>
                                </div>
                                <div className={styles.butterfly}></div>
                                <div className={styles.dragonfly}>
                                    <label>流水倍数</label>
                                    <span>{item.flowingTimes}倍</span>
                                    <div style={{ clear: 'both' }}></div>
                                </div>
                            </li>
                        );
                    })}
                    <div style={{ clear: 'both' }}></div>
                </ul>
            </div>
            {totalPage >= 2 && totalPage != pageNum ? (
                <div className={styles.undercurrent}>
                    <main
                        onClick={() => {
                            pageWay();
                        }}
                    >
                        查看更多<div className={styles.box1}></div>
                    </main>
                </div>
            ) : null}
            {totalPage >= 2 && totalPage == pageNum ? (
                <div className={styles.undercurrent}>
                    <main
                        onClick={() => {
                            upWay();
                        }}
                    >
                        收起<div className={styles.box2}></div>
                    </main>
                </div>
            ) : null}
            <div className={styles.ruleBox}>
                <header>活动简介</header>
                <main className={styles.beautiful}></main>
            </div>
        </section>
    );
}

export default paging;
