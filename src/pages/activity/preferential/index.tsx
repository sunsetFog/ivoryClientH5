import React, { useEffect, useRef, useState } from 'react';
import styles from './index.module.scss';
import { bread } from './constants';
import { useNavigate } from 'react-router-dom';

function preferential(props: any) {
    const navigate = useNavigate();
    const goWay = (item) => {
        navigate(item.path);
    };
    return (
        <section className={styles.preferential}>
            <div className={styles.mango}>
                <ul>
                    {bread.map((item, index) => {
                        return (
                            <li
                                key={index}
                                onClick={() => {
                                    goWay(item);
                                }}
                            >
                                <div className={styles.coffee}></div>
                                {item.title}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}

export default preferential;
