import React, { useEffect } from 'react';
import { useSetState, useRequest } from 'ahooks';
// styles
import styles from './index.module.scss';
import tab1sty from '../tab1/index.module.scss';
import { depositApplyTab2, depositInfoTab2 } from '../../services';
// import { useBindPhone } from '@/utils/hooks/useBindPhone';
// component
import TitleBox from '../titleBox';
import ActivityDescription from '../editor/activityDescription';
import Rules from '../editor/rules';
import TableUnit from '../editor/tableUnit';
import { Toast } from 'antd-mobile';

const Tab2Unit = function (props) {
    const [state, setState] = useSetState({
        activeKey: 0,
        arrList: [],
        userRecharge: 0,
        lingqu: false,
    });
    // const { handleBindPhone } = useBindPhone();
    // 接口
    const { run: depositApplyRun } = useRequest(
        (sendingData = {}) => depositApplyTab2(sendingData),
        {
            manual: true,
            onSuccess: (result: any) => {
                result = {
                    message: 'OKK',
                };
                detailWay();
                Toast.show({
                    icon: 'success',
                    content: result.message,
                });
            },
        },
    );
    const { run: depositInfoRun } = useRequest((sendingData = {}) => depositInfoTab2(sendingData), {
        manual: true,
        onSuccess: (result: any) => {
            result = {
                data: {
                    list: [
                        {
                            id: 1,
                            point: 200,
                            deposit: 100,
                            IsApplied: false,
                            IsHighLight: false,
                        },
                        {
                            id: 2,
                            point: 300,
                            deposit: 800,
                            IsApplied: false,
                            IsHighLight: false,
                        },
                        {
                            id: 3,
                            point: 400,
                            deposit: 2000,
                            IsApplied: false,
                            IsHighLight: false,
                        },
                        {
                            id: 4,
                            point: 800,
                            deposit: 5000,
                            IsApplied: false,
                            IsHighLight: false,
                        },
                        {
                            id: 5,
                            point: 1200,
                            deposit: 10000,
                            IsApplied: false,
                            IsHighLight: false,
                        },
                        {
                            id: 6,
                            point: 1600,
                            deposit: 50000,
                            IsApplied: false,
                            IsHighLight: false,
                        },
                        {
                            id: 7,
                            point: 2400,
                            deposit: 100000,
                            IsApplied: false,
                            IsHighLight: false,
                        },
                    ],
                    userRecharge: 0,
                },
                message: 'success',
                status_code: 6000,
            };
            let arrBox = JSON.parse(JSON.stringify(result.data.list || []));
            setState({
                lingqu: false,
            });
            for (let i = 0; i < arrBox.length; i++) {
                let item = arrBox[i];
                if (item.IsApplied) {
                    setState({
                        lingqu: true,
                    });
                }
            }
            setState({
                arrList: arrBox,
                userRecharge: result.data.userRecharge,
            });
        },
    });
    // 方法
    const detailWay = () => {
        depositInfoRun();
    };
    const takeWay = (index) => {
        setState({
            activeKey: index,
        });
    };
    const depositApplyWay = () => {
        // handleBindPhone(() => {
        depositApplyRun();
        // });
    };
    useEffect(() => {
        detailWay();
    }, []);
    const { activeKey, arrList, userRecharge, lingqu } = state;
    const { formatCon } = props;
    return (
        <section className={styles.Tab2Unit}>
            <div className={styles.lingquyuanbao}>
                <ul>
                    <li
                        onClick={() => {
                            takeWay(0);
                        }}
                    >
                        <img
                            src={
                                activeKey == 0
                                    ? require('./img/headline_rc_sel.png')
                                    : require('./img/headline_rc_nor.png')
                            }
                        />
                    </li>
                    <li
                        onClick={() => {
                            takeWay(1);
                        }}
                    >
                        <img
                            src={
                                activeKey == 1
                                    ? require('./img/headline_tz_sel.png')
                                    : require('./img/headline_tz_nor.png')
                            }
                        />
                    </li>
                </ul>
            </div>
            <div style={{ clear: 'both' }}></div>
            {activeKey == 0 && (
                <section>
                    <TitleBox titleImg='title_03' recordType='icon2_1'>
                        <ActivityDescription illustrate={formatCon[6]}></ActivityDescription>
                        <div className={styles.leiji}>
                            <p>单日累计有效存款/存款元宝</p>
                        </div>
                        <div className={`${tab1sty.signInBox} ${styles.signInBox2}`}>
                            <ul>
                                {arrList.map((item, index) => {
                                    return (
                                        <li
                                            key={index}
                                            className={
                                                !item.IsApplied && !item.IsHighLight
                                                    ? styles.signOpacity
                                                    : ''
                                            }
                                        >
                                            <p className={`${tab1sty.pTitle} ${styles.bijiao}`}>
                                                ≥{item.deposit}元
                                            </p>
                                            <div className={`${tab1sty.yuanbao} ${styles.yuanbao}`}>
                                                <img src={require('../tab1/img/yuanbao_big.png')} />
                                                <p
                                                    className={`${tab1sty.virtualCoin} ${styles.virtualCoin}`}
                                                >
                                                    x{item.point}
                                                </p>
                                            </div>

                                            {item.IsApplied && (
                                                <img
                                                    className={tab1sty.iconHook}
                                                    src={require('../tab1/img/icon_hook.png')}
                                                />
                                            )}
                                        </li>
                                    );
                                })}

                                <div style={{ clear: 'both' }}></div>
                            </ul>
                        </div>
                        <div className={`${styles.pageBox}`}>
                            {lingqu ? (
                                <button>
                                    <span>今日已领取</span>
                                </button>
                            ) : (
                                <button onClick={depositApplyWay}>
                                    <span>立即领取</span>
                                </button>
                            )}
                        </div>
                        {lingqu ? (
                            <p className={styles.cunkuan}>截止领取前累计存款：{userRecharge}元</p>
                        ) : (
                            <p className={styles.cunkuan}>今日累计存款：{userRecharge}元</p>
                        )}
                    </TitleBox>
                    <TitleBox titleImg='headline_02'>
                        <Rules illustrate={formatCon[7]}></Rules>
                    </TitleBox>
                </section>
            )}

            {activeKey == 1 && (
                <section>
                    <TitleBox titleImg='title_04' recordType='icon2_2'>
                        <ActivityDescription
                            illustrate={formatCon[8]}
                            isShow='3'
                        ></ActivityDescription>
                        <TableUnit illustrate={formatCon[9]}></TableUnit>
                        <div className={styles.chestnut}>
                            <ActivityDescription
                                illustrate={formatCon[10]}
                                isShow='1a'
                            ></ActivityDescription>
                        </div>
                    </TitleBox>
                    <TitleBox titleImg='headline_02'>
                        <Rules illustrate={formatCon[11]}></Rules>
                    </TitleBox>
                </section>
            )}
        </section>
    );
};

export default Tab2Unit;
