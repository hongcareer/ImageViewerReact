// import {ImgViewer,createImgViewer} from 'img-viewer-react/index.umd.js'
import {ImgViewer} from "./components/muk-ui"
// import "img-viewer-react/style.css";
import { useEffect, useState } from 'react';

function App () {
  const [ImgList, setImgList] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        setImgList([
          // "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9IiYjMjI5OyYjMTU1OyYjMTkwOyYjMjMwOyYjMTYwOyYjMTM1Oy8mIzIyOTsmIzE2MTsmIzE3MTsmIzIyOTsmIzEzMzsmIzEzMzsvRmlsZVdvcmRGaWxsZWQmIzIzOTsmIzE4ODsmIzEzNjt3b3JkJiMyMzA7JiMxNTA7JiMxMzU7JiMyMjg7JiMxODc7JiMxODI7JiMyMzA7JiMxNTA7JiMxMzU7JiMyMzA7JiMxNjE7JiMxNjM7JiMyMzk7JiMxODg7JiMxMzc7Ij4KPHBhdGggaWQ9IlN1YnRyYWN0IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI0Ljc5NzEgMS42Njc5N0gxMC4wMDA2QzguNDQ3NTIgMS42Njc5NyA3LjY3MDk4IDEuNjY3OTcgNy4wNTg0MyAxLjkyMTY5QzYuMjQxNjggMi4yNTk5OSA1LjU5Mjc4IDIuOTA4ODcgNS4yNTQ0NSAzLjcyNTZDNS4wMDA3IDQuMzM4MTQgNS4wMDA2NyA1LjExNDY4IDUuMDAwNiA2LjY2Nzc3TDQuOTk5NTEgMzMuMzM0NEM0Ljk5OTQ1IDM0Ljg4NzYgNC45OTk0MiAzNS42NjQyIDUuMjUzMTQgMzYuMjc2OEM1LjU5MTQ0IDM3LjA5MzYgNi4yNDAzNiAzNy43NDI2IDcuMDU3MTQgMzguMDgwOUM3LjY2OTcyIDM4LjMzNDYgOC40NDYzMiAzOC4zMzQ2IDkuOTk5NTEgMzguMzM0NkgyOS45MTczQzMxLjQ2NTQgMzguMzM0NiAzMi4yMzk0IDM4LjMzNDYgMzIuODUwNyAzOC4wODIxQzMzLjY2NTkgMzcuNzQ1MyAzNC4zMTQzIDM3LjA5OTIgMzQuNjU0IDM2LjI4NTNDMzQuOTA4OCAzNS42NzQ5IDM0LjkxMTcgMzQuOTAwOSAzNC45MTczIDMzLjM1MjhMMzQuOTk1NSAxMS44NzU1QzM0Ljk5NjggMTEuNTM0MyAzNC45OTc0IDExLjM2MzYgMzQuOTY1NiAxMS4yMDE4QzM0LjkyMzMgMTAuOTg2IDM0LjgzODcgMTAuNzgwNyAzNC43MTY3IDEwLjU5NzhDMzQuNjI1MiAxMC40NjA2IDM0LjUwNDYgMTAuMzM5OSAzNC4yNjMzIDEwLjA5ODZMMjYuNTY0OSAyLjQwMDJDMjYuMzI0OCAyLjE2MDEgMjYuMjA0NyAyLjA0MDA1IDI2LjA2ODIgMS45NDg4NUMyNS44ODYzIDEuODI3MjYgMjUuNjgyMSAxLjc0MjY5IDI1LjQ2NzQgMS42OTk5OUMyNS4zMDY0IDEuNjY3OTcgMjUuMTM2NyAxLjY2Nzk3IDI0Ljc5NzEgMS42Njc5N1pNMjQuMTY1OSA3Ljc4OTIzQzI0LjE2NTkgNi43ODIyNiAyNC4xNjU5IDYuMjc4NzcgMjQuMzM0NCA2LjAyNjU1QzI0LjU1OTIgNS42OTAyNSAyNC45NjQzIDUuNTIyNDMgMjUuMzYxIDUuNjAxMzRDMjUuNjU4NSA1LjY2MDUyIDI2LjAxNDUgNi4wMTY1MyAyNi43MjY2IDYuNzI4NTZMMjYuNzI2NiA2LjcyODU4TDI5LjkzODYgOS45NDA2QzMwLjY1MDYgMTAuNjUyNiAzMS4wMDY2IDExLjAwODcgMzEuMDY1OCAxMS4zMDYyQzMxLjE0NDcgMTEuNzAyOSAzMC45NzY5IDEyLjEwOCAzMC42NDA2IDEyLjMzMjdDMzAuMzg4NCAxMi41MDEzIDI5Ljg4NDkgMTIuNTAxMyAyOC44Nzc5IDEyLjUwMTNIMjguODc3OUwyNS42NjU5IDEyLjUwMTJDMjUuMiAxMi41MDEyIDI0Ljk2NyAxMi41MDEyIDI0Ljc4MzIgMTIuNDI1MUMyNC41MzgyIDEyLjMyMzYgMjQuMzQzNSAxMi4xMjg5IDI0LjI0MiAxMS44ODM5QzI0LjE2NTkgMTEuNzAwMSAyNC4xNjU5IDExLjQ2NzIgMjQuMTY1OSAxMS4wMDEyVjcuNzg5MjNaTTI4LjMzMzEgMTcuNDk5NEgyNS41NDc5TDIzLjc5NDkgMjUuMjE1NEwyMy4zOTQ1IDI3LjI1OTdMMjIuOTk0MSAyNS4xMzRMMjEuNDM2OSAxNy40OTk0SDE4LjU0NDlMMTcuMDY3OCAyNS4xNzkyTDE2LjY4NTEgMjcuMjU5N0wxNi4zMTE0IDI1LjEzNEwxNC41NzYyIDE3LjQ5OTRIMTEuNjY2NEwxNS4zODYgMzAuODMyOEgxNy45MzA5TDE5LjUxNDggMjMuMDM1NEwxOS45Nzc1IDIwLjQ1NzRMMjAuNDQwMiAyMy4wMzU0TDIyLjAyNDIgMzAuODMyOEgyNC42NDAzTDI4LjMzMzEgMTcuNDk5NFoiIGZpbGw9IiMwMDczRTUiLz4KPC9nPgo8L3N2Zz4K",
          // "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9IiYjMjI5OyYjMTU1OyYjMTkwOyYjMjMwOyYjMTYwOyYjMTM1Oy8mIzIyOTsmIzE2MTsmIzE3MTsmIzIyOTsmIzEzMzsmIzEzMzsvRmlsZVdvcmRGaWxsZWQmIzIzOTsmIzE4ODsmIzEzNjt3b3JkJiMyMzA7JiMxNTA7JiMxMzU7JiMyMjg7JiMxODc7JiMxODI7JiMyMzA7JiMxNTA7JiMxMzU7JiMyMzA7JiMxNjE7JiMxNjM7JiMyMzk7JiMxODg7JiMxMzc7Ij4KPHBhdGggaWQ9IlN1YnRyYWN0IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI0Ljc5NzEgMS42Njc5N0gxMC4wMDA2QzguNDQ3NTIgMS42Njc5NyA3LjY3MDk4IDEuNjY3OTcgNy4wNTg0MyAxLjkyMTY5QzYuMjQxNjggMi4yNTk5OSA1LjU5Mjc4IDIuOTA4ODcgNS4yNTQ0NSAzLjcyNTZDNS4wMDA3IDQuMzM4MTQgNS4wMDA2NyA1LjExNDY4IDUuMDAwNiA2LjY2Nzc3TDQuOTk5NTEgMzMuMzM0NEM0Ljk5OTQ1IDM0Ljg4NzYgNC45OTk0MiAzNS42NjQyIDUuMjUzMTQgMzYuMjc2OEM1LjU5MTQ0IDM3LjA5MzYgNi4yNDAzNiAzNy43NDI2IDcuMDU3MTQgMzguMDgwOUM3LjY2OTcyIDM4LjMzNDYgOC40NDYzMiAzOC4zMzQ2IDkuOTk5NTEgMzguMzM0NkgyOS45MTczQzMxLjQ2NTQgMzguMzM0NiAzMi4yMzk0IDM4LjMzNDYgMzIuODUwNyAzOC4wODIxQzMzLjY2NTkgMzcuNzQ1MyAzNC4zMTQzIDM3LjA5OTIgMzQuNjU0IDM2LjI4NTNDMzQuOTA4OCAzNS42NzQ5IDM0LjkxMTcgMzQuOTAwOSAzNC45MTczIDMzLjM1MjhMMzQuOTk1NSAxMS44NzU1QzM0Ljk5NjggMTEuNTM0MyAzNC45OTc0IDExLjM2MzYgMzQuOTY1NiAxMS4yMDE4QzM0LjkyMzMgMTAuOTg2IDM0LjgzODcgMTAuNzgwNyAzNC43MTY3IDEwLjU5NzhDMzQuNjI1MiAxMC40NjA2IDM0LjUwNDYgMTAuMzM5OSAzNC4yNjMzIDEwLjA5ODZMMjYuNTY0OSAyLjQwMDJDMjYuMzI0OCAyLjE2MDEgMjYuMjA0NyAyLjA0MDA1IDI2LjA2ODIgMS45NDg4NUMyNS44ODYzIDEuODI3MjYgMjUuNjgyMSAxLjc0MjY5IDI1LjQ2NzQgMS42OTk5OUMyNS4zMDY0IDEuNjY3OTcgMjUuMTM2NyAxLjY2Nzk3IDI0Ljc5NzEgMS42Njc5N1pNMjQuMTY1OSA3Ljc4OTIzQzI0LjE2NTkgNi43ODIyNiAyNC4xNjU5IDYuMjc4NzcgMjQuMzM0NCA2LjAyNjU1QzI0LjU1OTIgNS42OTAyNSAyNC45NjQzIDUuNTIyNDMgMjUuMzYxIDUuNjAxMzRDMjUuNjU4NSA1LjY2MDUyIDI2LjAxNDUgNi4wMTY1MyAyNi43MjY2IDYuNzI4NTZMMjYuNzI2NiA2LjcyODU4TDI5LjkzODYgOS45NDA2QzMwLjY1MDYgMTAuNjUyNiAzMS4wMDY2IDExLjAwODcgMzEuMDY1OCAxMS4zMDYyQzMxLjE0NDcgMTEuNzAyOSAzMC45NzY5IDEyLjEwOCAzMC42NDA2IDEyLjMzMjdDMzAuMzg4NCAxMi41MDEzIDI5Ljg4NDkgMTIuNTAxMyAyOC44Nzc5IDEyLjUwMTNIMjguODc3OUwyNS42NjU5IDEyLjUwMTJDMjUuMiAxMi41MDEyIDI0Ljk2NyAxMi41MDEyIDI0Ljc4MzIgMTIuNDI1MUMyNC41MzgyIDEyLjMyMzYgMjQuMzQzNSAxMi4xMjg5IDI0LjI0MiAxMS44ODM5QzI0LjE2NTkgMTEuNzAwMSAyNC4xNjU5IDExLjQ2NzIgMjQuMTY1OSAxMS4wMDEyVjcuNzg5MjNaTTI4LjMzMzEgMTcuNDk5NEgyNS41NDc5TDIzLjc5NDkgMjUuMjE1NEwyMy4zOTQ1IDI3LjI1OTdMMjIuOTk0MSAyNS4xMzRMMjEuNDM2OSAxNy40OTk0SDE4LjU0NDlMMTcuMDY3OCAyNS4xNzkyTDE2LjY4NTEgMjcuMjU5N0wxNi4zMTE0IDI1LjEzNEwxNC41NzYyIDE3LjQ5OTRIMTEuNjY2NEwxNS4zODYgMzAuODMyOEgxNy45MzA5TDE5LjUxNDggMjMuMDM1NEwxOS45Nzc1IDIwLjQ1NzRMMjAuNDQwMiAyMy4wMzU0TDIyLjAyNDIgMzAuODMyOEgyNC42NDAzTDI4LjMzMzEgMTcuNDk5NFoiIGZpbGw9IiMwMDczRTUiLz4KPC9nPgo8L3N2Zz4K",
          "https://aihelper-test.haier.net/obs-zzxzsb/ai/92f9125d5c874632bd7e83ec29d9fde7.png",
          "https://aihelper-test.haier.net/obs-zzxzsb/ai/e3e6f881083a4507b9c78d6538333e0b.png",
          "https://aihelper-test.haier.net/obs-zzxzsb/ai/e5968772cd9e4da7a1539de0870d1d9b.png",
          "https://aihelper-test.haier.net/obs-zzxzsb/ai/c23927a16db54901b7e227d07bdf73f7.jpg",
          "https://aihelper-test.haier.net/obs-zzxzsb/ai/e3ef6e1573d8471b8ee625bc8e0a39f1.jpg",
          "https://aihelper-test.haier.net/obs-zzxzsb/ai/74e3d2ec1a564b74ac5271d9fbbe83c2.png",
          "https://aihelper-test.haier.net/obs-zzxzsb/ai/3021faa736d449ea992d0fa4235c0aff.jpg",
          "https://aihelper-test.haier.net/obs-zzxzsb/ai/4c3c12a2d86a4df2882373fa62e6c30b.png"
        ]);
      }, 3000);
    };
    fetchData();
  }, []);

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
  function smallClick (src,index) {
    console.log(src,index);
  }
  // createImgViewer({
  //   ImgList: ImgList,
  //   toolInfo: toolInfo
  // })
  return(
    <div style={{width: '100vw', height: '100vh', backgroundColor: 'red',marginLeft: '25vw'}}>
      <ImgViewer ImgList={ImgList} toolInfo={toolInfo}/>
    </div>
  )
}
export default App