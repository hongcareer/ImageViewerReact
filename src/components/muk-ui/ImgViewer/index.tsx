import React, { useState, useRef, useEffect } from 'react'
import './viewer.less'
import BScroll from 'better-scroll'
import IR from '../icon/img-rotate.png'
import IN from '../icon/img-zoomin.png'
import IO from '../icon/img-zoomout.png'
import RC from '../icon/r-c.png'
import LC from '../icon/l-c.png'

function ImgViewer(props) {
  const ImgWrapper = useRef(null)
  const ImgRef = useRef(null)
  const SmallImgRef = useRef(null)
  const ImgList = props.ImgList
  let [imgIndex,setImgIndex] = useState(0)
  let [scale,setScale] = useState(1)
  let [rotateDeg,setRotateDeg] = useState(0)
  let [height,setHeight] = useState(0)
  let [width,setWidth] = useState(0)
  let flag =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i.test(window.navigator.userAgent) ||
  document.documentElement.clientWidth < 744
  let [layout, setLayout] = useState(ImgList.length == 1 || flag?'h':props.toolInfo.layout) 
  const containerRef = useRef(null)

  const heightinit = containerRef.current?.clientHeight
  const widthinit = containerRef.current?.clientWidth
  useEffect(() => {
    console.log(heightinit,widthinit);
    setHeight(heightinit)
    setWidth(widthinit)
  },[heightinit,widthinit])
  const toolself = [
    {
      icon: IR,
      func: handleRotate
    },
    {
      icon: IN,
      func: onMouseWheel,
      type: 'in'
    },
    {
      icon: IO,
      func: onMouseWheel,
      type: 'out'
    },
  ]
  const toolBar = [...toolself,...props.toolInfo.fullTool]
  function changeImg (index) {
    setImgIndex(index)
    props.toolInfo.smallClickFunc(ImgList[index],index)
  }
  const BS2 = useRef(null);
  const onBScroll = (dir?) => {
    let dirCurrent = dir?dir:layout
    if (props.ImgList.length > 1) {
      if (dirCurrent == 'h') {
        BS2.current = new BScroll('.small-list', {
          scrollX: true,
          eventPassthrough: "vertical",
          probeType: 3,
        })
      } else {
        BS2.current = new BScroll('.small-list', {
          scrollY: true,
          probeType: 3,
        })
      }
      BS2.current.refresh()
    }
  }
  let slideImg = useRef([])
  useEffect(() => {
    // 仅在 ImgList 的长度变化时调用 onBScroll
    if (props.ImgList.length !== slideImg.current?.length) {
        onBScroll();
    }
    slideImg.current = SmallImgRef.current ? Array.from(SmallImgRef.current) : null;    
  }, [props.ImgList]);
  async function changeLayout () {
    let layoutB = layout
    if (layout == 'h') {
      layoutB = 'v'
    } else {
      layoutB = 'h'
    }
    setLayout(layoutB)
    BS2.current.scrollTo(0, 0, 300)
    setTimeout(() => {
      onBScroll(layoutB)
    },2000)
  }
  function handleChangeIndex (type) {  
    if (type == 'r') {
      if (imgIndex >= ImgList.length-1) {
        setImgIndex(ImgList.length-1)
        return 
      }
      setImgIndex(++imgIndex)
      if (layout == 'v' && slideImg.current[imgIndex]) {
        bottom()
      } else if (slideImg.current[imgIndex]) {
        right()
      }
    } else if (type == 'l') {
      if (imgIndex <= 0) {
        setImgIndex(0)
        return
      }
      setImgIndex(--imgIndex)
      if (layout == 'v' && slideImg.current[imgIndex]) {
        top()
      } else if (slideImg.current[imgIndex]) {
        left()
      }
    }
    props.toolInfo.arrowFunc(imgIndex)
  }
  function bottom () {   
    let target = slideImg.current[imgIndex][1]
    let pos = update(target,10,height-10,'bottom','top')
    console.log(pos,height-target.offsetTop-100);
    if (pos[0] === 'lower') {
      BS2.current!.scrollTo(0, height-target.offsetTop-100, 300)
    } else if (pos[0] === 'upper' || pos[2] < 92) {
      BS2.current!.scrollTo(0, -target.offsetTop + 28, 300)
    }
  }
  function top () {
    let target = slideImg.current[imgIndex][1]
    let pos = update(target,10,height-10,'top')
    if (pos[0] === 'upper') {
      BS2.current.scrollTo(0, -target.offsetTop, 300)
    }
  }
  function right () {
    let target = slideImg.current[imgIndex][1]
    let pos = update(target,0,width,'right','left')  
    if (pos[0] === 'right') {
      BS2.current.scrollTo(width - target.offsetLeft - 120, 0, 300)
    } else if (pos[0] === 'left' || pos[2] < 92 ) {
      BS2.current.scrollTo(-target.offsetLeft + 28, 0, 300)
    }
  }
  function left () {
    let target = slideImg.current[imgIndex][1]
    let pos = update(target,10,width,'left')
    if (pos[0] === 'left') {
      BS2.current.scrollTo(-target.offsetLeft, 0, 300)
    }
  }
  // 判断元素所在屏幕位置：屏幕左-'left', 屏幕中-'in', 屏幕右-'right'
  function update(target, compareLowerValue, compareUuperValue, type, number) {
    const rect = target.getBoundingClientRect();
    const containerRect = containerRef.current?.getBoundingClientRect(); // 获取 containerRef 的位置
    console.log(rect);
    return [
      rect[type] < containerRect.left ? 'left' :
      rect[type] < containerRect.right ? 'in' : 'right',
      rect[type],
      rect[number]
    ];
  }
  // PC端缩放、拖拽
  function handleMouseWheel(event:any) {
    const delta = Math.sign(-event.deltaY); // 获取滚轮滚动的方向
    const scaleNum = scale + (0.1 * delta);
    const roundedScaleNum = Math.round(scaleNum * 100) / 100; // 四舍五入到小数点后两位
    const newScale = Math.max(roundedScaleNum, 0.1); // 确保 scale 不小于 0.1
    setScale(newScale);
    console.log(newScale);
    
    event.target.style.transform = `translateX(-50%) translateY(-50%) scale(${newScale}) rotate(${rotateDeg}deg)`;
  }
  function onMouseWheel(type) {
    console.log(type);
    let scaleNum = scale
      if (type == 'in') {
        scaleNum = scale + 0.1
      } else {
        scaleNum = scale - 0.1
      }
    setScale(scaleNum)
    if (scaleNum <= 0.1 || scaleNum >= 10) {
      // 限制比例值在合理范围内
      scaleNum = Math.max(Math.min(scaleNum, 10), 0.1);
      setScale(scaleNum)
    }
    ImgRef.current.style.transform = `translateX(-50%) translateY(-50%) scale(${scaleNum}) rotate(${rotateDeg}deg)`
  }
  function handleRotate () {
    const number = rotateDeg+90
    setRotateDeg(number)
    ImgRef.current.style.transform = `translateX(-50%) translateY(-50%) scale(${scale}) rotate(${number}deg)`
  }
  let isDragging = false;
  let startPosX = 0;
  let startPosY = 0;
  function moveImg (e) {
    let img = e.target
    let x = e.pageX - img.offsetLeft
    let y = e.pageY - img.offsetTop
    // 判断是点击事件还是拖拽事件
    isDragging = false;
    startPosX = e.clientX;
    startPosY = e.clientY;
    ImgWrapper.current.addEventListener('mousemove', move)
    function move(e) {
      if (Math.abs(e.clientX - startPosX) > 10 || Math.abs(e.clientY - startPosY) > 10) {
        isDragging = true;
        img.style.left = e.pageX - x + 'px'
        img.style.top = e.pageY - y + 'px'
      } else {
        isDragging = false;
      }
    }
    // 添加鼠标抬起事件，鼠标抬起，将事件移除
    window.addEventListener('mouseup', (e) => {
      if (!isDragging) {
        props.toolInfo.clickFunc(e.target.currentSrc)
      }
      ImgWrapper.current.removeEventListener('mousemove', move)
    })
  }

  // 移动端拖拽、
  //绑定触屏事件
  let touchState = null
  const targetDom = useRef(null)
  const startMX = useRef(0)
  const startMY = useRef(0)
  const touchLength = useRef(1)
  //记录触屏触点坐标 记录起始和结束点
  function onTouchStart(evt) {
    targetDom.current = evt.target
    touchLength.current = evt.touches.length
    if (touchLength.current == 1) {
      startMX.current = evt.changedTouches[0].clientX - targetDom.current.offsetLeft;
      startMY.current = evt.changedTouches[0].clientY - targetDom.current.offsetTop
      isDragging = false;
      startPosX = evt.changedTouches[0].clientX;
      startPosY = evt.changedTouches[0].clientX;
    } else {
      touchState = {
          //多点触屏的第一点
          startX: evt.touches[0].pageX,
          startY: evt.touches[0].pageY,
          endX: evt.touches[0].pageX,
          endY: evt.touches[0].pageY,
          //多点触屏的第二点  单点触屏时记录坐标为 -1 
          startX2: evt.touches[1] ? evt.touches[1].pageX : -1,
          startY2: evt.touches[1] ? evt.touches[1].pageY : -1,
          endX2: evt.touches[1] ? evt.touches[1].pageX : -1,
          endY2: evt.touches[1] ? evt.touches[1].pageY : -1
      };
    }
  }
  //记录触屏触点坐标 触屏移动时更新结束点坐标
  function onTouchMove(evt) {
    let target = targetDom.current
    if (touchLength.current == 1) {
      let xnum = evt.changedTouches[0].clientX
      let ynum = evt.changedTouches[0].clientY
      if (Math.abs(xnum- startPosX) > 10 || Math.abs(ynum - startPosY) > 10) {
        isDragging = true
        const deltaX = xnum - startMX.current;
        const deltaY = ynum - startMY.current;
        targetDom.current.style.left = deltaX + 'px'
        targetDom.current.style.top = deltaY + 'px'
      } else {
        isDragging = false
      }    
    } else {
      if (touchState === null) {
        return;
      }
      touchState.endX = evt.touches[0].pageX;
      touchState.endY = evt.touches[0].pageY;
      touchState.endX2 = evt.touches[1] ? evt.touches[1].pageX : -1;
      touchState.endY2 = evt.touches[1] ? evt.touches[1].pageY : -1;
      // //计算两点间距离
      var getDistance = function (startX, startY, endX, endY) {
          return Math.hypot(endX - startX, endY - startY);
      };
      if (touchState.startX2 != -1 && touchState.endX2 != -1 && touchState.startY2 != -1 && touchState.endY2 != -1) {
          let distanceStart = getDistance(touchState.startX, touchState.startY, touchState.startX2, touchState.startY2);
          let distanceEnd = getDistance(touchState.endX, touchState.endY, touchState.endX2, touchState.endY2);
          //起始时两点距离和结束时两单距离进行比较，判断是方法还是缩小
          if (distanceStart < distanceEnd) { //放大
            if (scale <= 4 ) {
              scale += 0.03          }
          } else if (distanceStart > distanceEnd) { //缩小
            if (scale >= 0.6) {
              scale -= 0.03
            }
          }
          handleScale(scale,evt)
      }
    }
  }
  //触屏结束时 判断是否放大缩小 防止缩放的时候屏幕抖动
  function onTouchEnd(evt) {
    if (touchState === null) {
        return;
    }
  };
  function handleScale(scale,event) {
    event.target.style.transform = `translateX(-50%) translateY(-50%) scale(${scale}) rotate(${rotateDeg}deg)`
  }
  function getImageUrl (name) {
      return new URL(name, import.meta.url).href
  }
  function getMap() {
    if (!SmallImgRef.current) {
      // 首次运行时初始化 Map。
      SmallImgRef.current = new Map();
    }
    return SmallImgRef.current;
  }
  return (
    <>
      <div className={'container '+(layout == 'h'?'active':'')} ref={containerRef}>
        {
          props.toolInfo.layoutChange && props.ImgList.length > 1 && !flag?
          <div onClick={changeLayout} className={'horv '+(layout == 'h'?'active':'')}>
            <div className="v"></div>
            <div className="h"></div>
          </div>:''
        }
        <div ref={ImgWrapper} className={'img-wraper '+(layout == 'h'?'active':'')}>
          <img className="v-img"
            onWheel={handleMouseWheel}
            onMouseDown={moveImg}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            src={ImgList[imgIndex]}
            ref={ImgRef}
          />
          <img src={RC} onClick={handleChangeIndex.bind(null,'l')} className="img-l"/>
          <img src={LC} onClick={handleChangeIndex.bind(null,'r')} className="img-l"/>
        </div>
        <div className={'rightSmall '+(layout == 'h'?'active':'')}>
          <div className={'toolbar '+(layout == 'h'?'active':'')}>
            {
              toolBar.map((tool) => {
                return <div className="tool-wrapper">
                  <img src={tool.icon} alt="" onClick={tool.func.bind(null,tool.type)}/>
                </div>
              })
            }
          </div>
          {
            props.ImgList.length >= 1 ? 
            <div className={'small-list '+(layout == 'h'?'active':'')}>
              <div className={'img-list '+(layout == 'h'?'active':'')}
                style={{
                  width: layout == 'h' ? 82*ImgList.length + 18 + 'px':'',
                  height: layout == 'v' ? 82*ImgList.length + 18 + 'px':''
                }}
              >
                {
                  ImgList.map((img,index) => {
                    return <img src={img} onClick={changeImg.bind(null,index)}
                      key={index}
                      ref={(node) => {
                        const map = getMap();
                        if (node) {
                          map.set(img, node);
                        } else {
                          map.delete(img);
                        }
                      }}
                      className={(index == imgIndex?'imgA ':'')+(layout == 'h'?'active':'')}
                    />
                  })
                }
              </div>
            </div>:''
          }
        </div>
      </div>
    </>
  )
}

export default ImgViewer