import React, { useState, useEffect } from 'react';
// styles
import styles from './index.module.scss';
import 'antd-mobile/es/global';
import { Picker } from 'antd-mobile';
import { text } from './constants';

// import 'antd-mobile/dist/antd-mobile.css';

function Aloud() {
    const [voice, setVoice] = useState<any>();
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [selectedVoice, setSelectedVoice] = useState(null);
    const [mango, setMango] = useState<any>([]);
    const [visible, setVisible] = useState(false);
    const [grape, setGrape] = useState<any>([]);

    const speak = () => {
        const speech = new SpeechSynthesisUtterance(text);
        // 设置声音
        speech.voice = selectedVoice;
        // 朗读
        window.speechSynthesis.speak(speech);
        setIsSpeaking(true);
    };

    const stop = () => {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
    };
    useEffect(() => {
        window.speechSynthesis.onvoiceschanged = () => {
            const voices1 = window.speechSynthesis.getVoices();
            console.log('--voice-7-', voices1);
            const voices2: any[] = voices1.map((item, index) => {
                item['label'] = item.name;
                item['value'] = 'key' + index;
                // item['children'] = [];
                return item;
            });
            let selectedVoice = voices2.find((item) => {
                return item.name == 'Eddy (英语（美国）)';
                // return item.default;
            });
            setGrape(selectedVoice.value);
            console.log('--voice-8-', voices2);
            setMango([voices2]);
            setSelectedVoice(selectedVoice);
            setVoice(voices1);
        };
    }, []);

    return (
        <div className={styles.aloud}>
            <div className={styles.orange}>
                <button disabled={isSpeaking} onClick={speak}>
                    朗读文本
                </button>
            </div>
            <div className={styles.orange}>
                <button disabled={!isSpeaking} onClick={stop}>
                    停止朗读
                </button>
            </div>
            <div className={styles.orange}>
                <button
                    onClick={() => {
                        setVisible(true);
                    }}
                >
                    切换声音
                </button>
            </div>
            <Picker
                columns={mango}
                visible={visible}
                onClose={() => {
                    setVisible(false);
                }}
                value={grape}
                onConfirm={(v) => {
                    setGrape(v);
                }}
            />
        </div>
    );
}

export default Aloud;
