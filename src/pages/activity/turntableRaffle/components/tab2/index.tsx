import React, { useRef, useState } from 'react';
// styles
import styles from './index.module.scss';
import { LuckyWheel } from 'react-luck-draw';
import { useSetState, useRequest } from 'ahooks';
import themeStore from '@/store/mobx/themeStore';
import { gifts1, refreshing } from './constants';
import { observer } from 'mobx-react';
import { Toast } from 'antd-mobile';
import tools from '@/@energy/tools';
const { pxToRemToPx } = tools;

const tab2 = (props: any) => {
    const sortList = gifts1?.sort((a, b) => {
        return a.money - b.money;
    });
    let arrBox = [];
    for (let i = 0; i < sortList.length; i++) {
        let item = sortList[i];
        arrBox.push({
            fonts: [
                {
                    id: item.id,
                    text: item.name?.replace('彩金', '')?.trim(),
                    fontSize: pxToRemToPx(16) + 'px',
                },
            ],
        });
    }
    console.log('arrBox', arrBox);
    const keyWay = (num: any = 0) => {
        if (num == 6 || num == 7 || num == 8 || num == 9) {
            return num;
        } else {
            return 6;
        }
    };
    const myWheel = useRef<any>(null);
    // 正在抽奖不能点
    const lotterying = useRef(false) as any;
    const [state, _setState] = useSetState({
        buttons1: [
            {
                imgs: [
                    {
                        src:
                            themeStore.data.theme_value == 'light'
                                ? require(`./img/button.png`)
                                : require(`./img/button_night.png`),
                        width: pxToRemToPx(128),
                        height: pxToRemToPx(128),
                        top: pxToRemToPx(-65),
                    },
                ],
            },
        ],
        defaultConfig: {
            gutter: 0,
            stopRange: 0,
            offsetDegree: 0,
            decelerationTime: 1500,
        },
        defaultStyle: {
            background: 'rgba(255, 255, 255, 0)',
        },
        prizes: arrBox,
        blocks: [
            {
                padding: '12px',
                background: 'rgba(255, 255, 255, 0)',
                imgs: [
                    {
                        src:
                            themeStore.data.theme_value == 'light'
                                ? refreshing[keyWay(arrBox.length)].light
                                : refreshing[keyWay(arrBox.length)].night,
                        width: '100%',
                        height: '100%',
                        rotate: true,
                    },
                ],
            },
        ],
    });
    const endWay = () => {
        Toast.show({
            icon: 'success',
            content: '恭喜抽中彩金500元',
        });
        lotterying.current = false;
    };
    const playWay = () => {
        /*
        接口返回
            res = {
                id: 500,
                message: '恭喜抽中彩金500元'
            }
         */
        if (lotterying.current) {
            return;
        }
        console.log('playWay');
        lotterying.current = true;
        myWheel.current.play();
        setTimeout(() => {
            const index = arrBox.findIndex((item) => item?.fonts[0]?.id === 500);
            myWheel.current.stop(index);
        }, 2500);
    };
    const recordWay = () => {
        const swan_html = document.documentElement || document.body;
        if (swan_html.getAttribute('data-theme') == 'light') {
            themeStore.setTheme('night');
        } else {
            themeStore.setTheme('light');
        }
    };
    return (
        <section className={styles.tab2}>
            <div className={styles.cauliflower}>
                <main className={styles.petal1}>
                    <LuckyWheel
                        width={pxToRemToPx(320)}
                        height={pxToRemToPx(320)}
                        ref={myWheel}
                        prizes={state.prizes}
                        buttons={state.buttons1}
                        blocks={state.blocks}
                        defaultConfig={state.defaultConfig}
                        defaultStyle={state.defaultStyle}
                        onEnd={endWay}
                    ></LuckyWheel>
                    <button className={styles.toGo} onClick={playWay}></button>
                </main>
            </div>
            <div className={styles.papaya}>
                <button onClick={playWay}>开启签到转盘</button>
            </div>
            <div className={styles.scenery}>
                <div
                    onClick={() => {
                        recordWay();
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
        </section>
    );
};
export default observer(tab2);
