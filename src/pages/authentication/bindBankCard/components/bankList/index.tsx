import React, { useState, useRef, useImperativeHandle } from 'react';
// styles
import styles from './index.module.scss';
import { Popup } from 'antd-mobile';
import { chicken } from './contants';

interface PropsApi {
    onRef: any; // ref
    show?: boolean; // 展示
}
const bankList = ({ onRef, show }: PropsApi) => {
    useImperativeHandle(onRef, () => {
        return {
            initWay: initWay,
        };
    });
    const [isVisible, setIsOfVisible] = useState(show || false);
    const [chosenOne, setChosenOne] = useState('SPDB');
    const initWay = () => {
        setIsOfVisible(true);
    };
    const closeWay = () => {
        setIsOfVisible(false);
    };
    return (
        <Popup
            visible={isVisible}
            closeOnMaskClick={true}
            onClose={closeWay}
            bodyStyle={{ borderRadius: '16px 16px 0px 0px' }}
        >
            <div className={styles.bankList}>
                <header>
                    <button onClick={closeWay}>取消</button>
                    请选择所属银行
                </header>
                <div className={styles.rapeseed}>
                    <img src={require('./img/search.png')} />
                    <input placeholder='请输入银行名称' />
                </div>
                <div className={styles.delicious}>
                    <ul>
                        {chicken.map((item, index) => {
                            return (
                                <li key={index}>
                                    <img src={item.remark} />
                                    {item.dictValue}
                                    <div className={styles.drink}>
                                        {chosenOne == item.code ? (
                                            <img src={require('./img/bingo.png')} />
                                        ) : null}
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </Popup>
    );
};

export default bankList;
