import React, { useState, useRef } from 'react';

import styles from './index.module.scss';
import { zucchini } from './constants';
import CustomModal from '@/components/customModal';
import QRCode from 'qrcode.react';
import copy from 'copy-to-clipboard';
import { Toast } from 'antd-mobile';
import { screenshotPng } from '@/@energy/ivoryDesign/@utils/domtoimage';

function promotionLink() {
    const recRef = useRef<any>();
    const [codeSrc, setCodeOfSrc] = useState('');
    const downloadWay = (item: any) => {
        setCodeOfSrc(item.url);
        recRef.current.initWay();
    };
    return (
        <div className={styles.promotionLink}>
            <div className={styles.avocados}>
                <ul>
                    {zucchini.map((item, index) => {
                        return (
                            <li key={index}>
                                <div className={styles.sweetcorn}>
                                    <p>{item.title}</p>
                                    <p>{item.url}</p>
                                </div>
                                <div className={styles.eggplants}>
                                    <button
                                        onClick={() => {
                                            downloadWay(item);
                                        }}
                                    ></button>
                                    <button
                                        onClick={() => {
                                            copy(item.url);
                                            Toast.show({
                                                icon: 'success',
                                                content: '复制成功!',
                                            });
                                        }}
                                    >
                                        <img src={require('./img/copy.png')} />
                                        复制
                                    </button>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <CustomModal onRef={recRef}>
                <div className={styles.broccoli}>
                    <div className={styles.spinach}></div>
                    <div className={styles.cucumbers}>
                        <QRCode
                            value={codeSrc}
                            size={260}
                            renderAs={'canvas'} // svg or canvas
                            bgColor={'#fff'}
                            fgColor={'#000'}
                            // imageSettings={{
                            //   src: `${qrcodeSrc?.qrcodeDownload?.src || ''}`,
                            //   height: 16,
                            //   width: 16,
                            //   excavate: true,
                            // }}
                        />
                    </div>
                    <div className={styles.sweet}>
                        扫一扫，体验篮球体育丰富的娱乐游戏
                        <br />
                        每日每场皆有奖，福利惊喜不停
                    </div>
                    <div className={styles.artichokes}>
                        <button
                            onClick={() => {
                                screenshotPng(document.getElementById('toImg'));
                            }}
                        >
                            保存二维码
                        </button>
                    </div>
                </div>
            </CustomModal>
        </div>
    );
}

export default promotionLink;
