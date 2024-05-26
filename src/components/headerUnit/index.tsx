import React, { useState } from 'react';
// styles
import styles from './index.module.scss';

function headerUnit() {
    return (
        <main className={styles.headerUnit}>
            <header>
                <div className={styles.icon}>
                    <div></div>
                </div>
                <div className={styles.title}>兑换</div>
            </header>
        </main>
    );
}

export default headerUnit;
