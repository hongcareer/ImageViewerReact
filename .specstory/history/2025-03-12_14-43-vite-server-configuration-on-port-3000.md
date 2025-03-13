## SpecStory

## Vite Server Configuration on Port 3000 (3/12/2025, 2:43:54 PM)

_**User**_

运行在3000端口

---

_**Assistant**_

要将您的 Vite 开发服务器配置为运行在 3000 端口，您需要在 `vite.config.ts` 文件中添加服务器配置。以下是需要进行的修改：

```ts:vite.config.ts
// ... existing code ...
export default defineConfig({
  plugins: [
    // ... existing code ...
  ],
  server: {
    port: 3000
  },
  build: {
    // ... existing code ...
  },
})
```

我添加了一个 `server` 配置对象，并设置了 `port: 3000`，这将使您的 Vite 开发服务器在启动时使用 3000 端口，而不是默认的 5173 端口。

如果您需要更多的服务器配置选项，比如设置主机、启用 HTTPS 或配置代理，也可以在 `server` 对象中添加这些配置。

---



---

