### 安装
image viewer for react

npm install img-viewer-react
### 引入
### 在页面中中引入
```
import { ImgViewer, createImgViewer } from "img-viewer-react/index.mjs";
import "@/node_modules/img-viewer-react/style.css"; //引入组件样式
```


### 在页面中使用
```
function App () {
  let ImgList = [] // 图片链接
  const fullTool = [
    {
      icon: '', // 使用在线连接
      func: otherFunc
    }
  ]
  function otherFunc () {
    console.log('this is other method');
  }
  const toolInfo = {
    layout: 'v', // 布局 h/v
    fullTool: fullTool,
    layoutChange: true, // 是否可以更改布局
    clickFunc: seeImg, // 图片的点击事
  }
  function seeImg (src) {
    // console.log(src);
  }
  // 函数式调用
  createImgViewer({
    ImgList: ImgList,
    toolInfo: toolInfo
  })
  return(
    <>
      {/* 组件式调用 */}
      {/* <ImgViewer ImgList={ImgList} toolInfo={toolInfo}/> */}
    </>
  )
}
export default App
```