import React from 'react';
// styles
import styles from './index.module.scss';
import { fixedXssContent } from '@/utils/fixedXss';
import RecordModal from '../recordModal';

const titleBox = function (props) {
    const { titleImg, titleTime, recordType, children } = props;
    return (
        <section className={styles.titleBox}>
            <header>
                <img className={styles.titleImg} src={require(`./img/tb/${titleImg}.png`)}></img>
                {titleTime && (
                    <div
                        className={styles.timeBox}
                        dangerouslySetInnerHTML={{ __html: fixedXssContent(titleTime) }}
                    ></div>
                )}
                {recordType == 'tab01' && (
                    <RecordModal recordType={recordType}>
                        <img
                            className={styles.recordImg}
                            src={require('./img/test_dhjl.png')}
                        ></img>
                    </RecordModal>
                )}
                {(recordType == 'tab02_1' ||
                    recordType == 'tab02_2' ||
                    recordType == 'tab03_1' ||
                    recordType == 'tab03_2' ||
                    recordType == 'tab04_1' ||
                    recordType == 'tab04_2') && (
                    <RecordModal recordType={recordType}>
                        <img
                            className={styles.recordImg}
                            src={require('./img/test_lqjl.png')}
                        ></img>
                    </RecordModal>
                )}
            </header>
            <main className={styles.mainTag}>{children}</main>
        </section>
    );
};

export default titleBox;
