import React, { useState, useRef } from 'react';
// styles
import styles from './index.module.scss';
import doSty from '@/components/pleaseToDo/index.module.scss';
import { giftList1 } from './contants';
import HeaderUnit from '@/components/headerUnit';
import TabPanel from './components/tabPanel';
import pleaseToDo from '@/components/pleaseToDo';
import CustomModal from '@/components/customModal';
import LazyLoad from 'react-lazyload';
/*
查看更多&收起
*/
function exchange() {
    const { pleaseLogin, pleaseBindPhone } = pleaseToDo();
    const recRef = useRef<any>();
    let giftBox = [
        ...giftList1,
        ...giftList1,
        ...giftList1,
        ...giftList1,
        ...giftList1,
        ...giftList1,
        ...giftList1,
        ...giftList1,
        ...giftList1,
        ...giftList1,
        ...giftList1,
        ...giftList1,
    ];
    const [giftList2, setGiftOfList2] = useState(giftBox);
    const [pageNum, setPageOfNum] = useState(1);
    const [totalPage, setTotal] = useState(Math.ceil(giftBox.length / 4));

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
    const sureWay = () => {
        pleaseBindPhone(() => {
            recRef.current.initWay();
        });
    };
    const cancelWay = () => {
        recRef.current.closeWay();
    };
    const okWay = () => {
        cancelWay();
    };
    return (
        <section className={styles.exchange}>
            <HeaderUnit title='兑换'></HeaderUnit>
            <div className={styles.banner}></div>
            <TabPanel></TabPanel>
            <div className={styles.cabbage}>
                <ul>
                    {giftList2.slice(0, pageNum * 4).map((item, index) => {
                        return (
                            <li key={index}>
                                <div className={styles.cartoon}>
                                    <LazyLoad height={index * 200} offset={index * 200}>
                                        <img src={item.img_url} />
                                    </LazyLoad>
                                </div>
                                <div className={styles.bean}>{item.giftName}</div>
                                <div className={styles.spring}>{item.jackpot}元</div>
                                <div className={styles.fabulous}>
                                    <button
                                        onClick={() => {
                                            sureWay();
                                        }}
                                    >
                                        立即兑换
                                    </button>
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
            <CustomModal title='提示' onRef={recRef}>
                <div className={`${doSty.coconut} ${styles.jello}`}>
                    是否确定兑换当前礼品的彩金？兑换后将无法修改
                </div>
                <footer className={doSty.grape}>
                    <button className={doSty.potato} onClick={cancelWay}>
                        取消
                    </button>
                    <button className={doSty.potato} onClick={okWay}>
                        确定
                    </button>
                </footer>
            </CustomModal>
        </section>
    );
}

export default exchange;
