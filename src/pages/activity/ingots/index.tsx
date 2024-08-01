import React, { useEffect, useRef, createRef } from 'react';

import { useSetState, useRequest } from 'ahooks';

// styles
import styles from './index.module.scss';

import { navList } from './constants';

import Tab1 from './components/tab1';
import Tab2 from './components/tab2';
import Tab3 from './components/tab3';
import Tab4 from './components/tab4';
import HeaderUnit from '@/components/headerUnit';
import { formatCon } from './constants';

const IngotsUnit = () => {
    const [state, setState] = useSetState({
        activeIndex: 0,
    });

    const { activeIndex } = state;

    const onActivityChange = (index) => {
        setState({ activeIndex: index });
    };

    return (
        <section className={styles.IngotsUnit}>
            <HeaderUnit title='元宝'></HeaderUnit>
            <div className={styles.banner}></div>
            <main className={styles.bgBox}>
                <div className={styles.topLine}>
                    <img src={require('./img/top_line.png')} />
                </div>
                <div className={styles.navList}>
                    {navList.map((item, index) => {
                        return (
                            <img
                                src={index === activeIndex ? item.activeBg : item.bg}
                                key={index}
                                onClick={() => {
                                    onActivityChange(index);
                                }}
                            />
                        );
                    })}
                </div>
                {activeIndex == 0 && <Tab1 formatCon={formatCon}></Tab1>}

                {activeIndex == 1 && <Tab2 formatCon={formatCon}></Tab2>}

                {activeIndex == 2 && <Tab3 formatCon={formatCon}></Tab3>}

                {activeIndex == 3 && <Tab4 formatCon={formatCon}></Tab4>}
            </main>
        </section>
    );
};

export default IngotsUnit;
