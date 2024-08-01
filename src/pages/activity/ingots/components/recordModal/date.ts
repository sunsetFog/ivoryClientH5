import dayjs from 'dayjs';

// 获取时间范围
export function getRecordDatePickerRange1() {
  const now = dayjs();
  return {
    minDate1: now.subtract(1, 'month').toDate(),
    maxDate1: now.subtract(1, 'day').toDate(),
  };
}

// 获取格式化
export const formatText = 'YYYY年MM月'; // YYYY-MM

export function monthlyRange(time) {
  let ym = time.format('YYYY-MM');
  const date = dayjs(ym); // 2022-02
  let lastDay = date.endOf('month').date();
  return {
    start: ym + '-01 00:00:00',
    end: ym + '-' + lastDay + ' 23:59:59',
  };
}
