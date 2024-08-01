import React, { useEffect } from 'react';
import { useSetState, useRequest } from 'ahooks';
// styles
import styles from './index.module.scss';
import { betApplyTab3, betInfoTab3 } from '../../../services';
import { fixedXssContent } from '@/utils/fixedXss';
import { Toast } from 'antd-mobile';
// import { useBindPhone } from '@/utils/hooks/useBindPhone';

const tableUnit = function (props) {
    const [state, setState] = useSetState({
        tableList: [],
    });
    // const { handleBindPhone } = useBindPhone();
    // 接口
    const { run: betApplyRun } = useRequest((sendingData = {}) => betApplyTab3(sendingData), {
        manual: true,
        onSuccess: (result: any) => {
            result = {
                message: 'OKK',
            };
            detailWay();
            Toast.show({
                icon: 'success',
                content: result.message,
            });
        },
    });
    const { run: betInfoRun } = useRequest((sendingData = {}) => betInfoTab3(sendingData), {
        manual: true,
        onSuccess: (result: any) => {
            result = {
                data: {
                    list: [
                        {
                            id: 1,
                            name: '体育场馆',
                            venueIds: '53,37,66',
                            giftList: [
                                {
                                    id: 1,
                                    bet: 1000,
                                    point: 400,
                                    highLight: false,
                                },
                                {
                                    id: 2,
                                    bet: 5000,
                                    point: 1800,
                                    highLight: false,
                                },
                                {
                                    id: 3,
                                    bet: 10000,
                                    point: 3800,
                                    highLight: false,
                                },
                                {
                                    id: 4,
                                    bet: 50000,
                                    point: 18800,
                                    highLight: false,
                                },
                                {
                                    id: 5,
                                    bet: 100000,
                                    point: 38800,
                                    highLight: false,
                                },
                                {
                                    id: 6,
                                    bet: 500000,
                                    point: 168800,
                                    highLight: false,
                                },
                                {
                                    id: 7,
                                    bet: 1000000,
                                    point: 288800,
                                    highLight: false,
                                },
                            ],
                            IsApplied: false,
                        },
                        {
                            id: 2,
                            name: '电竞场馆',
                            venueIds: '54,38,44',
                            giftList: [
                                {
                                    id: 1,
                                    bet: 1000,
                                    point: 300,
                                    highLight: false,
                                },
                                {
                                    id: 2,
                                    bet: 5000,
                                    point: 1600,
                                    highLight: false,
                                },
                                {
                                    id: 3,
                                    bet: 10000,
                                    point: 3600,
                                    highLight: false,
                                },
                                {
                                    id: 4,
                                    bet: 50000,
                                    point: 13800,
                                    highLight: false,
                                },
                                {
                                    id: 5,
                                    bet: 100000,
                                    point: 36600,
                                    highLight: false,
                                },
                                {
                                    id: 6,
                                    bet: 500000,
                                    point: 136600,
                                    highLight: false,
                                },
                                {
                                    id: 7,
                                    bet: 1000000,
                                    point: 188800,
                                    highLight: false,
                                },
                            ],
                            IsApplied: false,
                        },
                        {
                            id: 3,
                            name: '真人场馆',
                            venueIds: '50,49,51,3,24',
                            giftList: [
                                {
                                    id: 1,
                                    bet: 1000,
                                    point: 200,
                                    highLight: false,
                                },
                                {
                                    id: 2,
                                    bet: 5000,
                                    point: 1000,
                                    highLight: false,
                                },
                                {
                                    id: 3,
                                    bet: 10000,
                                    point: 1600,
                                    highLight: false,
                                },
                                {
                                    id: 4,
                                    bet: 50000,
                                    point: 6600,
                                    highLight: false,
                                },
                                {
                                    id: 5,
                                    bet: 100000,
                                    point: 13800,
                                    highLight: false,
                                },
                                {
                                    id: 6,
                                    bet: 500000,
                                    point: 68800,
                                    highLight: false,
                                },
                                {
                                    id: 7,
                                    bet: 1000000,
                                    point: 128800,
                                    highLight: false,
                                },
                            ],
                            IsApplied: false,
                        },
                        {
                            id: 4,
                            name: '修仙场馆',
                            venueIds: '47,42,55,43,58,59',
                            giftList: [
                                {
                                    id: 1,
                                    bet: 1000,
                                    point: 200,
                                    highLight: false,
                                },
                                {
                                    id: 2,
                                    bet: 5000,
                                    point: 1000,
                                    highLight: false,
                                },
                                {
                                    id: 3,
                                    bet: 10000,
                                    point: 1600,
                                    highLight: false,
                                },
                                {
                                    id: 4,
                                    bet: 50000,
                                    point: 6600,
                                    highLight: false,
                                },
                                {
                                    id: 5,
                                    bet: 100000,
                                    point: 13800,
                                    highLight: false,
                                },
                                {
                                    id: 6,
                                    bet: 500000,
                                    point: 68800,
                                    highLight: false,
                                },
                                {
                                    id: 7,
                                    bet: 1000000,
                                    point: 128800,
                                    highLight: false,
                                },
                            ],
                            IsApplied: false,
                        },
                        {
                            id: 5,
                            name: '彩票场馆',
                            venueIds: '46,34,41,30',
                            giftList: [
                                {
                                    id: 1,
                                    bet: 1000,
                                    point: 200,
                                    highLight: false,
                                },
                                {
                                    id: 2,
                                    bet: 5000,
                                    point: 1000,
                                    highLight: false,
                                },
                                {
                                    id: 3,
                                    bet: 10000,
                                    point: 1600,
                                    highLight: false,
                                },
                                {
                                    id: 4,
                                    bet: 50000,
                                    point: 6600,
                                    highLight: false,
                                },
                                {
                                    id: 5,
                                    bet: 100000,
                                    point: 13800,
                                    highLight: false,
                                },
                                {
                                    id: 6,
                                    bet: 500000,
                                    point: 68800,
                                    highLight: false,
                                },
                                {
                                    id: 7,
                                    bet: 1000000,
                                    point: 128800,
                                    highLight: false,
                                },
                            ],
                            IsApplied: false,
                        },
                        {
                            id: 6,
                            name: '电子场馆',
                            venueIds: '7,28,6,35,52,56,70,71',
                            giftList: [
                                {
                                    id: 1,
                                    bet: 1000,
                                    point: 200,
                                    highLight: true,
                                },
                                {
                                    id: 2,
                                    bet: 5000,
                                    point: 1200,
                                    highLight: false,
                                },
                                {
                                    id: 3,
                                    bet: 10000,
                                    point: 1800,
                                    highLight: false,
                                },
                                {
                                    id: 4,
                                    bet: 50000,
                                    point: 8800,
                                    highLight: false,
                                },
                                {
                                    id: 5,
                                    bet: 100000,
                                    point: 18800,
                                    highLight: false,
                                },
                                {
                                    id: 6,
                                    bet: 500000,
                                    point: 108800,
                                    highLight: false,
                                },
                                {
                                    id: 7,
                                    bet: 1000000,
                                    point: 168800,
                                    highLight: false,
                                },
                            ],
                            IsApplied: false,
                        },
                    ],
                },
                message: 'success',
                status_code: 6000,
            };
            let arrList = JSON.parse(JSON.stringify(result.data.list || []));
            setState({
                tableList: arrList,
            });
        },
    });
    // 方法
    const detailWay = () => {
        betInfoRun();
    };
    const receiveWay = (item) => {
        if (item.IsApplied) {
            return;
        }
        // handleBindPhone(() => {
        betApplyRun({ id: item.id });
        // });
    };
    useEffect(() => {
        detailWay();
    }, []);
    const { tableList } = state;
    const { illustrate } = props;
    return (
        <section className={styles.tableUnit}>
            <div
                className={styles.honey}
                dangerouslySetInnerHTML={{ __html: fixedXssContent(illustrate) }}
            ></div>
            <div className={styles.honey}>
                <table className={styles.snail}>
                    <tbody>
                        <tr>
                            <td className={styles.oncetbwit}></td>
                            {tableList.map((item, index) => {
                                return (
                                    <td key={index}>
                                        {item.IsApplied ? (
                                            <button className={styles.signOpacity}>
                                                <span>已领取</span>
                                            </button>
                                        ) : (
                                            <button
                                                onClick={() => {
                                                    receiveWay(item);
                                                }}
                                            >
                                                <span>领取</span>
                                            </button>
                                        )}
                                    </td>
                                );
                            })}
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default tableUnit;
