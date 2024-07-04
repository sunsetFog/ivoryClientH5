import React, { Component } from 'react';

import styles from './index.modules.scss';
import { artichokes } from './constants';
import withNavigation from '@/@energy/ivoryDesign/@higherOrder/withNavigation';

class Mine extends Component {
    state = {};

    dragonfly = (item) => {
        const { navigate } = this.props as any;
        navigate(item.path);
    };

    render() {
        return (
            <section className={styles.mineUnit}>
                <div className={styles.sweetcorn}></div>
                <div className={styles.eggplants}>
                    <main></main>
                </div>
                <div className={styles.broccoli}>
                    <div className={styles.spinach}>我的功能</div>
                    <div className={styles.garlic}>
                        <ul>
                            {artichokes.map((item, index) => {
                                return (
                                    <li
                                        key={index}
                                        onClick={() => {
                                            this.dragonfly(item);
                                        }}
                                    >
                                        <div>
                                            <img src={item.icon} />
                                        </div>
                                        <p>{item.title}</p>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}

export default withNavigation(Mine);
