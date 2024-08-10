import React, { useRef, useState } from 'react';
// styles
import styles from './index.module.scss';
import themeStore from '@/store/mobx/themeStore';
import { gifts1 } from '@/pages/activity/turntableRaffle/components/tab2/constants';
import { Toast } from 'antd-mobile';
import { observer } from 'mobx-react';

const tab2 = (props: any) => {
    let gifts2 = [];
    let arrBox = [];
    for (let i = 0; i < gifts1.length; i++) {
        let item = gifts1[i];
        arrBox.push(item);

        if (arrBox.length == 4 || gifts1.length == i + 1) {
            gifts2.push(arrBox);
            arrBox = [];
        }
    }
    const [showMsg, setShowMsg] = useState(false);
    // 正在开宝箱不能点
    const lotterying = useRef(false) as any;
    const playWay = () => {
        if (lotterying.current) {
            return;
        }
        lotterying.current = true;
        setShowMsg(true);
        setTimeout(() => {
            Toast.show({
                icon: 'success',
                content: '恭喜抽中彩金500元',
            });
        }, 3200);
        setTimeout(() => {
            setShowMsg(false);
            lotterying.current = false;
        }, 6200);
    };
    return (
        <section className={styles.tab2}>
            <div className={styles.jupiter}>
                {showMsg && themeStore.data.theme_value == 'light' ? (
                    <img src={require('./img/box_open.png?original')} />
                ) : null}
                {!showMsg && themeStore.data.theme_value == 'light' ? (
                    <img src={require('./img/box.png')} />
                ) : null}
                {showMsg && themeStore.data.theme_value == 'night' ? (
                    <img src={require('./img/box_open_night.png?original')} />
                ) : null}
                {!showMsg && themeStore.data.theme_value == 'night' ? (
                    <img src={require('./img/box_night.png')} />
                ) : null}
            </div>
            <div className={styles.papaya}>
                <button onClick={playWay}>开启签到宝箱</button>
            </div>
            <div className={styles.scenery}>
                <div
                    onClick={() => {
                        // recordWay('签到');
                    }}
                >
                    查看抽奖记录
                    {themeStore.data.theme_value == 'light' ? (
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='14'
                            height='14'
                            viewBox='0 0 14 14'
                            fill='none'
                        >
                            <g clipPath='url(#clip0_553_36702)'>
                                <path
                                    d='M4.5 2L9.5 7L4.5 12'
                                    stroke='#356280'
                                    strokeWidth='1.5'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
                            </g>
                            <defs>
                                <clipPath id='clip0_553_36702'>
                                    <rect width='14' height='14' fill='white' />
                                </clipPath>
                            </defs>
                        </svg>
                    ) : (
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='14'
                            height='14'
                            viewBox='0 0 14 14'
                            fill='none'
                        >
                            <g clipPath='url(#clip0_553_36999)'>
                                <path
                                    d='M4.5 2L9.5 7L4.5 12'
                                    stroke='white'
                                    strokeWidth='1.5'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
                            </g>
                            <defs>
                                <clipPath id='clip0_553_36999'>
                                    <rect width='14' height='14' fill='white' />
                                </clipPath>
                            </defs>
                        </svg>
                    )}
                </div>
            </div>
            <div className={styles.cosplay}>
                <div className={styles.rainbow}>
                    <span className={styles.sp1}>
                        今日累计获得彩金
                        <span>1</span>元
                    </span>
                </div>
                <div className={styles.rainbow}>
                    <span className={styles.sp1}>
                        今日可抽奖次数
                        <span>1</span>次
                    </span>
                    <span className={styles.sp1}>
                        累计抽奖次数
                        <span>1</span>次
                    </span>
                </div>
                <div className={styles.saturn}>
                    {gifts2.map((item, index1) => {
                        return (
                            <ul key={index1}>
                                <li>宝箱奖励</li>
                                {item.map((row, index2) => {
                                    return (
                                        <li
                                            key={index2}
                                            style={
                                                item.length < 4 && index1 == 0 ? { flex: 1 } : {}
                                            }
                                        >
                                            {row.name.replace('彩金', '').trim()}
                                        </li>
                                    );
                                })}
                                <div style={{ clear: 'both' }}></div>
                            </ul>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default observer(tab2);
