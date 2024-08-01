import React, { useEffect, useRef } from 'react';
import { useSetState, useRequest } from 'ahooks';
// component

// styles
import styles from './index.module.scss';
import { betHistoryModal, changeRecordModal } from '../../services';
import dayjs from 'dayjs';
import { formatText, monthlyRange } from './date';
import { DatePicker } from 'antd-mobile';
import TitleBox from '../titleBox';
import { fixedXssContent } from '@/utils/fixedXss';
const recordModal = function (props) {
    const [state, setState] = useSetState({
        showModal: false,
        startTime: dayjs(),
        arrList: [],
        sDateVisible: false,
    });
    // 接口
    const { run: betHistoryRun } = useRequest((sendingData = {}) => betHistoryModal(sendingData), {
        manual: true,
        onSuccess: (result: any) => {
            result = {
                data: [],
            };
            const { recordType } = props;
            let arrBox = JSON.parse(JSON.stringify(result.data || []));
            for (let i = 0; i < arrBox.length; i++) {
                let item = arrBox[i];
                if (recordType == 'icon2_2') {
                    item.remark = `恭喜您${item.groupName}领取“<span>${item.point}</span>元宝”`;
                } else {
                    if (item.extraPoint == 0) {
                        item.remark = `恭喜您领取 “<span>${item.point}</span>元宝”`;
                    } else {
                        item.remark = `恭喜您领取 “<span>${item.point}</span>元宝”+“额外元宝<span>${item.extraPoint}</span>”`;
                    }
                }
            }
            setState({
                arrList: arrBox,
            });
        },
    });
    const { run: changeRecordRun } = useRequest(
        (sendingData = {}) => changeRecordModal(sendingData),
        {
            manual: true,
            onSuccess: (result: any) => {
                result = {
                    data: {
                        list: [],
                    },
                };
                const { recordType } = props;
                let arrBox = JSON.parse(JSON.stringify(result.data.list || []));
                for (let i = 0; i < arrBox.length; i++) {
                    let item = arrBox[i];
                    if (recordType == 'icon4_1') {
                        if (item.giftName) {
                            item.remark = `恭喜您兑换<span>${item.giftName}</span>，消耗元宝${item.point}`;
                        } else {
                            item.remark = `恭喜您兑换<span>${item.giftAmount}元彩金</span>，消耗元宝${item.point}`;
                        }
                    } else if (recordType == 'icon3_1' || recordType == 'icon3_2') {
                        if (item.extraPoint == 0) {
                            item.remark = `恭喜您领取 “<span>${item.point}</span>元宝”`;
                        } else {
                            item.remark = `恭喜您领取 “<span>${item.point}</span>元宝”+“额外元宝<span>${item.extraPoint}</span>”`;
                        }
                        if (item.recordType == 6) {
                            item.remark = `被邀请人签到成功，恭喜您获得“<span>${item.point}</span>元宝”`;
                        }
                    }
                }
                setState({
                    arrList: arrBox,
                });
            },
        },
    );
    // 方法
    const betHistoryWay = (typeNum) => {
        const { startTime } = state;
        betHistoryRun({
            start: monthlyRange(startTime).start,
            end: monthlyRange(startTime).end,
            recordType: typeNum,
            page: 1,
            pageSize: 999,
        });
    };
    const changeRecordWay = (typeNum) => {
        const { startTime } = state;
        changeRecordRun({
            created: startTime.format('YYYY-MM'),
            recordType: typeNum,
            page: 1,
            pageSize: 999,
        });
    };
    const showWay0 = () => {
        searchWay();
        document.body.style.overflow = 'hidden';
        setState({
            showModal: true,
        });
    };
    const closeWay0 = (event) => {
        if (event.target === event.currentTarget) {
            document.body.style.overflow = '';
            setState({
                showModal: false,
            });
        }
    };
    const defaultWay = (event) => {
        let ev = event || window.event;
        ev.stopPropagation();
    };
    const sureWay1 = (date) => {
        setState({
            startTime: dayjs(date),
            sDateVisible: false,
        });
    };
    const searchWay = () => {
        const { recordType } = props;
        if (recordType == 'icon4_1' || recordType == 'icon3_1' || recordType == 'icon3_2') {
            let typeNum = 0;
            if (recordType == 'icon4_1') {
                typeNum = 10;
            } else if (recordType == 'icon3_1') {
                typeNum = 5;
            } else if (recordType == 'icon3_2') {
                typeNum = 7;
            }
            changeRecordWay(typeNum);
        } else if (
            recordType == 'icon1_1' ||
            recordType == 'icon1_2' ||
            recordType == 'icon2_1' ||
            recordType == 'icon2_2'
        ) {
            let typeNum = 0;
            if (recordType == 'icon1_1') {
                typeNum = 1;
            } else if (recordType == 'icon1_2') {
                typeNum = 2;
            } else if (recordType == 'icon2_1') {
                typeNum = 3;
            } else if (recordType == 'icon2_2') {
                typeNum = 4;
            }
            betHistoryWay(typeNum);
        }
    };
    const { showModal, startTime, arrList, sDateVisible } = state;
    const { children, recordType } = props;
    let titleImg = 'headline_06';
    if (recordType == 'icon4_1') {
        titleImg = 'headline_06';
    } else if (recordType == 'icon1_1') {
        titleImg = 'headline_07';
    } else if (recordType == 'icon1_2') {
        titleImg = 'headline_08';
    } else if (recordType == 'icon2_1') {
        titleImg = 'headline_09';
    } else if (recordType == 'icon2_2') {
        titleImg = 'headline_10';
    } else if (recordType == 'icon3_1') {
        titleImg = 'headline_11';
    } else if (recordType == 'icon3_2') {
        titleImg = 'headline_12';
    }

    return (
        <section className={styles.recordModal}>
            <span onClick={showWay0}>{children}</span>
            {showModal && (
                <section className={styles.rainbow} onClick={closeWay0}>
                    <TitleBox titleImg={titleImg}>
                        <main className={styles.summer} onClick={defaultWay}>
                            <div className={styles.dragonfly}>
                                <div className={styles.timeBox}>
                                    <DatePicker
                                        precision='month'
                                        className={'pickerDateView'}
                                        title='开始日期'
                                        visible={sDateVisible}
                                        value={startTime.toDate()}
                                        onClose={() => {
                                            setState({ sDateVisible: false });
                                        }}
                                        onConfirm={sureWay1}
                                    >
                                        {() => {
                                            return (
                                                <p onClick={() => setState({ sDateVisible: true })}>
                                                    {startTime && startTime.format(formatText)}
                                                </p>
                                            );
                                        }}
                                    </DatePicker>
                                </div>
                                <button className={styles.tab4btn} onClick={searchWay}>
                                    <span>搜索</span>
                                </button>
                            </div>
                            {arrList.length == 0 ? (
                                <div className={styles.emptyBox}>暂无记录</div>
                            ) : (
                                <div className={styles.fruit}>
                                    <ul>
                                        {arrList.map((item, index) => {
                                            return (
                                                <li key={index}>
                                                    <p>{item.createdAt}</p>
                                                    <div
                                                        dangerouslySetInnerHTML={{
                                                            __html: fixedXssContent(item.remark),
                                                        }}
                                                    ></div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            )}
                        </main>
                    </TitleBox>
                </section>
            )}
        </section>
    );
};

export default recordModal;
