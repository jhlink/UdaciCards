module.exports = {
	env: {
		browser: true,
		es6: true
	},
	extends: ['eslint:recommended', 'plugin:react/recommended'],
	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 7,
		ecmaFeatures: {
			jsx: true
		},
		sourceType: 'module'
	},
	plugins: ['react', 'react-native'],
	rules: {
		indent: ['error', 2, { 'SwitchCase' : 1 } ],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
    'no-duplicate-imports': 'error',
		'no-console': 'off' ,
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    "react-native/no-inline-styles": 2,
    "react-native/no-color-literals": 2
	}
};
