import React, { useState, useRef } from 'react';
// styles
import styles from './index.module.scss';
import { tabList1 } from './constants';

function tabPanel() {
    const [tabActive, setTabOfActive] = useState(0);
    const daRef = useRef<any>(null);

    const petalWay = (item, index) => {
        setTabOfActive(index);
        let peachList: any = document.getElementsByClassName('peach');
        let scroolWidth =
            peachList[index]?.offsetLeft -
            window?.screen?.width / 2 +
            peachList[index]?.offsetWidth / 2;
        console.log(
            '--petalWay--',
            peachList[index]?.offsetWidth,
            peachList[index]?.offsetLeft,
            scroolWidth,
        );

        daRef.current?.scrollTo({
            left: scroolWidth,
            behavior: 'smooth',
        });
    };
    return (
        <div className={styles.tabPanel} ref={daRef}>
            <ul>
                {tabList1.map((item, index) => {
                    return (
                        <li
                            key={index}
                            onClick={() => {
                                petalWay(item, index);
                            }}
                            className={`${styles.ashLi} ${
                                tabActive == index ? styles.liActive : ''
                            } peach`}
                        >
                            {item.title}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default tabPanel;
