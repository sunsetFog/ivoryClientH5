import React, { useState, useRef, useImperativeHandle } from 'react';
import styles from './index.module.scss';
import { Dropdown } from 'antd-mobile';

interface PropsApi {
    onRef: any; // ref
    show?: boolean; // 展示
    time3Sure?: (obj: any) => any;
}
function timeDropdown({ onRef, show, time3Sure }: PropsApi) {
    return <Dropdown>timeDropdown</Dropdown>;
}
export default timeDropdown;
