import React, { Component, createRef } from 'react';
import styles from './index.modules.scss';
import { venus } from './constants';
import withNavigation from '@/@energy/ivoryDesign/@higherOrder/withNavigation';
import { Popup } from 'antd-mobile';

class Register extends Component {
    state = {
        focusActive1: false,
        focusActive2: false,
        focusActive3: false,
        eyeActive1: false,
        eyeActive2: false,
        checkActive: false,
        storeyActive: false,
    };
    public intRef1 = createRef<HTMLInputElement>();
    public intRef2 = createRef<HTMLInputElement>();
    public intRef3 = createRef<HTMLInputElement>();
    public focusWay1 = () => {
        this.setState({
            focusActive1: true,
        });
    };
    public focusWay2 = (event) => {
        console.log('--focusWay2--', event);
        this.setState({
            focusActive2: true,
        });
    };
    public focusWay3 = () => {
        this.setState({
            focusActive3: true,
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
        console.log('--blurWay2--');
        setTimeout(() => {
            this.setState({
                focusActive2: false,
            });
        }, 0);
    };
    public blurWay3 = () => {
        setTimeout(() => {
            this.setState({
                focusActive3: false,
            });
        }, 0);
    };
    public eyeWay1 = (value) => {
        console.log('--eyeWay1--');
        this.intRef2.current?.focus();
        this.setState({
            eyeActive1: value,
        });
        setTimeout(() => {
            this.setState({
                focusActive2: true,
            });
        }, 0);
    };
    public eyeWay2 = (value) => {
        console.log('--eyeWay2--');
        this.intRef3.current.focus();
        this.setState({
            eyeActive2: value,
        });
        setTimeout(() => {
            this.setState({
                focusActive3: true,
            });
        }, 0);
    };
    public dragonfly = (index) => {
        const { navigate } = this.props as any;
        if (index == 0) {
            navigate('/login');
        }
        if (index == 1) {
            navigate('/login');
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
    public checkWay = (value) => {
        this.setState({
            checkActive: value,
        });
    };

    render() {
        const {
            focusActive1,
            focusActive2,
            focusActive3,
            eyeActive1,
            eyeActive2,
            checkActive,
            storeyActive,
        } = this.state;
        return (
            <section className={styles.Register}>
                <div className={styles.logoBox}>
                    <img src={require('../login/img/logo.png')} />
                </div>
                <div className={`${styles.pumpkin} ${focusActive1 ? styles.focusBorder : ''}`}>
                    <div className={styles.icon1}>
                        <img src={require('../login/img/user.png')} />
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
                            <img
                                src={require('../login/img/icon_cancle.png')}
                                onClick={this.empty}
                            />
                        ) : (
                            false
                        )}
                    </div>
                </div>
                <div className={styles.autumn}></div>
                <div className={`${styles.pumpkin} ${focusActive2 ? styles.focusBorder : ''}`}>
                    <div className={styles.icon1}>
                        <img src={require('../login/img/password.png')} />
                    </div>
                    <input
                        ref={this.intRef2}
                        type={eyeActive1 ? 'text' : 'password'}
                        name='password'
                        maxLength={16}
                        placeholder='密码'
                        onFocus={(event) => {
                            this.focusWay2(event);
                        }}
                        onBlur={this.blurWay2}
                    />
                    <div className={styles.icon2}>
                        {eyeActive1 && focusActive2 ? (
                            <img
                                src={require('../login/img/icon_eyes_on.png')}
                                onClick={() => {
                                    this.eyeWay1(false);
                                }}
                            />
                        ) : null}
                        {!eyeActive1 && focusActive2 ? (
                            <img
                                src={require('../login/img/icon_eyes_off.png')}
                                onClick={() => {
                                    this.eyeWay1(true);
                                }}
                            />
                        ) : null}
                    </div>
                </div>
                <div className={styles.autumn}></div>
                <div className={`${styles.pumpkin} ${focusActive3 ? styles.focusBorder : ''}`}>
                    <div className={styles.icon1}>
                        <img src={require('../login/img/password.png')} />
                    </div>
                    <input
                        ref={this.intRef3}
                        type={eyeActive2 ? 'text' : 'password'}
                        name='password'
                        maxLength={16}
                        placeholder='确定密码'
                        onFocus={this.focusWay3}
                        onBlur={this.blurWay3}
                    />
                    <div className={styles.icon2}>
                        {eyeActive2 && focusActive3 ? (
                            <img
                                src={require('../login/img/icon_eyes_on.png')}
                                onClick={() => {
                                    this.eyeWay2(false);
                                }}
                            />
                        ) : null}
                        {!eyeActive2 && focusActive3 ? (
                            <img
                                src={require('../login/img/icon_eyes_off.png')}
                                onClick={() => {
                                    this.eyeWay2(true);
                                }}
                            />
                        ) : null}
                    </div>
                </div>
                <div className={styles.autumn}></div>
                <div className={styles.butterfly}>
                    {checkActive ? (
                        <img
                            src={require('../login/img/ischeck.png')}
                            onClick={() => {
                                this.checkWay(false);
                            }}
                        />
                    ) : (
                        <img
                            src={require('../login/img/uncheck.png')}
                            onClick={() => {
                                this.checkWay(true);
                            }}
                        />
                    )}
                    我已阅读并同意
                    <span
                        onClick={() => {
                            this.setState({
                                storeyActive: true,
                            });
                        }}
                    >
                        相关条款
                    </span>
                    和<span>隐私政策</span>
                </div>
                <div className={styles.toGo}>注册</div>
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

                <Popup
                    visible={storeyActive}
                    onMaskClick={() => {
                        this.setState({
                            storeyActive: false,
                        });
                    }}
                    bodyStyle={{
                        borderTopLeftRadius: '8px',
                        borderTopRightRadius: '8px',
                        minHeight: '90vh',
                    }}
                >
                    <div>相关条款</div>
                </Popup>
            </section>
        );
    }
}

export default withNavigation(Register);
