module.exports = {
	extends: [
		"stylelint-config-standard",
		"stylelint-config-recommended-scss",
		"stylelint-config-recommended-vue",
		"stylelint-config-prettier",
	],
	plugins: ["stylelint-order"],
	ignoreFiles: [
		"**/*.js",
		"**/*.jsx",
		"**/*.tsx",
		"**/*.ts",
		"**/*.json",
		"**/*.md",
	],
	rules: {
		"at-rule-no-unknown": [true, { // 禁止未知规则
			ignoreAtRules: ["function", "if", "else", "else-if", "each", "include", "mixin", "use"]
		}], 
		"at-rule-empty-line-before": ["always", { // 规则之前要求空行
				except: ["blockless-after-same-name-blockless", "first-nested"],
				ignore: ["after-comment"],
				ignoreAtRules: ["else", "else-if"]
			}
		],
		"color-hex-case": null, // 颜色hex大小写无要求
		"color-hex-length": null, // 不要求颜色单位长短
		"declaration-block-trailing-semicolon": null, // css语句末尾加分号 弃用风险
		"function-no-unknown": [true, { ignoreFunctions: ["map.get"] } ], // 禁止未知函数
		"import-notation": "string", // 使用string模式引入
		"no-empty-source": null, // 允许空格
		"no-descending-specificity": null,
		"no-duplicate-selectors": true, // 禁止重复标签
		"number-leading-zero": "always", // 禁止小数点前无0 弃用风险
		"property-no-unknown": true, // 禁止出现未知属性
		"rule-empty-line-before": "always", // 每个样式声明之间需要换行
		"selector-pseudo-class-no-unknown": true, // 禁止未知伪类选择器
		"selector-pseudo-element-no-unknown": true, // 禁止未知未知伪元素选择器
		"selector-type-no-unknown": null, // 允许未知选择器（微信标签）
		"string-quotes": "double", // 使用双引号 弃用风险
		"unit-case": "lower", // 单位使用小写 弃用风险
		"unit-no-unknown": [true, { ignoreUnits: ["rpx"] }], // 允许使用rpx单位
		"scss/at-import-partial-extension": "always", // import使用扩展名
		// "scss/no-global-function-names": null,
		
		"order/properties-order": [ // 顺序
			"position",
			"top",
			"right",
			"bottom",
			"left",
			"z-index",
			"display",
			"justify-content",
			"align-items",
			"flex-shrink",
			"float",
			"clear",
			"overflow",
			"overflow-x",
			"overflow-y",
			"width",
			"min-width",
			"max-width",
			"height",
			"min-height",
			"max-height",
			"padding",
			"padding-top",
			"padding-right",
			"padding-bottom",
			"padding-left",
			"margin",
			"margin-top",
			"margin-right",
			"margin-bottom",
			"margin-left",
			"font-size",
			"font-family",
			"text-align",
			"text-justify",
			"text-indent",
			"text-overflow",
			"text-decoration",
			"white-space",
			"color",
			"background",
			"background-position",
			"background-repeat",
			"background-size",
			"background-color",
			"background-clip",
			"border",
			"border-style",
			"border-width",
			"border-color",
			"border-top-style",
			"border-top-width",
			"border-top-color",
			"border-right-style",
			"border-right-width",
			"border-right-color",
			"border-bottom-style",
			"border-bottom-width",
			"border-bottom-color",
			"border-left-style",
			"border-left-width",
			"border-left-color",
			"border-radius",
			"opacity",
			"filter",
			"list-style",
			"outline",
			"visibility",
			"box-shadow",
			"text-shadow",
			"resize",
			"transition",
			"content",
		],
	},
}
