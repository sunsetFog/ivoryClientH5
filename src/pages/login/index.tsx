import React, { Component, createRef } from 'react';
import styles from './index.modules.scss';
import { venus } from './constants';
import withNavigation from '@/@energy/ivoryDesign/@higherOrder/withNavigation';
class Login extends Component {
    state = {
        checkActive: false,
        focusActive1: false,
        focusActive2: false,
        eyeActive: false,
    };
    public intRef1 = createRef<HTMLInputElement>();
    public intRef2 = createRef<HTMLInputElement>();
    public checkWay = (value) => {
        this.setState({
            checkActive: value,
        });
    };
    public focusWay1 = () => {
        this.setState({
            focusActive1: true,
        });
    };
    public focusWay2 = () => {
        this.setState({
            focusActive2: true,
        });
    };
    public blurWay1 = () => {
        setTimeout(() => {
            this.setState({
                focusActive1: false,
            });
        }, 0);
    };
    public blurWay2 = () => {
        setTimeout(() => {
            this.setState({
                focusActive2: false,
            });
        }, 0);
    };
    public eyeWay = (value) => {
        this.setState({
            eyeActive: value,
        });
        setTimeout(() => {
            this.setState({
                focusActive2: true,
            });
        }, 0);
    };
    public saturn = () => {
        console.log('--saturn--', this.props);
        const { navigate } = this.props as any;
        navigate('/forgetPassword');
    };
    public dragonfly = (index) => {
        const { navigate } = this.props as any;
        if (index == 0) {
            navigate('/register');
        }
        if (index == 1) {
            navigate('/register');
        }
        if (index == 2) {
        }
    };
    public empty = () => {
        this.intRef1.current.value = '';
        setTimeout(() => {
            this.setState({
                focusActive1: true,
            });
        }, 0);
    };

    render() {
        const { checkActive, focusActive1, focusActive2, eyeActive } = this.state;
        return (
            <section className={styles.loginApt}>
                <div className={styles.logoBox}>
                    <img src={require('./img/logo.png')} />
                </div>
                <div className={`${styles.pumpkin} ${focusActive1 ? styles.focusBorder : ''}`}>
                    <div className={styles.icon1}>
                        <img src={require('./img/user.png')} />
                    </div>
                    <input
                        ref={this.intRef1}
                        type='text'
                        name='username'
                        maxLength={16}
                        placeholder='用户名'
                        onFocus={this.focusWay1}
                        onBlur={this.blurWay1}
                    />
                    <div className={styles.icon2}>
                        {focusActive1 ? (
                            <img src={require('./img/icon_cancle.png')} onClick={this.empty} />
                        ) : (
                            false
                        )}
                    </div>
                </div>
                <div className={styles.autumn}></div>
                <div className={`${styles.pumpkin} ${focusActive2 ? styles.focusBorder : ''}`}>
                    <div className={styles.icon1}>
                        <img src={require('./img/password.png')} />
                    </div>
                    <input
                        ref={this.intRef2}
                        type={eyeActive ? 'text' : 'password'}
                        name='password'
                        maxLength={16}
                        placeholder='密码'
                        onFocus={this.focusWay2}
                        onBlur={this.blurWay2}
                    />
                    <div className={styles.icon2}>
                        {eyeActive && focusActive2 ? (
                            <img
                                src={require('./img/icon_eyes_on.png')}
                                onClick={() => {
                                    this.eyeWay(false);
                                }}
                            />
                        ) : null}
                        {!eyeActive && focusActive2 ? (
                            <img
                                src={require('./img/icon_eyes_off.png')}
                                onClick={() => {
                                    this.eyeWay(true);
                                }}
                            />
                        ) : null}
                    </div>
                </div>
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
                    <div className={styles.forget} onClick={this.saturn}>
                        忘记密码？
                    </div>
                    <div style={{ clear: 'both' }}></div>
                </div>
                <div className={styles.toGo}>登陆</div>
                <div className={styles.catwoman}>
                    <ul>
                        {venus.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    onClick={() => {
                                        this.dragonfly(index);
                                    }}
                                >
                                    <div className={styles.cakes}>
                                        <div>
                                            <img src={item.icon} />
                                        </div>
                                        <p>
                                            <span>{item.title}</span>
                                        </p>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </section>
        );
    }
}

export default withNavigation(Login);
