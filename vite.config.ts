import { defineConfig } from "vite"
import uni from "@dcloudio/vite-plugin-uni"
import viteEslint from "vite-plugin-eslint"
import path from "path"
import viteStylelint from "vite-plugin-stylelint"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [uni(), viteEslint({ failOnError: false, failOnWarning: true }), viteStylelint({ fix: true })],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src")
		}
	},
	css: {
		// css预处理器
		preprocessorOptions: {
			scss: {
				// 此处全局引入global.scss
				additionalData: '@import "./src/styles/global.scss";'
			}
		}
	},
	server: {
		proxy: {
			"/api": {
				target: "",
				changeOrigin: true,
				rewrite: path => {
					return path.replace(/^\/api/, "")
				}
			}
		}
	}
})
