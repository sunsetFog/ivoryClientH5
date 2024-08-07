import dayjs from 'dayjs';
export const timeList = [
    {
        title: '今日',
        minDate: dayjs(),
        maxDate: dayjs(),
    },
    {
        title: '近7日',
        minDate: dayjs().subtract(6, 'day'),
        maxDate: dayjs(),
    },
    {
        title: '近30日',
        minDate: dayjs().subtract(29, 'day'),
        maxDate: dayjs(),
    },
    {
        title: '近90日',
        minDate: dayjs().subtract(89, 'day'),
        maxDate: dayjs(),
    },
    {
        title: '自定义',
        minDate: dayjs(),
        maxDate: dayjs(),
    },
];
