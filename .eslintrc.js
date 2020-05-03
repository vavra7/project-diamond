module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},
	settings: {
		react: {
			version: 'detect'
		}
	},
	plugins: ['@typescript-eslint'],
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier/@typescript-eslint',
		'plugin:prettier/recommended'
	],
	rules: {
		semi: 1,
		'no-undef': 0,
		'react/react-in-jsx-scope': 0,
		'react/jsx-sort-props': [
			1,
			{
				noSortAlphabetically: true,
				shorthandLast: true,
				callbacksLast: true
			}
		],
		'react/button-has-type': 1,
		'react/no-deprecated': 1,
		'react/prefer-es6-class': [1, 'always'],
		'react/jsx-one-expression-per-line': [1, { allow: 'single-child' }],
		'@typescript-eslint/no-explicit-any': 0,
		'react/prop-types': 0
	},
	overrides: [
		{
			files: ['*.js'],
			rules: {
				'@typescript-eslint/explicit-function-return-type': 0
			}
		}
	]
};
