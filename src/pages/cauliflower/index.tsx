import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { allFunctions } from './constant';

const CommonFunctions = () => {
    const [menuList, setMenuOfList] = useState([]);
    useEffect(() => {
        let zucchini = sessionStorage.getItem('avocados');
        if (!zucchini) {
            zucchini = '1,2,3,4,5,6';
        }
        let arrList = allFunctions.filter((item) => {
            return zucchini.indexOf(item.id) != -1;
        });
        setMenuOfList(arrList);
    }, []);
    return (
        <div className={styles.onions}>
            <div className={styles.carrots}>常用功能</div>
            <div className={styles.mushrooms}>
                <ul>
                    {menuList?.map((item: any, index: number) => (
                        <li key={`quickEntry${index}`}>
                            <div>
                                <img src={item.icon} alt={''} width={40} height={40} />
                            </div>
                            <p>{item.label}</p>
                        </li>
                    ))}
                    <li>
                        <div>
                            <img
                                src={require('./img/icon_add.png')}
                                alt={'more'}
                                width={40}
                                height={40}
                            />
                        </div>
                        <p>更多</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default CommonFunctions;
