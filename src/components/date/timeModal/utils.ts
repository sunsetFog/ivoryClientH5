import dayjs from 'dayjs';
/*
要求只能选最近一个月
最小时间：现在减一个月
最大时间：现在
*/
export function getRecordDatePickerRange(month = 1) {
    const now = dayjs();
    return {
        minDate: now.subtract(month, 'month').toDate(),
        maxDate: now.toDate(),
    };
}
