import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import styles from './index.module.scss';

export default function Draggable(props: any) {
    const { onDel, item, onClick, isEdit } = props;
    const { attributes, setNodeRef, listeners, transform, transition } = useSortable({
        id: item.id,
    });
    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        cursor: 'move',
    };

    return (
        <li
            ref={isEdit ? setNodeRef : null}
            {...listeners}
            {...attributes}
            style={style}
            onClick={() => onClick(item)}
        >
            <div>
                <img src={item.icon} />
                {isEdit && (
                    <img
                        className={styles.addImg}
                        src={require('./img/icon_reduce.png')}
                        onClick={() => {
                            onDel(item.id);
                        }}
                    />
                )}
            </div>
            <p>{item.label}</p>
        </li>
    );
}
