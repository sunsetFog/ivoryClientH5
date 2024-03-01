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
    public componentDidMount() {
        let nodesArr = document.getElementsByClassName('pumpkin');
        // console.log('--nodesArr--', nodesArr);
        for (let i = 0; i < nodesArr.length; i++) {
            let item = nodesArr[i];
            item.id = 'focusKey' + i;
            let nodesList = item.getElementsByTagName('*');
            for (let k = 0; k < nodesList.length; k++) {
                let row = nodesList[k];
                // console.log('--nodesList--', nodesList);
                row.id = 'focusKey' + i;
            }
        }
    }
    public intRef1 = createRef<HTMLInputElement>();
    public intRef2 = createRef<HTMLInputElement>();
    public checkWay = (value) => {
        this.setState({
            checkActive: value,
        });
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
    };
    public loginWay = (event) => {
        console.log('--loginWay--', event.target.id);
        if (event.target.id == 'focusKey0') {
            this.intRef1.current.focus();
            this.setState({
                focusActive1: true,
                focusActive2: false,
            });
        } else if (event.target.id == 'focusKey1') {
            this.intRef2.current.focus();
            this.setState({
                focusActive1: false,
                focusActive2: true,
            });
        } else {
            this.setState({
                focusActive1: false,
                focusActive2: false,
            });
        }
    };
    render() {
        const { checkActive, focusActive1, focusActive2, eyeActive } = this.state;
        return (
            <section
                className={styles.loginApt}
                onClick={(event) => {
                    this.loginWay(event);
                }}
            >
                <div className={styles.logoBox}>
                    <img src={require('./img/logo.png')} />
                </div>
                <div
                    className={`${styles.pumpkin} pumpkin ${
                        focusActive1 ? styles.focusBorder : ''
                    }`}
                >
                    <div className={styles.icon1}>
                        <img src={require('./img/user.png')} />
                    </div>
                    <input
                        ref={this.intRef1}
                        type='text'
                        name='username'
                        maxLength={16}
                        placeholder='用户名'
                    />
                    <div className={styles.icon2}>
                        {focusActive1 ? (
                            <img
                                id='focusKey0'
                                src={require('./img/icon_cancle.png')}
                                onClick={this.empty}
                            />
                        ) : (
                            false
                        )}
                    </div>
                </div>
                <div className={styles.autumn}></div>
                <div
                    className={`${styles.pumpkin} pumpkin ${
                        focusActive2 ? styles.focusBorder : ''
                    }`}
                >
                    <div className={styles.icon1}>
                        <img src={require('./img/password.png')} />
                    </div>
                    <input
                        ref={this.intRef2}
                        type={eyeActive ? 'text' : 'password'}
                        name='password'
                        maxLength={16}
                        placeholder='密码'
                    />
                    <div className={styles.icon2}>
                        {eyeActive && focusActive2 ? (
                            <img
                                id='focusKey1'
                                src={require('./img/icon_eyes_on.png')}
                                onClick={() => {
                                    this.eyeWay(false);
                                }}
                            />
                        ) : null}
                        {!eyeActive && focusActive2 ? (
                            <img
                                id='focusKey1'
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
