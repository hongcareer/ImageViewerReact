import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";
import requireTransform from 'vite-plugin-require-transform';
import { copyFileSync } from 'fs';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
		react(),
		requireTransform({
      fileRegex: /.vue$|.ts$/
    }),
    // 添加自定义插件来复制文件
    {
      name: 'copy-files',
      closeBundle() {
        const files = ['README.md', 'package.json'];
        const outDir = path.resolve(__dirname, 'image-viewer-react');
        
        files.forEach(file => {
          try {
            copyFileSync(
              path.resolve(__dirname, file),
              path.resolve(outDir, file)
            );
            console.log(`Copied ${file} to ${outDir}`);
          } catch (err) {
            console.error(`Failed to copy ${file}:`, err);
          }
        });
      }
    }
	],
  build: {
		outDir: "image-viewer-react", //输出文件名称
		lib: {
			entry: path.resolve(__dirname, "./src/components/muk-ui/index.tsx"), //指定组件编译入口文件
			name: "image-viewer-react",
			fileName: "index",
		}, //库编译模式配置
		rollupOptions: {
			// 确保外部化处理那些你不想打包进库的依赖
			external: ['react', 'react-dom'],
			output: {
				// 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
				globals: {
					react: "React",
				},
			},
		},
	},
})
