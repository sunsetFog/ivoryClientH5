import React, { useEffect, useRef } from 'react';
import { useSetState, useRequest } from 'ahooks';
// styles
import styles from './index.module.scss';
import tab1sty from '../tab1/index.module.scss';
import tab2sty from '../tab2/index.module.scss';
import { callConfigTab4, inviteactivityTab4, newCallTab4, oldReturnTab4 } from '../../services';
// component
import { CopyToClipboard } from 'react-copy-to-clipboard';
import ActivityDescription from '../editor/activityDescription';
import Rules from '../editor/rules';
import TitleBox from '../titleBox';
import { Toast } from 'antd-mobile';
// import { useBindPhone } from '@/utils/hooks/useBindPhone';

const Tab3Unit = function (props) {
    const [state, setState] = useSetState({
        newList: [],
        oldList: [],
        inviteObj: {} as any,
    });
    const disposable = useRef(true);
    // const { handleBindPhone } = useBindPhone();
    // 接口
    const { run: callConfigRun } = useRequest((sendingData = {}) => callConfigTab4(sendingData), {
        manual: true,
        onSuccess: (result: any, paramsArr: any) => {
            if (disposable.current) {
                disposable.current = false;
                oldWay();
            }
            if (paramsArr[0].recordType == 5) {
                let newList = JSON.parse(JSON.stringify(result.data.list || []));
                for (let i = 0; i < newList.length; i++) {
                    let item = newList[i];
                    if (i == 0) {
                        item.pTitle = '第一天';
                        item.imgName = 'yuanbao_200';
                    } else if (i == 1) {
                        item.pTitle = '第二天';
                        item.imgName = 'yuanbao_300';
                    } else if (i == 2) {
                        item.pTitle = '第三天';
                        item.imgName = 'yuanbao_400';
                    } else if (i == 3) {
                        item.pTitle = '第四天';
                        item.imgName = 'yuanbao_600';
                    } else if (i == 4) {
                        item.pTitle = '第五天';
                        item.imgName = 'yuanbao_800';
                    } else if (i == 5) {
                        item.pTitle = '第六天';
                        item.imgName = 'yuanbao_900';
                    } else if (i == 6) {
                        item.pTitle = '第七天';
                        item.imgName = 'yuanbao_1200';
                    }
                }
                setState({
                    newList: newList,
                });
            } else if (paramsArr[0].recordType == 7) {
                let newList = JSON.parse(JSON.stringify(result.data.list || []));
                for (let i = 0; i < newList.length; i++) {
                    let item = newList[i];
                    if (i == 0) {
                        item.pTitle = '第一天';
                        item.imgName = 'yuanbao_200';
                    } else if (i == 1) {
                        item.pTitle = '第二天';
                        item.imgName = 'yuanbao_300';
                    } else if (i == 2) {
                        item.pTitle = '第三天';
                        item.imgName = 'yuanbao_400';
                    } else if (i == 3) {
                        item.pTitle = '第四天';
                        item.imgName = 'yuanbao_600';
                    } else if (i == 4) {
                        item.pTitle = '第五天';
                        item.imgName = 'yuanbao_800';
                    } else if (i == 5) {
                        item.pTitle = '第六天';
                        item.imgName = 'yuanbao_900';
                    } else if (i == 6) {
                        item.pTitle = '第七天';
                        item.imgName = 'yuanbao_1200';
                    }
                }
                setState({
                    oldList: newList,
                });
            }
        },
    });
    const { run: inviteactivityRun } = useRequest(
        (sendingData = {}) => inviteactivityTab4(sendingData),
        {
            manual: true,
            onSuccess: (result: any) => {
                setState({
                    inviteObj: result.data || {},
                });
            },
        },
    );
    const { run: newCallRun } = useRequest((sendingData = {}) => newCallTab4(sendingData), {
        manual: true,
        onSuccess: (result: any) => {
            newWay();
            Toast.show({
                icon: 'success',
                content: result.data,
            });
        },
    });
    const { run: oldReturnRun } = useRequest((sendingData = {}) => oldReturnTab4(sendingData), {
        manual: true,
        onSuccess: (result: any) => {
            oldWay();
            Toast.show({
                icon: 'success',
                content: result.data,
            });
        },
    });
    // 方法
    const newWay = () => {
        callConfigRun({ recordType: 5 });
    };
    const oldWay = () => {
        callConfigRun({ recordType: 7 });
    };
    const xinWay = (item) => {
        if (item.isApplied == 1 || item.isToday == 0) {
            return;
        }
        // handleBindPhone(() => {
        newCallRun({ id: item.id, recordType: 5 });
        // });
    };
    const oldTake = (item) => {
        if (item.isApplied == 1 || item.isToday == 0) {
            return;
        }
        // handleBindPhone(() => {
        oldReturnRun({ id: item.id, recordType: 7 });
        // });
    };
    useEffect(() => {
        newWay();
        inviteactivityRun();
    }, []);
    const { newList, oldList, inviteObj } = state;
    const { formatCon } = props;
    return (
        <section className={styles.Tab3Unit}>
            <TitleBox titleImg='title_05' recordType='tab04_1'>
                <ActivityDescription illustrate={formatCon[12]}></ActivityDescription>
                <div className={styles.pageBox} style={{ marginTop: '9.984px' }}>
                    <button className={styles.titleCheck}></button>
                </div>
                <div className={tab2sty.leiji}>
                    <p>被邀请人/邀请人同时获得元宝</p>
                </div>
                <div className={`${tab1sty.signInBox} ${styles.signInBox2}`}>
                    <ul>
                        {newList.map((item, index) => {
                            return (
                                <li
                                    className={
                                        !item.isApplied && !item.isToday && tab1sty.signOpacity
                                    }
                                    key={index}
                                >
                                    <p className={`${tab1sty.pTitle} ${styles.pTitle}`}>
                                        {item.pTitle}
                                    </p>
                                    <img
                                        className={styles.imgName}
                                        src={require(`./img/${item.imgName}.png`)}
                                    />
                                    <div>
                                        <button
                                            className={styles.tab4btn}
                                            onClick={() => {
                                                xinWay(item);
                                            }}
                                        >
                                            {item.isApplied == 1 ? (
                                                <span>已领取</span>
                                            ) : (
                                                <span>领取</span>
                                            )}
                                        </button>
                                    </div>
                                    <p className={`${tab1sty.virtualCoin} ${styles.virtualCoin}`}>
                                        x{item.point}
                                    </p>
                                    {item.isApplied == 1 && (
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
            </TitleBox>
            <TitleBox titleImg='headline_04'>
                <label className={styles.invitationTitle}>手机端链接</label>
                <div className={styles.butterfly}>
                    <input className={styles.inpYr} disabled value={inviteObj.h5_domain || ''} />
                    <CopyToClipboard
                        text={inviteObj.h5_domain}
                        onCopy={(_text, result) => {
                            if (result) {
                                Toast.show({
                                    icon: 'success',
                                    content: '复制成功!',
                                });
                            }
                        }}
                    >
                        <button className={styles.tab4btn}>
                            <span>复制</span>
                        </button>
                    </CopyToClipboard>
                </div>
                <label className={styles.invitationTitle}>WEB端链接</label>
                <div className={styles.butterfly}>
                    <input className={styles.inpYr} disabled value={inviteObj.site_domain || ''} />
                    <CopyToClipboard
                        text={inviteObj.site_domain}
                        onCopy={(_text, result) => {
                            if (result) {
                                Toast.show({
                                    icon: 'success',
                                    content: '复制成功!',
                                });
                            }
                        }}
                    >
                        <button className={styles.tab4btn}>
                            <span>复制</span>
                        </button>
                    </CopyToClipboard>
                </div>
            </TitleBox>
            <TitleBox titleImg='headline_05' recordType='tab04_2'>
                <ActivityDescription illustrate={formatCon[13]} isShow='3'></ActivityDescription>
                <div className={styles.pageBox} style={{ marginTop: '9.984px' }}>
                    <button className={styles.titleDate}></button>
                </div>
                <div className={tab2sty.leiji}>
                    <p>回归元宝</p>
                </div>
                <div className={`${tab1sty.signInBox} ${styles.signInBox2}`}>
                    <ul>
                        {oldList.map((item, index) => {
                            return (
                                <li
                                    className={
                                        !item.isApplied && !item.isToday && tab1sty.signOpacity
                                    }
                                    key={index}
                                >
                                    <p className={`${tab1sty.pTitle} ${styles.pTitle}`}>
                                        {item.pTitle}
                                    </p>
                                    <img
                                        className={styles.imgName}
                                        src={require(`./img/${item.imgName}.png`)}
                                    />
                                    <div>
                                        <button
                                            className={styles.tab4btn}
                                            onClick={() => {
                                                oldTake(item);
                                            }}
                                        >
                                            {item.isApplied == 1 ? (
                                                <span>已领取</span>
                                            ) : (
                                                <span>领取</span>
                                            )}
                                        </button>
                                    </div>
                                    <p className={`${tab1sty.virtualCoin} ${styles.virtualCoin}`}>
                                        x{item.point}
                                    </p>
                                    {item.isApplied == 1 && (
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
            </TitleBox>
            <TitleBox titleImg='headline_02'>
                <Rules illustrate={formatCon[14]}></Rules>
            </TitleBox>
        </section>
    );
};

export default Tab3Unit;
