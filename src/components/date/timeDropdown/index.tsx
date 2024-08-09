import React, { useState, useRef, useImperativeHandle } from 'react';
import styles from './index.module.scss';
import Dropdown from '@/components/dropdown';
import { timeList } from './constants';
import dayjs from 'dayjs';
const formatText = 'YYYY-MM-DD';
import { getRecordDatePickerRange } from '@/components/date/timeModal/utils';
import { DatePickerView, Toast } from 'antd-mobile';

interface PropsType {
    onRef: any; // ref
    show?: boolean; // 展示
    time3Sure?: (obj: any) => any;
}
function timeDropdown({ onRef, show, time3Sure }: PropsType) {
    useImperativeHandle(onRef, () => {
        return {
            initWay: initWay,
            closeWay: closeWay,
        };
    });
    const { minDate, maxDate } = getRecordDatePickerRange(3);
    const recRef = useRef<any>();
    const [timeActive, setTimeOfActive] = useState(-1);
    const [startTime, setStartOfTime] = useState(dayjs());
    const [endTime, setEndOfTime] = useState(dayjs());
    const [pizzaAtive1, setPizzaOfActive1] = useState(false);
    const [pizzaAtive2, setPizzaOfActive2] = useState(false);
    const initWay = (topNum: number) => {
        recRef.current.initWay(topNum);
        setTimeOfActive(-1);
        setPizzaOfActive1(false);
        setPizzaOfActive2(false);
    };
    const closeWay = () => {
        recRef.current.closeWay();
    };
    const sureWay = (timeActive: number) => {
        if (startTime > endTime) {
            Toast.show({
                icon: 'fail',
                content: '开始时间不能大于结束时间',
            });
            return;
        }
        let obj = JSON.parse(JSON.stringify(timeList[timeActive]));
        if (timeActive == 4) {
            obj.title = `${startTime.format(formatText)} 至 ${endTime.format(formatText)}`;
        }
        time3Sure(obj);
        closeWay();
    };
    const timeWay = (item, index) => {
        setTimeOfActive(index);
        if (index != 4) {
            sureWay(index);
        }
    };
    const startChange = (value) => {
        console.log('--startChange--', value);
        setStartOfTime(dayjs(value));
    };
    const endChange = (value) => {
        console.log('--endChange--', value);
        setEndOfTime(dayjs(value));
    };
    return (
        <Dropdown onRef={recRef}>
            <div className={styles.tasty}>*当前系统支持查询最近90日的交易记录</div>
            <div className={styles.delicious}>
                {timeList.map((item, index) => {
                    return (
                        <button
                            key={index}
                            className={timeActive == index ? styles.juicy : ''}
                            onClick={() => {
                                timeWay(item, index);
                            }}
                        >
                            {item.title}
                        </button>
                    );
                })}
            </div>
            {timeActive == 4 ? (
                <div className={styles.crispy}>
                    <div
                        className={styles.appetizing}
                        onClick={() => {
                            setPizzaOfActive1(!pizzaAtive1);
                            setPizzaOfActive2(false);
                        }}
                    >
                        <span>开始日期</span>
                        <span>{startTime.format(formatText)}</span>
                    </div>
                    {pizzaAtive1 ? (
                        <DatePickerView
                            value={startTime.toDate()}
                            min={minDate}
                            max={maxDate}
                            onChange={startChange}
                        />
                    ) : null}
                    <div
                        className={styles.appetizing}
                        onClick={() => {
                            setPizzaOfActive1(false);
                            setPizzaOfActive2(!pizzaAtive2);
                        }}
                    >
                        <span>结束日期</span>
                        <span>{endTime.format(formatText)}</span>
                    </div>
                    {pizzaAtive2 ? (
                        <DatePickerView
                            value={endTime.toDate()}
                            min={minDate}
                            max={maxDate}
                            onChange={endChange}
                        />
                    ) : null}
                    <div className={styles.seasoned}>
                        <button onClick={closeWay}>取消</button>
                        <button
                            onClick={() => {
                                sureWay(timeActive);
                            }}
                        >
                            确定
                        </button>
                    </div>
                </div>
            ) : null}
        </Dropdown>
    );
}
export default timeDropdown;
