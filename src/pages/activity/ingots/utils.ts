export const pathId = () => {
  let pathStr: any = location.href;
  pathStr = pathStr.split('/');
  pathStr = pathStr[pathStr.length - 1];
  pathStr = Number(pathStr);
  return pathStr;
};

// 格式化时间
export function formatTime1(mss) {
  // const minutes = (mss % (60 * 60)) / 60;
  const minutes = Math.floor(mss / 60);
  const seconds = Math.ceil(mss % 60);
  return `${minutes <= 9 ? '0' : ''}${Math.floor(minutes)}:${seconds <= 9 ? '0' : ''}${seconds}`;
}

// 格式化时间
export function formatTime2(mss) {
  const hour = Math.floor(mss / 3600);
  const minutes = Math.floor((mss / 60) % 60);
  const seconds = Math.ceil(mss % 60);
  return `${hour <= 9 ? '0' : ''}${hour}:${minutes <= 9 ? '0' : ''}${Math.floor(minutes)}:${
    seconds <= 9 ? '0' : ''
  }${seconds}`;
}
