// import {ImgViewer,createImgViewer} from './components/muk-ui/index'
import {ImgViewer} from "./components/muk-ui"
import "../node_modules/img-viewer-react/style.css"; //引入组件样式
function App () {
  let ImgList = []
  ImgList = ["https://convergence-media.oss-cn-beijing.aliyuncs.com/picture/20240220_h8FmmZ_1708415056226.jpeg?width=690&height=664",
  "https://convergence-media.oss-cn-beijing.aliyuncs.com/picture/20240220_64Q53X_1708415056235.jpeg?width=690&height=664",
  "https://convergence-media.oss-cn-beijing.aliyuncs.com/picture/20240220_E7StWf_1708415056239.jpeg?width=640&height=640",
  "https://convergence-media.oss-cn-beijing.aliyuncs.com/picture/20240220_RzzhRh_1708415056244.jpeg?width=1000&height=1000",
  "https://convergence-media.oss-cn-beijing.aliyuncs.com/picture/20240220_HKSA8N_1708415056250.jpeg?width=640&height=640",
  "https://convergence-media.oss-cn-beijing.aliyuncs.com/picture/20240220_fW8H2y_1708415062302.jpeg?width=702&height=500"]
  
  const fullTool = [
    {
      icon: 'https://convergence-media.oss-cn-beijing.aliyuncs.com/picture/20240220_h8FmmZ_1708415056226.jpeg',
      func: otherFunc
    }
  ]
  function otherFunc () {
    console.log('this is other method');
  }
  const toolInfo = {
    layout: 'h',
    fullTool: fullTool,
    layoutChange: true,
    clickFunc: seeImg,
    smallClickFunc: smallClick
  }
  function seeImg (src) {
    console.log(src);
  }
  function smallClick (src) {
    console.log(src);
  }
  // createImgViewer({
  //   ImgList: ImgList,
  //   toolInfo: toolInfo
  // })
  return(
    <>
      <ImgViewer ImgList={ImgList} toolInfo={toolInfo}/>
    </>
  )
}
export default App