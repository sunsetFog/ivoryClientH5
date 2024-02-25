import React, { Component } from 'react';
import styles from './index.modules.scss';
class Login extends Component {
    state = {
        checkActive: false,
    };
    public checkWay = (value) => {
        this.setState({
            checkActive: value,
        });
    };

    render() {
        const { checkActive } = this.state;
        return (
            <section className={styles.loginApt}>
                <div className={styles.logoBox}>
                    <img src={require('./img/logo.png')} />
                </div>
                <div className={styles.pumpkin}></div>
                <div className={styles.autumn}></div>
                <div className={styles.pumpkin}></div>
                <div className={styles.autumn}></div>
                <div className={styles.scenery}>
                    <div className={styles.remember}>
                        {checkActive ? (
                            <img
                                src={require('./img/ischeck.png')}
                                onClick={() => {
                                    this.checkWay(false);
                                }}
                            />
                        ) : (
                            <img
                                src={require('./img/uncheck.png')}
                                onClick={() => {
                                    this.checkWay(true);
                                }}
                            />
                        )}
                        <span>记住密码</span>
                    </div>
                    <div className={styles.forget}>忘记密码？</div>
                    <div style={{ clear: 'both' }}></div>
                </div>
            </section>
        );
    }
}

export default Login;
