import React, { useEffect, useRef } from 'react';
import { useSetState, useRequest } from 'ahooks';
// styles
import styles from './index.module.scss';
import { adRecord, dayApplyTab2, dayInfoTab2 } from '../../../services';
// component
// import { useBindPhone } from '@/utils/hooks/useBindPhone';

const signInModal = function () {
    const [state, setState] = useSetState({
        showOther: false,
        point: 0,
        tipBox: false,
    });
    //   const { handleBindPhone } = useBindPhone();
    const bodyRef = useRef() as any;
    useEffect(() => {
        bodyRef.current = document.body;
    });
    // 接口
    const { run: recordRun } = useRequest((sendingData = {}) => adRecord(sendingData), {
        manual: true,
        onSuccess: (result: any, paramsArr: any) => {
            let point = paramsArr[1];
            if (result.data.count == 1 || result.data.count == 2) {
                setState({
                    showOther: true,
                    point: point,
                });
                bodyRef.current.style.overflow = 'hidden';
            }
        },
    });
    const { run: dayApplyRun } = useRequest((sendingData = {}) => dayApplyTab2(sendingData), {
        manual: true,
        onSuccess: () => {
            setState({
                tipBox: true,
            });

            let timeFD = null;
            timeFD = setTimeout(() => {
                bodyRef.current.style.overflow = '';
                setState({
                    tipBox: false,
                    showOther: false,
                });
                clearTimeout(timeFD);
            }, 2000);
        },
    });
    const { run: dayInfoRun } = useRequest((sendingData = {}) => dayInfoTab2(sendingData), {
        manual: true,
        onSuccess: (result: any) => {
            let signRewardList = JSON.parse(JSON.stringify(result.data.signRewardList || []));
            for (let i = 0; i < signRewardList.length; i++) {
                let item = signRewardList[i];
                if (!item.isApplied && item.isToday) {
                    countNum(item.signRewardConf.point);
                }
            }
        },
    });

    const countNum = (point) => {
        recordRun({}, point);
    };
    const signWay = () => {
        // handleBindPhone(() => {
        dayApplyRun();
        // });
    };
    const closeWay0 = (event) => {
        if (event.target === event.currentTarget) {
            bodyRef.current.style.overflow = '';
            setState({
                showOther: false,
            });
        }
    };
    const { showOther, point, tipBox } = state;
    return (
        <section className={styles.signInModal}>
            {showOther && (
                <section className={styles.rainbow} onClick={closeWay0}>
                    <main className={styles.summer}>
                        <div className={styles.gold}>
                            <img src={require('./img/yuanbao_big.png')} />
                        </div>
                        <div className={styles.swan}>
                            {tipBox ? `+${point}元宝` : '恭喜您获得签到元宝,元宝兑现金'}
                        </div>
                        <div className={styles.pageBox}>
                            {!tipBox && (
                                <button onClick={signWay}>
                                    <span>签到</span>
                                </button>
                            )}
                        </div>
                    </main>
                </section>
            )}
        </section>
    );
};

export default signInModal;
