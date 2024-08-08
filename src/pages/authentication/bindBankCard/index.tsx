import React, { useState, useRef } from 'react';
// styles
import styles from './index.module.scss';
import HeaderUnit from '@/components/headerUnit';
import { typeList } from './constants';
import BankList from './components/bankList';
import addressOptions from './addressOptions';
import { CascadePicker } from 'antd-mobile';

const bindBankCard = () => {
    const recRef = useRef<any>();
    const [isVisible, setIsOfVisible] = useState(false);
    const [typeActive, setTypeOfActive] = useState(0);
    const typeWay = (item, index) => {
        setTypeOfActive(index);
    };
    const bankWay = () => {
        recRef.current.initWay();
    };
    const initWay = () => {
        setIsOfVisible(true);
    };
    const closeWay = () => {
        setIsOfVisible(false);
    };
    return (
        <section className={styles.bindBankCard}>
            <HeaderUnit title='信息认证'></HeaderUnit>
            <div className={styles.summer}>
                <img src={require('./img/tanhao.png')} />
                为了您的资金能够迅速到账，请确保填写的姓名与银行卡的开户姓名一致
            </div>
            <div className={styles.autumn}>银行卡类型</div>
            <div className={styles.tomato}>
                <ul>
                    {typeList.map((item, index) => {
                        return (
                            <li
                                key={index}
                                onClick={() => {
                                    typeWay(item, index);
                                }}
                                className={typeActive == index ? styles.teeActive : ''}
                            >
                                <img className={styles.hotDog} src={item.url} />
                                {item.title}
                                {typeActive == index ? (
                                    <img className={styles.cake} src={require('./img/bingo.png')} />
                                ) : null}
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className={styles.autumn}>所属银行</div>
            <div className={styles.scenery} onClick={bankWay}>
                <div className={styles.noodles}>
                    请选择银行
                    <img src={require('./img/right.png')} />
                </div>
            </div>
            <div className={styles.magic}></div>
            <div className={styles.autumn}>银行卡号</div>
            <div className={styles.scenery}>
                <div className={styles.honey}>
                    <input placeholder='请输入银行卡号' />
                </div>
            </div>
            <div className={styles.jello}>请认真校对银行卡号，卡号错误资金将无法到账</div>
            <div className={styles.magic}></div>
            <div className={styles.autumn}>开户行地址</div>
            <div className={styles.scenery} onClick={initWay}>
                <div className={styles.noodles}>
                    请选择开户行地址
                    <img src={require('./img/right.png')} />
                </div>
            </div>
            <div className={styles.jello}>请认真校准开户行及开户行地址，如有错误，请手动修改</div>
            <div className={styles.magic}></div>
            <button className={styles.fabulous}>立即提交</button>
            <BankList onRef={recRef}></BankList>
            <CascadePicker
                title='选择地址'
                options={addressOptions}
                visible={isVisible}
                onClose={() => {
                    closeWay();
                }}
                onConfirm={(val, extend) => {
                    console.log('onConfirm', val, extend.items);
                }}
                onSelect={(val) => {
                    console.log('onSelect', val);
                }}
            />
        </section>
    );
};

export default bindBankCard;
