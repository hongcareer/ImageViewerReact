## SpecStory

## Functional Implementation for ImgViewer Component (3/3/2025, 6:23:35 PM)

_**User**_

添加函数式使用方法

---

_**Assistant**_

I'll help you add a functional usage method for the ImgViewer component. This typically involves creating a function that can be called to show the image viewer without having to manually mount the component.

```tsx:src/components/muk-ui/index.tsx
import ImgViewer from "./ImgViewer/index";
import { createImgViewer } from "./ImgViewer/functional";

// 按需引入
export { ImgViewer, createImgViewer };
```

You'll need to create a new file for the functional implementation. Let me provide a template for that:

```tsx:src/components/muk-ui/ImgViewer/functional.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import ImgViewer from './index';
import type { ImgViewerProps } from './index';

interface CreateImgViewerOptions extends Omit<ImgViewerProps, 'visible' | 'onClose'> {
  // Any additional options specific to the functional usage
}

export const createImgViewer = (options: CreateImgViewerOptions) => {
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
```

This implementation creates a function `createImgViewer` that:
1. Creates a new div element and appends it to the document body
2. Renders the ImgViewer component inside this div
3. Returns a control object with a `close` method to unmount the component
4. Automatically sets `visible` to true and handles the `onClose` event

Note: You might need to adjust the implementation based on your ImgViewer component's actual props and behavior. Also, if you're using React 18, you should use `createRoot` instead of `ReactDOM.render`.

---

_**User**_

直接在当前文件中添加

---

_**Assistant**_



我明白了，您希望直接在当前文件中添加函数式使用方法，而不是创建新文件。我将为您在当前文件中添加这个功能。

```tsx:src/components/muk-ui/index.tsx
import ImgViewer from "./ImgViewer/index";
import React from 'react';
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
```

这段代码直接在当前文件中添加了`createImgViewer`函数，它可以用于函数式调用ImgViewer组件。这个函数创建一个新的DOM元素，将ImgViewer组件渲染到其中，并返回一个包含close方法的对象，用于关闭和卸载组件。

注意：如果您使用的是React 18，应该使用`createRoot`而不是`ReactDOM.render`。另外，根据您的ImgViewer组件的实际属性，您可能需要调整options的类型定义。

---



---

