import { showToast } from "./common"
import { BASE_URL } from "@/config/env"

class Request {
	baseUrl: string
	header: Http.RequestHeader

	constructor() {
		this.baseUrl = BASE_URL
		this.header = {
			"content-type": "application/json"
		}
	}

	get(url: string, requestParam: AnyObject, hintType?: Http.HintType) {
		return this.request(url, "GET", requestParam, hintType || "toast")
	}

	post(url: string, requestParam: AnyObject, hintType?: Http.HintType) {
		return this.request(url, "POST", requestParam, hintType || "toast")
	}

	addHeader(key: string, value: string) {
		this.header[key] = value
	}

	showErrorMessage(hintType: Http.HintType, error: string) {
		if (hintType == "toast") {
			showToast(error)
		} else if (hintType == "modal") {
			uni.showModal({
				title: "提示",
				content: error,
				showCancel: false
			})
		}
	}

	private request(url: string, method: Http.Method, param: AnyObject, hintType: Http.HintType) {
		param.authorWsid = uni.getStorageSync("authorWsid")
		return new Promise<Http.Response>((resolve, reject) => {
			uni.request({
				header: this.header,
				method: method,
				url: this.baseUrl + url,
				data: param,
				timeout: 6000,
				success: response => {
					const result = response.data as Http.Response
					if (response.statusCode == 200) {
						// 成功
						resolve(result)
					} else {
						// 报错
						reject(result)
						this.showErrorMessage(hintType, result.msg)
						console.log("Request Error---", response.data)
					}
				},
				fail: error => {
					console.log("Request Error---", error)
					reject(error)
					this.showErrorMessage(hintType, error.errMsg)
				}
			})
		})
	}
}

const request = new Request()

export { request }
