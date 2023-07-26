module.exports = {
	"env": {
		"browser": true,
		"es2021": true,
		"node": true
	},
	"globals": {
		"wx": "readonly",
		"uni": "readonly"
	},
	"extends": [
		"eslint:recommended",
		"plugin:vue/vue3-essential",
		"plugin:@typescript-eslint/recommended",
		"plugin:prettier/recommended"
	],
	"overrides": [],
	"parser": "vue-eslint-parser",
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module",
		"parser": "@typescript-eslint/parser"
	},
	"plugins": [
		"vue",
		"@typescript-eslint",
		"prettier"
	],
	"rules": {
		"indent": ["warn", "tab", { "ignoredNodes": ["ConditionalExpression"] }],
		"no-var": "error",
		"no-eval": "error",
		"no-alert": "error",
		"no-console": process.env.NODE_ENV === "production" ? "error" : "off",
		"no-debugger": "warn",
		"default-case": "error", // 要求 switch 语句中有 default 分支
		"quotes": ["warn", "double", { "allowTemplateLiterals": true }], // 使用单/双引号
		"no-extra-parens": "error", // 禁止不必要的括号
		"consistent-return": ["error", { "treatUndefinedAsUnspecified": false }], // 要求使用一致的 return 语句
		"default-case": "warn", // 要求 Switch 语句中有 Default 分支
		"curly": ["error", "multi-line"], // 多行语句使用大括号
		"no-empty-function": "error", // 禁止空函数
		"no-eq-null": "error", // 禁止与 null 进行比较, 必须使用 !== 和 ===
		"no-floating-decimal": "warn", // 禁止不必要的浮点小数
		"no-implied-eval": "error", // 禁用隐式的eval()
		"no-labels": "error", // 禁止标签语法 
		"no-lone-blocks": "error", // 禁用不必要的嵌套块
		"no-multi-spaces": "error", // 禁止不必要的空格
		"no-shadow": "off", // 禁止未使用变量
		"no-undef": "off", // 允许未知全局变量-防止ts声明报错
		"no-undef-init": "warn", // 禁止将变量初始化为 undefined
		"block-spacing": "error", // 括号前后加空格
		"brace-style": "error", // 强制在代码块中使用一致的大括号风格
		"camelcase": "error", // 强制使用驼峰命名
		"comma-dangle": ["error", "never"], // 禁止末尾逗号
		"comma-spacing": "error", // 逗号后强制空格
		"computed-property-spacing": ["warn", "never"], // 强制在计算的属性的方括号中使用一致的空格
		"func-style": ["error", "expression"], // declaration 或 expression 强制一致地使用 function 声明或表达式
		"indent": ["off", "tab"], // 使用tab缩进
		"key-spacing": "warn", // 对象key之后使用一致的空格
		"keyword-spacing": "warn", // 强制在关键字前后使用一致的空格
		"new-parens": "warn", // new对象需要有括号
		"no-lonely-if": "error", // 禁止 if 作为唯一的语句出现在 else 语句中
		"no-mixed-operators": "warn", // 禁止混合使用不同的操作符
		"no-nested-ternary": "warn", // 禁用嵌套的三元表达式
		"no-trailing-spaces": "error", // 禁用行尾空格
		"no-whitespace-before-property": "warn", // 禁止属性前有空白 
		"one-var": ["error", "never"], // 前置变量分开声明 
		"semi": ["error", "never"], // 不使用分号
		"space-in-parens": ["error", "never"], // 小括号前后不加空格
		"prefer-rest-params": "off",
		// ts
		"@typescript-eslint/array-type": ["warn", { "default": "array" }], // 数组声明使用Array<any> 而不是 any[]
		"@typescript-eslint/ban-ts-comment": "off", // 可以使用@ts-ignore注释
		"@typescript-eslint/no-explicit-any": "warn", // any警告
		"@typescript-eslint/triple-slash-reference": "off", // 启用三斜杠引用
		"@typescript-eslint/no-non-null-assertion": "off", // 允许非空声明赋值，防止onLoad报错
		// vue
		"vue/multi-word-component-names": "off", // 允许单词文件命名
		"vue/script-indent": "off", // 允许script缩进一行 原配置["warn", "tab", { "baseIndent": 1 }] 
		// prettier
		"prettier/prettier": "error",
		"arrow-body-style": "off",
		"prefer-arrow-callback": "off"
	}
}
