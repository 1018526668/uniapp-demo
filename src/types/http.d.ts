declare namespace Http {
	interface RequestHeader extends AnyObject {
		"content-type": string
		Authorization?: string
		"X-Requested-Token"?: string
		// SessionWsid
		Coockie?: string
	}

	type Method = "OPTIONS" | "GET" | "HEAD" | "POST" | "PUT" | "DELETE" | "TRACE" | "CONNECT"

	type HintType = "toast" | "modal" | "none"

	interface RequestObject {
		param?: any
		hintType?: "toast" | "modal" | "none"
	}

	interface Response extends UniApp.RequestSuccessCallbackResult {
		msg: string
		code: number
		data: any
		error?: any
	}
}
