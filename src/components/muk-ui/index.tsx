import ImgViewer from "./ImgViewer/index";
import ReactDOM from 'react-dom';

// 函数式调用方法
export const createImgViewer = (options) => {
  const div = document.createElement('div');
  document.body.appendChild(div);
  
  const close = () => {
    const unmountResult = ReactDOM.unmountComponentAtNode(div);
    if (unmountResult && div.parentNode) {
      div.parentNode.removeChild(div);
    }
  };

  ReactDOM.render(
    <ImgViewer
      {...options}
      visible={true}
      onClose={close}
    />,
    div
  );

  return {
    close,
  };
};

// 按需引入
export { ImgViewer };
