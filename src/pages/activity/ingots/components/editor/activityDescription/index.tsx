import React from 'react';
// styles
import styles from './index.module.scss';
import { formatContentItem } from '../../../constants';
import { fixedXssContent } from '@/@energy/ivoryDesign/@utils/security/fixedXss';

const activityDescription = function (props) {
    const { illustrate, isShow = 'all' } = props;
    const quchup = (value = '') => {
        value = value.replace(new RegExp('<p>', 'gm'), '');
        value = value.replace(new RegExp('</p>', 'gm'), '');
        return value;
    };
    const gaizao = (vaule = '') => {
        // let str03 = '';
        // vaule = quchup(vaule);
        // for (let i = 0; i < vaule.length; i++) {
        //   let item = vaule[i];
        //   str03 += '<span>' + item + '</span>';
        // }
        return `<div>${vaule}</div>`;
    };

    let boxArr = formatContentItem(illustrate);

    let arrBox = [];
    for (let i = 0; i < boxArr.length; i++) {
        let item = boxArr[i];
        let row = '';
        if (i == 0) {
            if (isShow == '1' || isShow == '1a') {
                row = quchup(item);
            } else if (isShow == '3') {
                row = '<button>活动内容</button>' + gaizao(boxArr.slice(i).join(''));
            } else {
                row = '<button>活动时间</button>' + item;
            }
        } else if (i == 1) {
            row = '<button>活动对象</button>' + item;
        } else if (i == 2) {
            row = '<button>活动内容</button>' + gaizao(boxArr.slice(i).join(''));
        }

        arrBox.push(row);
    }
    return (
        <section className={styles.activityDescription}>
            <main>
                {arrBox.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className={
                                isShow == 'all'
                                    ? styles[`noticeItem${index + 1}`]
                                    : isShow == '1'
                                    ? styles.oneItem1
                                    : isShow == '1a'
                                    ? styles.oneItem2
                                    : isShow == '3'
                                    ? styles.noticeItem3
                                    : ''
                            }
                            dangerouslySetInnerHTML={{ __html: fixedXssContent(item) }}
                        ></div>
                    );
                })}
            </main>
        </section>
    );
};

export default activityDescription;
