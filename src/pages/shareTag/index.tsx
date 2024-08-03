import React, { useState } from 'react';
import Draggable from 'react-draggable';
// styles
import styles from './index.module.scss';

const ShareTag = () => {
    const [start, setStart] = useState(false);
    const onStart = (event) => {
        setStart(true);
    };

    const onStop = (type?: any) => {};

    const onDrag = (event, params) => {};

    return (
        <Draggable onStart={(e) => onStart(e)} onStop={onStop} onDrag={onDrag} bounds='parent'>
            <div className={start ? `${styles.tagView} ${styles.move}` : styles.tagView}>分享</div>
        </Draggable>
    );
};

export default ShareTag;
