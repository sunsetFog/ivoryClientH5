import React from 'react';
// styles
import styles from './index.module.scss';
import { fixedXssContent } from '@/utils/fixedXss';

const rules = function (props) {
    const { illustrate } = props;
    return (
        <section className={styles.rules}>
            <div dangerouslySetInnerHTML={{ __html: fixedXssContent(illustrate) }}></div>
        </section>
    );
};

export default rules;
