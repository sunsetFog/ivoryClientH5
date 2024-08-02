import React, { Component, createRef } from 'react';
import styles from './index.modules.scss';
import { venus } from './constants';
import withNavigation from '@/@energy/ivoryDesign/@higherOrder/withNavigation';
import { validateImgUrl } from '@/@energy/ivoryDesign/@http/ajax/verificationCode';
class Login extends Component {
    state = {
        checkActive: false,
        focusActive1: false,
        focusActive2: false,
        focusActive3: false,
        eyeActive: false,
        codeUrl: '',
    };
    public componentDidMount() {
        this.codeWay();
    }
    public codeWay = () => {
        validateImgUrl('/agent/api/v1/validateCode')
            .then((res: any) => {
                console.log('--验证码--', res);
                this.setState({
                    codeUrl: res.url,
                });
            })
            .catch(() => {});
    };
    public intRef1 = createRef<HTMLInputElement>();
    public intRef2 = createRef<HTMLInputElement>();
    public intRef3 = createRef<HTMLInputElement>();
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
        console.log('--loginWay--', event.target);
        let usernamePea = document.getElementById('usernamePea');
        let passwordPea = document.getElementById('passwordPea');
        let codePea = document.getElementById('codePea');
        if (!usernamePea || !passwordPea || !codePea) {
            return;
        }
        this.setState({
            focusActive1: false,
            focusActive2: false,
            focusActive3: false,
        });
        if (usernamePea.contains(event.target)) {
            this.intRef1.current.focus();
            this.setState({
                focusActive1: true,
            });
        } else if (passwordPea.contains(event.target)) {
            this.intRef2.current.focus();
            this.setState({
                focusActive2: true,
            });
        } else if (codePea.contains(event.target)) {
            this.intRef3.current.focus();
            this.setState({
                focusActive3: true,
            });
        }
    };
    render() {
        const { checkActive, focusActive1, focusActive2, focusActive3, eyeActive, codeUrl } =
            this.state;
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
                    id='usernamePea'
                    className={`${styles.pumpkin} ${focusActive1 ? styles.focusBorder : ''}`}
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
                            <img src={require('./img/icon_cancle.png')} onClick={this.empty} />
                        ) : (
                            false
                        )}
                    </div>
                </div>
                <div className={styles.autumn}></div>
                <div
                    id='passwordPea'
                    className={`${styles.pumpkin} ${focusActive2 ? styles.focusBorder : ''}`}
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
                        {focusActive2 ? (
                            <img src={require('./img/icon_cancle.png')} onClick={this.empty} />
                        ) : (
                            false
                        )}
                    </div>
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
                <div
                    id='codePea'
                    className={`${styles.pumpkin} ${focusActive3 ? styles.focusBorder : ''}`}
                >
                    <div className={styles.icon1}>
                        <img src={require('./img/code.png')} />
                    </div>
                    <input
                        ref={this.intRef3}
                        style={{ width: '120px' }}
                        type='text'
                        maxLength={4}
                        placeholder='请输入验证码'
                    />
                    <div className={styles.codeBox} onClick={this.codeWay}>
                        <img src={codeUrl} alt={'icon'} />
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
                                style={{ opacity: 0.5 }}
                                src={require('./img/ischeck.png')}
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
