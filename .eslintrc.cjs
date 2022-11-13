module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'plugin:react/recommended',
		'airbnb',
		'prettier',
		'plugin:react/jsx-runtime',
	],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
		'react/destructuring-assignment': ['off'],
		'react/prop-types': ['off'],
		'react/no-array-index-key': ['off'],
		'react/jsx-no-bind': ['off'],
		'jsx-a11y/label-has-associated-control': ['off'],
		'react/jsx-no-useless-fragment': ['off'],
	},
};
