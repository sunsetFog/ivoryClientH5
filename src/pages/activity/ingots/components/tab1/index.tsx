import React, { useEffect, useImperativeHandle, useRef } from 'react';
import { useSetState, useRequest } from 'ahooks';
// styles
import styles from './index.module.scss';
import { dayApplyTab1, dayInfoTab1, timeApplyTab1 } from '../../services';
import { Toast } from 'antd-mobile';
// component
import ActivityDescription from '../editor/activityDescription';
import Rules from '../editor/rules';
import TitleBox from '../titleBox';
import { formatTime2 } from '../../utils';
// import { useBindPhone } from '@/@energy/ivoryDesign/@utils/hooks/useBindPhone';
import SignInModal from './signInModal';
const Tab1Unit = function (props) {
    const [state, setState] = useSetState({
        signRewardList: [],
        signTimeRewardConfList: [],
        isOk: false,
    });
    const countdown = useRef(null);
    // const { handleBindPhone } = useBindPhone();
    //用useImperativeHandle暴露一些外部ref能访问的属性
    useImperativeHandle(props.onRef, () => {
        return {
            rewardInfo: rewardInfo,
        };
    });
    // 接口
    const { run: dayApplyRun } = useRequest((sendingData = {}) => dayApplyTab1(sendingData), {
        manual: true,
        onSuccess: (result: any) => {
            result = {
                message: 'OKK',
            };
            rewardInfo(true);
            Toast.show({
                icon: 'success',
                content: result.message,
            });
        },
    });
    const { run: dayInfoRun } = useRequest((sendingData = {}) => dayInfoTab1(sendingData), {
        manual: true,
        onSuccess: (result: any, paramsArr: any) => {
            result = {
                data: {
                    signRewardList: [
                        {
                            signRewardConf: {
                                id: 1,
                                point: 100,
                                extraPoint: 0,
                                sumDay: 1,
                            },
                            isApplied: false,
                            isToday: true,
                        },
                        {
                            signRewardConf: {
                                id: 2,
                                point: 100,
                                extraPoint: 0,
                                sumDay: 2,
                            },
                            isApplied: false,
                            isToday: false,
                        },
                        {
                            signRewardConf: {
                                id: 3,
                                point: 200,
                                extraPoint: 100,
                                sumDay: 3,
                            },
                            isApplied: false,
                            isToday: false,
                        },
                        {
                            signRewardConf: {
                                id: 4,
                                point: 200,
                                extraPoint: 0,
                                sumDay: 4,
                            },
                            isApplied: false,
                            isToday: false,
                        },
                        {
                            signRewardConf: {
                                id: 5,
                                point: 300,
                                extraPoint: 0,
                                sumDay: 5,
                            },
                            isApplied: false,
                            isToday: false,
                        },
                        {
                            signRewardConf: {
                                id: 6,
                                point: 400,
                                extraPoint: 0,
                                sumDay: 6,
                            },
                            isApplied: false,
                            isToday: false,
                        },
                        {
                            signRewardConf: {
                                id: 7,
                                point: 500,
                                extraPoint: 200,
                                sumDay: 7,
                            },
                            isApplied: false,
                            isToday: false,
                        },
                    ],
                    signTimeRewardConfList: [
                        {
                            signTimeRewardConf: {
                                id: 1,
                                point: 10,
                                time: 1,
                            },
                            isApplied: false,
                            countTime: 60,
                            highLight: false,
                        },
                        {
                            signTimeRewardConf: {
                                id: 2,
                                point: 20,
                                time: 5,
                            },
                            isApplied: false,
                            countTime: 300,
                            highLight: false,
                        },
                        {
                            signTimeRewardConf: {
                                id: 3,
                                point: 30,
                                time: 10,
                            },
                            isApplied: false,
                            countTime: 600,
                            highLight: false,
                        },
                        {
                            signTimeRewardConf: {
                                id: 4,
                                point: 40,
                                time: 30,
                            },
                            isApplied: false,
                            countTime: 1800,
                            highLight: false,
                        },
                        {
                            signTimeRewardConf: {
                                id: 5,
                                point: 50,
                                time: 60,
                            },
                            isApplied: false,
                            countTime: 3600,
                            highLight: false,
                        },
                        {
                            signTimeRewardConf: {
                                id: 6,
                                point: 60,
                                time: 300,
                            },
                            isApplied: false,
                            countTime: 18000,
                            highLight: false,
                        },
                    ],
                    count: 3,
                },
                message: 'success',
                status_code: 6000,
            };
            let value = paramsArr[1];
            let signRewardList = JSON.parse(JSON.stringify(result.data.signRewardList || []));
            let signTimeRewardConfList = JSON.parse(
                JSON.stringify(result.data.signTimeRewardConfList || []),
            );
            for (let i = 0; i < signRewardList.length; i++) {
                let item = signRewardList[i];
                if (i == 0) {
                    item.pTitle = '第一天';
                    item.imgName = 'yuanbao_01';
                } else if (i == 1) {
                    item.pTitle = '第二天';
                    item.imgName = 'yuanbao_01';
                } else if (i == 2) {
                    item.pTitle = '第三天';
                    item.imgName = 'yuanbao_02';
                } else if (i == 3) {
                    item.pTitle = '第四天';
                    item.imgName = 'yuanbao_02';
                } else if (i == 4) {
                    item.pTitle = '第五天';
                    item.imgName = 'yuanbao_03';
                } else if (i == 5) {
                    item.pTitle = '第六天';
                    item.imgName = 'yuanbao_04';
                } else if (i == 6) {
                    item.pTitle = '第七天';
                    item.imgName = 'yuanbao_05';
                }
                if (value) {
                    item.play = true;
                } else {
                    item.play = false;
                }
                if (item.isToday && item.isApplied) {
                    setState({
                        isOk: true,
                    });
                }
                item.fontSelected = '额外元宝100';
            }

            for (let i = 0; i < signTimeRewardConfList.length; i++) {
                let item = signTimeRewardConfList[i];
                if (item.countTime == 0) {
                    item.timeTxt = '00:00:00';
                } else {
                    item.timeTxt = formatTime2(item.countTime);
                }
            }
            stopTime();
            dingshiqi(signTimeRewardConfList);

            setState({
                signRewardList: signRewardList,
                signTimeRewardConfList: signTimeRewardConfList,
            });
        },
    });
    const { run: timeApplyRun } = useRequest((sendingData = {}) => timeApplyTab1(sendingData), {
        manual: true,
        onSuccess: (result: any) => {
            result = {
                message: 'OKK',
            };
            Toast.show({
                icon: 'success',
                content: result.message,
            });
            rewardInfo();
        },
    });
    // 方法
    const rewardInfo = (value = false) => {
        dayInfoRun({}, value);
    };
    const stopTime = () => {
        if (countdown.current) {
            clearInterval(countdown.current);
        }
    };
    const dingshiqi = (signTimeRewardConfList) => {
        let arrBox = JSON.parse(JSON.stringify(signTimeRewardConfList));
        countdown.current = setInterval(() => {
            for (let i = 0; i < arrBox.length; i++) {
                let item = arrBox[i];
                if (item.countTime != 0 && item.highLight) {
                    item.countTime = item.countTime - 1;
                }
                item.timeTxt = formatTime2(item.countTime);
            }
            setState({
                signTimeRewardConfList: JSON.parse(JSON.stringify(arrBox)),
            });
        }, 1000);
    };
    const dayApplyWay = (value = false) => {
        if (value) {
            Toast.show({
                icon: 'success',
                content: '今日元宝已领取，请明日再来',
            });
            return;
        }
        // handleBindPhone(() => {
        dayApplyRun();
        // });
    };
    const timeApplyWay = (item) => {
        if (item.isApplied) {
            Toast.show({
                icon: 'success',
                content: '当前元宝已领取，不可重复领取',
            });
        } else if (!item.isApplied && item.highLight && item.countTime != 0) {
            Toast.show({
                icon: 'success',
                content: '请等待倒计时结束时领取，谢谢',
            });
        } else if (!item.isApplied && !item.highLight) {
            Toast.show({
                icon: 'success',
                content: '当前元宝不符合倒计时条件，不可领取',
            });
        }
        if (
            item.isApplied ||
            (!item.isApplied && !item.highLight) ||
            (!item.isApplied && item.highLight && item.countTime != 0)
        ) {
            return;
        }
        // handleBindPhone(() => {
        timeApplyRun({ id: item.signTimeRewardConf.id });
        // });
    };
    useEffect(() => {
        rewardInfo();
        return () => {
            stopTime();
        };
    }, []);
    const { signRewardList, signTimeRewardConfList, isOk } = state;
    const { formatCon } = props;
    return (
        <section className={styles.Tab1Unit}>
            <TitleBox titleImg='title_02' recordType='icon1_1'>
                <ActivityDescription illustrate={formatCon[3]}></ActivityDescription>
                <div className={styles.signInBox}>
                    <ul>
                        {signRewardList.map((item, index) => {
                            return (
                                <li
                                    className={
                                        !item.isApplied && !item.isToday ? styles.signOpacity : ''
                                    }
                                    key={index}
                                >
                                    <p className={styles.pTitle}>{item.pTitle}</p>
                                    <div className={styles.yuanbao}>
                                        <img
                                            src={require(`./img/${
                                                item.imgName ? item.imgName : 'yuanbao_01'
                                            }.png`)}
                                        />
                                        {index == 0 || index == 1 ? (
                                            <p className={`${styles.virtualCoin}`}>
                                                x{item.signRewardConf.point}
                                            </p>
                                        ) : (
                                            <p className={`${styles.virtualCoin} ${styles.youhua}`}>
                                                x{item.signRewardConf.point}
                                            </p>
                                        )}
                                    </div>
                                    {item.isApplied && (
                                        <img
                                            className={styles.iconHook}
                                            src={require('./img/icon_hook.png')}
                                        />
                                    )}
                                    {item.signRewardConf.extraPoint != 0 && (
                                        <>
                                            <img
                                                className={styles.iconSelected}
                                                src={require('./img/icon_selected.png')}
                                            />
                                            <span className={styles.fontSelected}>
                                                额外元宝{item.signRewardConf.extraPoint}
                                                {item.isApplied && item.isToday && item.play && (
                                                    <span className={styles.jiayi}>+1</span>
                                                )}
                                            </span>
                                        </>
                                    )}
                                </li>
                            );
                        })}
                        <div style={{ clear: 'both' }}></div>
                    </ul>
                </div>
                <div className={`${styles.pageBox}`}>
                    {isOk ? (
                        <button
                            onClick={() => {
                                dayApplyWay(true);
                            }}
                        >
                            <span>今日已领取</span>
                        </button>
                    ) : (
                        <button
                            onClick={() => {
                                dayApplyWay(false);
                            }}
                        >
                            <span>签到领取</span>
                        </button>
                    )}
                </div>
            </TitleBox>
            <TitleBox titleImg='headline_03' recordType='icon1_2'>
                <ActivityDescription illustrate={formatCon[4]} isShow='3'></ActivityDescription>
                <div className={styles.pageBox}>
                    <button className={styles.titleTime}></button>
                </div>
                <div className={styles.timeBox}>
                    <ul>
                        {signTimeRewardConfList.map((item, index) => {
                            return (
                                <li
                                    className={
                                        !item.isApplied && !item.highLight ? styles.signOpacity : ''
                                    }
                                    key={index}
                                >
                                    <img src={require('./img/yuanbao_big.png')} />
                                    <div className={styles.daojishi}>{item.timeTxt}</div>
                                    <div className={styles.pageBox} style={{ margin: 0 }}>
                                        <button
                                            className={styles.lingqu}
                                            onClick={() => {
                                                timeApplyWay(item);
                                            }}
                                        >
                                            {item.isApplied ? (
                                                <span>已领取</span>
                                            ) : item.countTime == 0 ? (
                                                <span>领取</span>
                                            ) : item.highLight ? (
                                                <span>倒计时中</span>
                                            ) : (
                                                <span>领取</span>
                                            )}
                                        </button>
                                    </div>
                                    <p className={styles.virtualCoin}>
                                        x{item.signTimeRewardConf.point}
                                    </p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </TitleBox>
            <TitleBox titleImg='headline_02'>
                <Rules illustrate={formatCon[5]}></Rules>
            </TitleBox>
            <SignInModal></SignInModal>
        </section>
    );
};

export default Tab1Unit;
