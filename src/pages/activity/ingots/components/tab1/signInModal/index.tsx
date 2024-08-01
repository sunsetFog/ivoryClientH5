import React, { useEffect, useRef } from 'react';
import { useSetState, useRequest } from 'ahooks';
// styles
import styles from './index.module.scss';
import { adRecord, dayApplyTab1 } from '../../../services';
// component
// import { useBindPhone } from '@/utils/hooks/useBindPhone';

/*
监听路由变化，在活动里弹出窗口
*/
const signInModal = function () {
    const [state, setState] = useSetState({
        showOther: true,
        point: 0,
        tipBox: false,
    });
    //   const { handleBindPhone } = useBindPhone();
    // 接口
    const { run: recordRun } = useRequest((sendingData = {}) => adRecord(sendingData), {
        manual: true,
        onSuccess: (result: any, paramsArr: any) => {
            result = {
                data: {
                    count: 1,
                },
            };
            let point = paramsArr[1];
            if (result.data.count == 1 || result.data.count == 2) {
                setState({
                    showOther: true,
                    point: point,
                });
                document.body.style.overflow = 'hidden';
            }
        },
    });
    const { run: dayApplyRun } = useRequest((sendingData = {}) => dayApplyTab1(sendingData), {
        manual: true,
        onSuccess: () => {
            setState({
                tipBox: true,
            });

            let timeFD = null;
            timeFD = setTimeout(() => {
                document.body.style.overflow = '';
                setState({
                    tipBox: false,
                    showOther: false,
                });
                clearTimeout(timeFD);
            }, 2000);
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
            document.body.style.overflow = '';
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
