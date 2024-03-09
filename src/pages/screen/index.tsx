import React, { Component } from 'react';

import styles from './index.modules.scss';

class Screen extends Component {
    state = {};

    render() {
        return (
            <section className={styles.ScreenUnit}>
                <div className={styles.scenery}>--Screen--</div>
            </section>
        );
    }
}

export default Screen;
