import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";
import requireTransform from 'vite-plugin-require-transform';
import { copyFileSync, writeFileSync, readFileSync } from 'fs';
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
        const outDir = path.resolve(__dirname, 'image-viewer-react');
        
        // 读取根目录的 package.json
        const rootPackageJson = JSON.parse(
          readFileSync(path.resolve(__dirname, 'package.json'), 'utf-8')
        );
        
        // 复制 README.md
        try {
          copyFileSync(
            path.resolve(__dirname, 'README.md'),
            path.resolve(outDir, 'README.md')
          );
          console.log(`Copied README.md to ${outDir}`);
        } catch (err) {
          console.error(`Failed to copy README.md:`, err);
        }

        // 创建适合发布的 package.json，版本号从根目录同步
        const publishPackageJson = {
          "name": rootPackageJson.name,
          "version": rootPackageJson.version,
          "main": "index.umd.js",
          "module": "index.mjs",
          "exports": {
            ".": {
              "import": "./index.mjs",
              "require": "./index.umd.js"
            },
            "./style.css": "./style.css"
          },
          "files": [
            "index.*.js",
            "index.*.mjs",
            "style.css",
            "README.md"
          ],
          "dependencies": {
            "better-scroll": "^2.5.1"
          },
          "peerDependencies": {
            "react": ">=16.8.0",
            "react-dom": ">=16.8.0"
          },
          "keywords": rootPackageJson.keywords,
          "author": rootPackageJson.author
        };

        try {
          writeFileSync(
            path.resolve(outDir, 'package.json'),
            JSON.stringify(publishPackageJson, null, 2)
          );
          console.log(`Created package.json v${rootPackageJson.version} for publishing in ${outDir}`);
        } catch (err) {
          console.error(`Failed to create package.json:`, err);
        }
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
