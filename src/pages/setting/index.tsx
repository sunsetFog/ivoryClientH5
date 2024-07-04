import React, { Component } from 'react';
import styles from './index.modules.scss';

class Setting extends Component {
    state = {};

    render() {
        return (
            <section className={styles.setting}>
                <div className={styles.cauliflower}>
                    <ul>
                        <li>
                            <div className={styles.leeks}>账户名称</div>
                            <div className={styles.carrots}></div>
                            <div className={styles.squash}>testivory12</div>
                        </li>
                        <li>
                            <div className={styles.leeks}>真实姓名</div>
                            <div className={styles.carrots}></div>
                            <div className={styles.squash}></div>
                        </li>
                        <li>
                            <div className={styles.leeks}>VIP</div>
                            <div className={styles.carrots}></div>
                            <div className={styles.squash}>VIP2</div>
                        </li>
                    </ul>
                </div>
                <div className={styles.cauliflower}>
                    <ul>
                        <li>
                            <div className={styles.leeks}>手机号码</div>
                            <div className={styles.carrots}></div>
                            <div className={styles.squash}>已绑定</div>
                        </li>
                        <li>
                            <div className={styles.leeks}>邮箱地址</div>
                            <div className={styles.carrots}></div>
                            <div className={styles.squash}>已绑定</div>
                        </li>
                        <li>
                            <div className={styles.leeks}>修改密码</div>
                            <div className={styles.carrots}></div>
                            <div className={styles.squash}>用于账号登录</div>
                        </li>
                        <li>
                            <div className={styles.leeks}>夜间模式</div>
                        </li>
                    </ul>
                </div>
                <div className={styles.cauliflower}>
                    <ul>
                        <li>
                            <div className={styles.leeks}>银行卡管理</div>
                            <div className={styles.carrots}></div>
                            <div className={styles.squash}>用于人民币取款</div>
                        </li>
                        <li>
                            <div className={styles.leeks}>微信地址管理</div>
                            <div className={styles.carrots}></div>
                            <div className={styles.squash}>用于微信取款</div>
                        </li>
                        <li>
                            <div className={styles.leeks}>支付宝地址管理</div>
                            <div className={styles.carrots}></div>
                            <div className={styles.squash}>用于支付宝地址管理</div>
                        </li>
                        <li>
                            <div className={styles.leeks}>数字人民币地址管理</div>
                            <div className={styles.carrots}></div>
                            <div className={styles.squash}>用于数字人民币取款</div>
                        </li>
                        <li>
                            <div className={styles.leeks}>钱包地址管理</div>
                            <div className={styles.carrots}></div>
                            <div className={styles.squash}>用于数字货币取款</div>
                        </li>
                    </ul>
                </div>
                <div className={styles.cauliflower}>
                    <div className={styles.exit}>退出登录</div>
                </div>
            </section>
        );
    }
}

export default Setting;
