import React, { useState, useRef, useImperativeHandle } from 'react';
import styles from './index.module.scss';
import doSty from '@/components/pleaseToDo/index.module.scss';

import { Popup, DatePickerView, Toast } from 'antd-mobile';
import { timeList } from './constants';
import dayjs from 'dayjs';
const formatText = 'YYYY-MM-DD';
import { getRecordDatePickerRange } from '@/components/date/timeModal/utils';

interface PropsApi {
    onRef: any; // ref
    show?: boolean; // 展示
    time2Sure?: (obj: any) => any;
}
function timePopup({ onRef, show, time2Sure }: PropsApi) {
    useImperativeHandle(onRef, () => {
        return {
            initWay: initWay,
        };
    });
    const { minDate, maxDate } = getRecordDatePickerRange(3);
    const [isVisible, setIsOfVisible] = useState(show || false);
    const [spinachActive, setSpinachOfActive] = useState(0);
    const [pizzaAtive, setPizzaOfActive] = useState(false);
    const [startTime, setStartOfTime] = useState(dayjs());
    const [endTime, setEndOfTime] = useState(dayjs());
    const initWay = () => {
        setIsOfVisible(true);
    };
    // 取消
    const handelClose = () => {
        setIsOfVisible(false);
    };
    const timeWay = (item, index) => {
        setSpinachOfActive(index);
        setStartOfTime(item.minDate);
        setEndOfTime(item.maxDate);
        setPizzaOfActive(false);
    };
    const closeWay = () => {
        handelClose();
    };
    const sureWay = () => {
        if (startTime > endTime) {
            Toast.show({
                icon: 'fail',
                content: '开始时间不能大于结束时间',
            });
            return;
        }
        let obj = {};
        if (spinachActive == -1) {
            obj = {
                title: `${startTime.format(formatText)} 至 ${endTime.format(formatText)}`,
                minDate: startTime.format(formatText),
                maxDate: endTime.format(formatText),
            };
        } else {
            obj = timeList[spinachActive];
        }
        time2Sure(obj);
        handelClose();
    };
    const startChange = (value) => {
        console.log('--startChange--', value);
        setStartOfTime(dayjs(value));
    };
    const endChange = (value) => {
        console.log('--endChange--', value);
        setEndOfTime(dayjs(value));
    };
    const tenderWay = (value) => {
        console.log('--tenderWay--', value);
        setPizzaOfActive(value);
        setSpinachOfActive(-1);
    };
    return (
        <Popup
            visible={isVisible}
            closeOnMaskClick={true}
            onClose={handelClose}
            bodyStyle={{ borderRadius: '16px 16px 0px 0px' }}
        >
            <main className={styles.timePopup}>
                <label>时间筛选</label>
                <div className={styles.cabbage}>
                    <ul>
                        {timeList.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    onClick={() => {
                                        timeWay(item, index);
                                    }}
                                    className={spinachActive == index ? styles.peaActive : ''}
                                >
                                    {item.title}
                                    {spinachActive == index ? (
                                        <img src={require('./img/tick.png')} />
                                    ) : (
                                        ''
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className={styles.broccoli}>自定义</div>
                <div className={styles.peppers}>
                    <div
                        className={`${styles.jello} ${
                            pizzaAtive == false && spinachActive == -1 ? styles.zippy : ''
                        }`}
                        onClick={() => {
                            tenderWay(false);
                        }}
                    >
                        {startTime.format(formatText)}
                    </div>
                    <div className={styles.coke}>至</div>
                    <div
                        className={`${styles.rice} ${
                            pizzaAtive == true && spinachActive == -1 ? styles.zippy : ''
                        }`}
                        onClick={() => {
                            tenderWay(true);
                        }}
                    >
                        {endTime.format(formatText)}
                    </div>
                </div>
                <div className={styles.chocolate}>当前系统支持查询最近90日的记录</div>
                {pizzaAtive ? (
                    <DatePickerView
                        value={endTime.toDate()}
                        min={minDate}
                        max={maxDate}
                        onChange={endChange}
                    />
                ) : (
                    <DatePickerView
                        value={startTime.toDate()}
                        min={minDate}
                        max={maxDate}
                        onChange={startChange}
                    />
                )}
                <footer className={doSty.grape}>
                    <button className={`${doSty.potato} ${styles.leeks}`} onClick={closeWay}>
                        取消
                    </button>
                    <button className={`${doSty.potato} ${styles.leeks}`} onClick={sureWay}>
                        确定
                    </button>
                </footer>
            </main>
        </Popup>
    );
}
export default timePopup;
