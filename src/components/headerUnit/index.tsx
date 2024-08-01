import React, { useState } from 'react';
// styles
import styles from './index.module.scss';
import { useNavigate } from 'react-router-dom';
interface Headerprops {
    title?: string;
}
function headerUnit({ title }: Headerprops) {
    const navigate = useNavigate();
    const goWay = () => {
        navigate(-1);
    };
    return (
        <main className={styles.headerUnit}>
            <header>
                <div className={styles.icon}>
                    <div onClick={goWay}></div>
                </div>
                <div className={styles.title}>{title}</div>
            </header>
        </main>
    );
}

export default headerUnit;
