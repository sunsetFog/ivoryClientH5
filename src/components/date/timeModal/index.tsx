import React, { useState, useRef, useImperativeHandle } from 'react';
import styles from './index.module.scss';
import CustomModal from '@/components/customModal';
import doSty from '@/components/pleaseToDo/index.module.scss';
import { DatePicker, Toast } from 'antd-mobile';
import { getRecordDatePickerRange } from './utils';
import dayjs from 'dayjs';
const formatText = 'YYYY-MM-DD';
interface PropsType {
    onRef: any;
}
function timeModal({ onRef }: PropsType) {
    useImperativeHandle(onRef, () => {
        return {
            initWay: initWay,
        };
    });
    const recRef = useRef<any>();
    const { minDate, maxDate } = getRecordDatePickerRange();
    const [visible1, setVisible1] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [startTime, setStartOfTime] = useState(dayjs());
    const [endTime, setEndOfTime] = useState(dayjs());
    const initWay = () => {
        recRef.current.initWay();
    };
    const closeWay = () => {
        recRef.current.closeWay();
    };
    const sureWay = () => {
        closeWay();
    };
    const startSure = (date) => {
        const startTime = dayjs(date);
        if (startTime > endTime) {
            Toast.show({
                icon: 'fail',
                content: '开始时间不能大于结束时间',
            });
            return;
        }
        setStartOfTime(startTime);
    };
    const endSure = (date) => {
        const endTime = dayjs(date);
        if (startTime > endTime) {
            Toast.show({
                icon: 'fail',
                content: '开始时间不能大于结束时间',
            });
            return;
        }
        setEndOfTime(endTime);
    };
    const startWay = () => {
        setVisible1(true);
    };
    const endWay = () => {
        setVisible2(true);
    };
    return (
        <CustomModal title='请选择日期查询' onRef={recRef}>
            <div className={styles.carrots}>
                <label>开始日期</label>
                <div
                    onClick={() => {
                        startWay();
                    }}
                >
                    {startTime.format(formatText)}
                    <img src={require('./img/left.png')} />
                </div>
            </div>
            <DatePicker
                visible={visible1}
                value={startTime.toDate()}
                min={minDate}
                max={maxDate}
                onConfirm={startSure}
                onClose={() => setVisible1(false)}
            />
            <div className={styles.carrots}>
                <label>结束日期</label>
                <div
                    onClick={() => {
                        endWay();
                    }}
                >
                    {endTime.format(formatText)}
                    <img src={require('./img/left.png')} />
                </div>
            </div>
            <DatePicker
                visible={visible2}
                value={endTime.toDate()}
                min={minDate}
                max={maxDate}
                onConfirm={endSure}
                onClose={() => setVisible2(false)}
            />
            <footer className={doSty.grape}>
                <button className={`${doSty.potato} ${styles.leeks}`} onClick={closeWay}>
                    取消
                </button>
                <button className={`${doSty.potato} ${styles.leeks}`} onClick={sureWay}>
                    确定
                </button>
            </footer>
        </CustomModal>
    );
}

export default timeModal;
