import React, { useState, useRef } from 'react';
// styles
import styles from './index.module.scss';
import HeaderUnit from '@/components/headerUnit';
import AreaCode from './components/areaCode';
import { useNavigate } from 'react-router-dom';

const authentication = () => {
    const navigate = useNavigate();
    const recRef = useRef<any>();
    const areaWay = () => {
        recRef.current.initWay();
    };
    const goWay = () => {
        navigate('/authentication/bindBankCard');
    };
    return (
        <div className={styles.authentication}>
            <HeaderUnit title='身份认证'></HeaderUnit>
            <div className={styles.summer}>
                <img src={require('./img/tanhao.png')} />
                为了您的资金能够迅速到账，请确保填写的信息一致
            </div>
            <div className={styles.autumn}>姓名</div>
            <div className={styles.scenery}>
                <div className={styles.honey}>
                    <input placeholder='请输入真实姓名' />
                </div>
            </div>
            <div className={styles.autumn}>手机号码</div>
            <div className={styles.scenery}>
                <div className={styles.butterfly} onClick={areaWay}>
                    <img className={styles.bird} src={require('./img/tanhao.png')} />
                    <img className={styles.grass} src={require('./img/down.png')} />
                    <div></div>
                    <span>+86</span>
                </div>
                <div className={styles.papaya}>
                    <input placeholder='请输入手机号码' />
                </div>
            </div>
            <div className={styles.autumn}>手机验证码</div>
            <div className={styles.scenery}>
                <div className={styles.catwoman}>
                    <input placeholder='请输入手机验证码' />
                </div>
                <div className={styles.cauliflower}>获取验证码</div>
            </div>
            <div className={styles.magic}></div>
            <button className={styles.fabulous} onClick={goWay}>
                下一步
            </button>
            <AreaCode onRef={recRef}></AreaCode>
        </div>
    );
};

export default authentication;
