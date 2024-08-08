import React, { useState, useImperativeHandle } from 'react';
// styles
import styles from './index.module.scss';
import { Popup, IndexBar } from 'antd-mobile';
import { vegetable } from './constants';

interface PropsApi {
    onRef: any; // ref
    show?: boolean; // 展示
}
const areaCode = ({ onRef, show }: PropsApi) => {
    useImperativeHandle(onRef, () => {
        return {
            initWay: initWay,
        };
    });
    const [isVisible, setIsOfVisible] = useState(show || false);
    const [chosenOne, setChosenOne] = useState('AZ');
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
            <div className={styles.areaCode}>
                <header>
                    <button onClick={closeWay}>取消</button>
                    选择区号
                </header>
                <div className={styles.rapeseed}>
                    <img src={require('./img/search.png')} />
                    <input placeholder='搜索区号' />
                </div>
                <div className={styles.ribbons}>
                    <IndexBar>
                        {vegetable().map((item, index1) => {
                            return (
                                <IndexBar.Panel index={item.title} title={item.title} key={index1}>
                                    <div className={styles.coffee}>
                                        {item.children.map((item, index2) => {
                                            return (
                                                <div className={styles.hamburger} key={index2}>
                                                    <div className={styles.rice}>
                                                        <img src={item.cPicUrl} />
                                                        <span>{item.cCode}</span>
                                                        <span>{item.cName}</span>
                                                        <span>(+{item.cNum})</span>
                                                    </div>
                                                    <div className={styles.drink}>
                                                        {chosenOne == item.cCode ? (
                                                            <img src={require('./img/bingo.png')} />
                                                        ) : null}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </IndexBar.Panel>
                            );
                        })}
                    </IndexBar>
                </div>
            </div>
        </Popup>
    );
};

export default areaCode;
