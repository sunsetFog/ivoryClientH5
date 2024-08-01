import React, { useEffect, useRef } from 'react';
import { useSetState, useRequest } from 'ahooks';
// styles
import styles from './index.module.scss';
import { giftExchangeTab4, giftListTab4, pointStatisticsTab4 } from '../../services';

// import { useBindPhone } from '@/utils/hooks/useBindPhone';
import { Toast } from 'antd-mobile';
// component
import ActivityDescription from '../editor/activityDescription';
import Rules from '../editor/rules';
import TitleBox from '../titleBox';

const Tab4Unit = function (props) {
    const [state, setState] = useSetState({
        goodsList: [],
        pageNum: 1,
        totalPage: 0,
        newList: [],
        pageCount: 1,
        allPage: 0,
        amountObj: {
            totalAmount: 0,
            totalPoint: 0,
        },
    });
    const disposable = useRef(true);
    // const { handleBindPhone } = useBindPhone();
    // 接口
    const { run: exchangeRun } = useRequest((sendingData = {}) => giftExchangeTab4(sendingData), {
        manual: true,
        onSuccess: (result: any) => {
            pointStatisticsWay();
            Toast.show({
                icon: 'success',
                content: result.data.message,
            });
        },
    });
    const { run: giftListRun } = useRequest((sendingData = {}) => giftListTab4(sendingData), {
        manual: true,
        onSuccess: (result: any, paramsArr: any) => {
            result = {
                data: {
                    list: [
                        {
                            id: 60008,
                            giftName: 'Redmi 13C 5G',
                            giftAmount: 3000,
                            point: 10,
                            isPre: 1,
                            h5Img: require('./img/goods/mi1.png'),
                            isNew: 0,
                        },
                        {
                            id: 60009,
                            giftName: 'Redmi 13C',
                            giftAmount: 3200,
                            point: 10,
                            isPre: 1,
                            h5Img: require('./img/goods/mi2.png'),
                            isNew: 0,
                        },
                        {
                            id: 60010,
                            giftName: 'Xiaomi 14',
                            giftAmount: 5999,
                            point: 10,
                            isPre: 1,
                            h5Img: require('./img/goods/mi3.png'),
                            isNew: 0,
                        },
                        {
                            id: 60011,
                            giftName: 'Xiaomi 14 Ultra',
                            giftAmount: 8999,
                            point: 10,
                            isPre: 1,
                            h5Img: require('./img/goods/mi4.png'),
                            isNew: 0,
                        },
                    ],
                    totalPage: 2,
                },
                message: 'success',
                status_code: 6000,
            };
            if (disposable.current) {
                disposable.current = false;
                newsWay();
            }
            if (paramsArr[0].isPre == 2) {
                let pageNum = paramsArr[1];
                setState({
                    goodsList: result.data.list || [],
                    totalPage: result.data.totalPage,
                });
                if (result.data.totalPage >= pageNum) {
                    setState({
                        pageNum: pageNum,
                    });
                }
            } else if (paramsArr[0].isPre == 1) {
                let pageCount = paramsArr[1];
                setState({
                    newList: result.data.list || [],
                    allPage: result.data.totalPage,
                });
                if (result.data.totalPage >= pageCount) {
                    setState({
                        pageCount: pageCount,
                    });
                }
            }
        },
    });
    const { run: pointStatisticsRun } = useRequest(
        (sendingData = {}) => pointStatisticsTab4(sendingData),
        {
            manual: true,
            onSuccess: (result: any) => {
                result = {
                    data: {
                        totalAmount: 1000,
                        totalPoint: 200,
                    },
                };
                setState({
                    amountObj: result.data || {
                        totalAmount: 0,
                        totalPoint: 0,
                    },
                });
            },
        },
    );
    // 方法
    const detailsWay = (pageNum = 1) => {
        giftListRun({ isPre: 2, page: pageNum, pageSize: 8 }, pageNum);
    };
    const newsWay = (pageCount = 1) => {
        giftListRun({ isPre: 1, page: pageCount, pageSize: 4 }, pageCount);
    };
    const pointStatisticsWay = () => {
        pointStatisticsRun();
    };
    const giftExchangeWay = (id) => {
        // handleBindPhone(() => {
        exchangeRun({ giftId: id });
        // });
    };
    const previousPage = () => {
        const { pageNum } = state;
        if (pageNum > 1) {
            let countPage = pageNum;
            countPage = --countPage;
            detailsWay(countPage);
        }
    };
    const nextPage = () => {
        const { pageNum, totalPage } = state;
        if (totalPage > pageNum) {
            let countPage = pageNum;
            countPage = ++countPage;
            detailsWay(countPage);
        }
    };
    const changeBatch = () => {
        const { pageCount, allPage } = state;
        if (allPage > pageCount) {
            let countPage = pageCount;
            countPage = ++countPage;
            newsWay(countPage);
        } else if (allPage == pageCount) {
            newsWay(1);
        }
    };
    useEffect(() => {
        detailsWay();
        pointStatisticsWay();
    }, []);

    const { goodsList, pageNum, totalPage, newList, amountObj, allPage } = state;
    const { formatCon } = props;
    return (
        <section className={styles.Tab4Unit}>
            <TitleBox titleImg='title_01' titleTime={formatCon[0]} recordType='tab01'>
                <ActivityDescription illustrate={formatCon[1]} isShow='1'></ActivityDescription>
            </TitleBox>
            <div className={styles.amountBox}>
                <img src={require('./img/title_com01.png')} />
                <img src={require('./img/title_com02.png')} />
                <div className={styles.yuanbao}>{amountObj.totalPoint}个</div>
                <div className={styles.caijin}>{amountObj.totalAmount}元</div>
            </div>
            <div className={styles.exchange}>
                <ul className={goodsList.length == 1 && styles.centerBT}>
                    {goodsList.map((item, index) => {
                        return (
                            <li key={index}>
                                {item.isNew == 1 && (
                                    <img
                                        className={styles.tpNew}
                                        src={require('./img/tp_new.png')}
                                    ></img>
                                )}
                                <p className={styles.title}>{item.giftName}</p>
                                <p className={styles.money}>
                                    <span>{item.giftAmount}</span>元
                                </p>
                                <div className={styles.h5Img}>
                                    <img src={item.h5Img}></img>
                                </div>

                                <p className={`${styles.moneyYT} ${styles.virtualCoin}`}>
                                    x{item.point}
                                </p>

                                <button
                                    className={styles.duihuan}
                                    onClick={() => {
                                        giftExchangeWay(item.id);
                                    }}
                                ></button>
                            </li>
                        );
                    })}
                    <div style={{ clear: 'both' }}></div>
                </ul>
            </div>
            {!(totalPage == 0 || totalPage == 1) && (
                <div className={`${styles.pageBox}`}>
                    <button onClick={previousPage} className={pageNum == 1 && styles.signOpacity}>
                        <span>上一页</span>
                    </button>
                    <button
                        onClick={nextPage}
                        className={pageNum == totalPage && styles.signOpacity}
                    >
                        <span>下一页</span>
                    </button>
                </div>
            )}
            {newList.length != 0 && (
                <div className={styles.giftBox}>
                    <img src={require('../titleBox/img/headline_01.png')} />
                </div>
            )}
            <div className={`${styles.exchange} ${styles.newGift}`}>
                <ul className={newList.length == 1 && styles.centerBT}>
                    {newList.map((item, index) => {
                        return (
                            <li key={index}>
                                {item.isNew == 1 && (
                                    <img
                                        className={styles.tpNew}
                                        src={require('./img/tp_new.png')}
                                    ></img>
                                )}
                                <p className={styles.title}>{item.giftName}</p>
                                <p className={styles.money}>
                                    <span>{item.giftAmount}</span>元
                                </p>
                                <div className={styles.h5Img}>
                                    <img src={item.h5Img}></img>
                                </div>
                                <p className={`${styles.moneyYT} ${styles.virtualCoin}`}>
                                    x{item.point}
                                </p>
                            </li>
                        );
                    })}
                    <div style={{ clear: 'both' }}></div>
                </ul>
            </div>
            {!(allPage == 0 || allPage == 1) && (
                <div className={`${styles.pageBox}`}>
                    <button onClick={changeBatch}>
                        <span>换一换</span>
                    </button>
                </div>
            )}
            <TitleBox titleImg='headline_02'>
                <Rules illustrate={formatCon[2]}></Rules>
            </TitleBox>
        </section>
    );
};

export default Tab4Unit;
