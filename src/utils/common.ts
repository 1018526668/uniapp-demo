export const showLoading = (title: string, mask = true) => {
	return uni.showLoading({ title: title, mask: mask })
}

export const showToast = (title: string, duration = 2500, icon: "success" | "loading" | "error" | "none" = "none") => {
	return uni.showToast({
		title: title,
		duration: duration,
		icon: icon || "none"
	})
}
