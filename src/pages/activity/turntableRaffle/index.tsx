import React, { useEffect, useRef, useState } from 'react';
import styles from './index.module.scss';
import HeaderUnit from '@/components/headerUnit';
import { Tabs } from 'antd-mobile';
import Tab1 from './components/tab1';
import Tab2 from './components/tab2';

function turntableRaffle(props: any) {
    const [_activeKey, setActiveOfKey] = useState('1');
    const defaultWay = () => {
        return '1';
    };
    const tabChange = (activeKey) => {
        setActiveOfKey(activeKey);
    };
    return (
        <section className={styles.turntableRaffle}>
            <HeaderUnit title='转盘抽奖'></HeaderUnit>
            <div className={styles.banner}></div>
            <div className={styles.pumpkin}>
                <Tabs defaultActiveKey={defaultWay()} onChange={tabChange}>
                    <Tabs.Tab title='签到转盘' key='1'>
                        <Tab1></Tab1>
                    </Tabs.Tab>
                    <Tabs.Tab title='投注/存款转盘' key='2'>
                        <Tab2></Tab2>
                    </Tabs.Tab>
                </Tabs>
            </div>
            <div className={styles.ruleBox}>
                <header>活动简介</header>
                <main className={styles.beautiful}></main>
            </div>
        </section>
    );
}

export default turntableRaffle;
