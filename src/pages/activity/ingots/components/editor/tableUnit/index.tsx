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
