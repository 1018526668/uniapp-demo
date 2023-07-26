import { createSSRApp } from "vue"
import App from "./App.vue"
import { store } from "./store"

export const createApp = function () {
	const app = createSSRApp(App)
	app.use(store)
	return {
		app
	}
}
