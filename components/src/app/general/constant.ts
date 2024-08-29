// 分辨率
export const WIDTH = 1920;
export const HEIGHT_ESC = 1080;
export const HEIGHT = 977;

// 根据视图窗口的宽高按比例进行缩放
export const scaleStyle = (simpleMode?: boolean) => {
  const windowProps = {
    height: window.innerHeight,
    width: window.innerWidth
  };
  // 是否全屏状态
  const isFull = IsFull();
  const useHeight = isFull ? HEIGHT_ESC : HEIGHT;

  const scale = Math.min(
    windowProps.width / WIDTH,
    windowProps.height / useHeight
  );
  let transform = `translate(-50%, -50%) scale(${scale})`;

  // 标准分辨率不进行缩放
  if (scale === 1) {
    transform = '';
  }
  // 简易模式下，X轴放大，Y轴缩放比例不受影响
  if (simpleMode) {
    if (scale > 1) {
      transform = `translate(-50%, -50%) scaleX(${scale}) scaleY(1)`;
    }
    if (window.innerWidth <= 1180) {
      transform = `translate(-50%, -50%) scale(${scale - 0.06})`;
    }
  }
  return {
    transform: transform,
    height: useHeight,
    width: WIDTH,
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
    scaleVal: scale
  };
};
// 判断是否全屏
const IsFull = () => {
  const explorer = window.navigator.userAgent.toLowerCase();
  if (explorer.indexOf('chrome') > 0) { // webkit
    if (document.body.scrollHeight === window.screen.height && document.body.scrollWidth === window.screen.width) {
      return true;
    } else {
      return false;
    }
  } else {// IE 9+  fireFox
    if (window.outerHeight === window.screen.height && window.outerWidth === window.screen.width) {
      return true;
    } else {
      return false;
    }
  }
};
