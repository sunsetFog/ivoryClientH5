import React, { useState, useRef } from 'react';
import styles from './index.module.scss';
import HeaderUnit from '@/components/headerUnit';
import dayjs from 'dayjs';
import TimeModal from '@/components/date/timeModal';
import TimePopup from '@/components/date/timePopup';
import TimeDropdown from '@/components/date/timeDropdown';

function recordsUnit() {
    const recRef1 = useRef<any>();
    const recRef2 = useRef<any>();
    const [timeActive1, setTimeOfActive1] = useState(false);
    const [timeActive2, setTimeOfActive2] = useState(false);
    const [title2, setTitle2] = useState('今日');
    const timeWay1 = () => {
        recRef1.current.initWay();
        setTimeOfActive1(!timeActive1);
    };
    const timeWay2 = () => {
        recRef2.current.initWay();
        setTimeOfActive2(!timeActive2);
    };
    const time2Sure = (obj: any) => {
        setTitle2(obj.title);
    };
    return (
        <section className={styles.recordsUnit}>
            <HeaderUnit title='记录'></HeaderUnit>
            <div className={styles.garlic}>
                <button onClick={timeWay1}>
                    日期
                    <img
                        src={require('./img/top.png')}
                        className={timeActive1 ? styles.onions : styles.lettuce}
                    />
                </button>
                <button onClick={timeWay2}>
                    {title2}
                    <img
                        src={require('./img/top.png')}
                        className={timeActive2 ? styles.onions : styles.lettuce}
                    />
                </button>
            </div>
            <div className={styles.noData}>
                <div></div>
                <p>暂无记录</p>
            </div>
            <TimeModal onRef={recRef1}></TimeModal>
            <TimePopup onRef={recRef2} time2Sure={time2Sure}></TimePopup>
            <TimeDropdown></TimeDropdown>
        </section>
    );
}
export default recordsUnit;
