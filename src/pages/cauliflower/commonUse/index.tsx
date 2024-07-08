import React, { useEffect, useRef, useState } from 'react';
import Draggable from './draggable';
// scss
import styles from './index.module.scss';
import { useRequest } from 'ahooks';
import { DndContext, useSensor, useSensors, TouchSensor } from '@dnd-kit/core';
import { arrayMove, SortableContext } from '@dnd-kit/sortable';
import { allFunctions } from '../constant';

function CommonUse() {
    const [oftenList, setOftenOfList] = useState<any>([]);
    const [allList, setAllOfList] = useState<any[]>([]);
    const [editActive, setEditActive] = useState(false);
    let idList = useRef<any>([]);

    const sensors = useSensors(
        useSensor(TouchSensor, {
            activationConstraint: {
                distance: 1,
            },
        }),
    );

    // 编辑
    const editWay = (flag: any) => {
        setEditActive(flag);
    };

    // 取消
    const onCancel = () => {
        editWay(false);
    };

    // 添加
    const addWay = (item: any) => {
        idList.current.push(item.id);

        const obj = allList.find((it: any) => it.id === item.id);
        const templist = [...oftenList, obj];
        setOftenOfList(templist);
        // 只是改active
        setAllOfList(
            allList.map((it) => {
                if (it.id === item.id) {
                    return { ...it, active: !it.active };
                }
                return it;
            }),
        );
    };

    // 移除
    const onDel = (id: string) => {
        let arrBox = [];
        for (let i = 0; i < idList.current.length; i++) {
            let row = idList.current[i];
            if (row != id) {
                arrBox.push(row);
            }
        }
        idList.current = arrBox;

        const tempList = oftenList.filter((it: any) => it.id !== id);
        setOftenOfList(tempList);

        setAllOfList(
            allList.map((it) => {
                if (it.id === id) {
                    return { ...it, active: !it.active };
                }
                return it;
            }),
        );
    };

    // 完成
    const onFinish = () => {
        editWay(false);
        // commonFeaturesSavetRun({ data: idList.current.join(',') });
    };

    // 跳转
    const toGo = (item: any) => {
        if (!editActive) {
            //   router.push({ pathname: item.url, query: item.query });
        }
    };
    // 上面已有arrayMove方法，实现就是这样的
    const arrayMove2 = (arr, fromIndex, toIndex) => {
        const newArr = [...arr];
        // 删除元素，并返回一个包含被删除元素的新数组
        const [movedItem] = newArr.splice(fromIndex, 1);
        // 0不删，在toIndex下标后插入的新元素
        newArr.splice(toIndex, 0, movedItem);
        return newArr;
    };

    // 拖拽抬起事件
    const onDragEnd = (props: any) => {
        const { active, over } = props;
        if (over?.id) {
            const fromIndex = idList.current.findIndex((item: any) => item === active.id);
            const toIndex = idList.current.findIndex((item: any) => item === over.id);
            // 改变数组，实现移动
            setOftenOfList((itself: any) => arrayMove2(itself, fromIndex, toIndex));
            // 存id的数组随移动变
            idList.current = arrayMove2(idList.current, fromIndex, toIndex);
        }
    };

    useEffect(() => {
        // 查询接口只返回1,2,3  保存接口也是传1,2,3
        let zucchini = sessionStorage.getItem('avocados');
        if (!zucchini) {
            zucchini = '1,2,3,4,5,6';
        }
        idList.current = zucchini.split(',') || [];

        let cartoon = JSON.parse(JSON.stringify(allFunctions));
        // 加active字段
        for (let i = 0; i < cartoon.length; i++) {
            let item: any = cartoon[i];
            item.active = idList.current.indexOf(item.id) != -1;
        }
        setAllOfList(cartoon);

        let arrList = cartoon.filter((item) => {
            return zucchini.indexOf(item.id) != -1;
        });
        setOftenOfList(arrList);
    }, []);

    return (
        <section className={styles.commonUse}>
            <header>
                <div className={styles.leftBox}>
                    {editActive ? (
                        <button
                            className={styles.lettuce}
                            onClick={() => {
                                onCancel();
                            }}
                        >
                            取消
                        </button>
                    ) : (
                        <div className={styles.juice}></div>
                    )}
                </div>
                <div className={styles.centerBox}>常用功能</div>
                <div className={styles.rightBox}>
                    {editActive ? (
                        <button
                            className={styles.garlic}
                            onClick={() => {
                                onFinish();
                            }}
                        >
                            完成
                        </button>
                    ) : (
                        <button
                            className={styles.lettuce}
                            onClick={() => {
                                editWay(true);
                            }}
                        >
                            编辑
                        </button>
                    )}
                </div>
            </header>

            <main>
                <label>首页功能</label>
                <div className={styles.contentBox}>
                    <DndContext onDragEnd={onDragEnd} sensors={sensors}>
                        <SortableContext items={idList.current}>
                            <ul>
                                {oftenList.map((item: any) => {
                                    return (
                                        <Draggable
                                            item={item}
                                            key={item.id}
                                            onDel={onDel}
                                            onClick={toGo}
                                            isEdit={editActive}
                                        />
                                    );
                                })}
                            </ul>
                        </SortableContext>
                    </DndContext>
                </div>
                <label>全部功能</label>
                <div className={styles.contentBox}>
                    <ul>
                        {allList.map((item: any, index: number) => {
                            return (
                                <li
                                    key={index}
                                    onClick={() => {
                                        toGo(item);
                                    }}
                                >
                                    <div>
                                        <img src={item.icon} alt={''} />
                                        {editActive && !item.active && (
                                            <img
                                                className={styles.addImg}
                                                src={require('./img/icon_add.png')}
                                                onClick={() => {
                                                    addWay(item);
                                                }}
                                                alt={''}
                                            />
                                        )}
                                    </div>
                                    <p>{item.label}</p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </main>
        </section>
    );
}

export default CommonUse;
