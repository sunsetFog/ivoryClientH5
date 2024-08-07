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
    const recRef3 = useRef<any>();
    const [timeActive1, setTimeOfActive1] = useState(false);
    const [timeActive2, setTimeOfActive2] = useState(false);
    const [title2, setTitle2] = useState('今日');
    const [timeActive3, setTimeOfActive3] = useState(false);
    const [title3, setTitle3] = useState('今日');
    const timeWay1 = () => {
        recRef1.current.initWay();
        setTimeOfActive1(!timeActive1);
    };
    const timeWay2 = () => {
        recRef2.current.initWay();
        setTimeOfActive2(!timeActive2);
    };
    const timeWay3 = () => {
        let french = document.getElementById('french');
        console.log('薯条', french.offsetTop + french.offsetHeight);
        recRef3.current.initWay(french.offsetTop + french.offsetHeight);
        setTimeOfActive3(!timeActive3);
    };
    const time2Sure = (obj: any) => {
        setTitle2(obj.title);
        setTimeOfActive2(false);
    };
    const time3Sure = (obj: any) => {
        setTitle3(obj.title);
        setTimeOfActive3(false);
    };
    return (
        <section className={styles.recordsUnit}>
            <HeaderUnit title='记录'></HeaderUnit>
            <div className={styles.garlic} id='french'>
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
                <button onClick={timeWay3}>
                    {title3}
                    <img
                        src={require('./img/top.png')}
                        className={timeActive3 ? styles.onions : styles.lettuce}
                    />
                </button>
            </div>
            <div className={styles.noData}>
                <div></div>
                <p>暂无记录</p>
            </div>
            <TimeModal onRef={recRef1}></TimeModal>
            <TimePopup onRef={recRef2} time2Sure={time2Sure}></TimePopup>
            <TimeDropdown onRef={recRef3} time3Sure={time3Sure}></TimeDropdown>
        </section>
    );
}
export default recordsUnit;
