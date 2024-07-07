import React from 'react';
import styles from './index.modules.scss';

function NotFound() {
    return (
        <div className={styles['not-found-root']}>
            <div className={styles.broccoli}>页面未找到</div>
            <div className={styles.spinach}>PAGE NOT FOUND</div>
            <div className={styles.garlic}></div>
            <p className={styles.leeks}>
                尊敬的用户，很抱歉，此页面未找到。请您联系客服为您提供解决方法，对您造成的不便，我们深表歉意，感谢您的理解与支持！
            </p>
            <div className={styles.carrots}>
                <button>
                    <img src={require('./img/icon_kf.png')} />
                    联系客服
                </button>
            </div>
        </div>
    );
}

export default NotFound;
