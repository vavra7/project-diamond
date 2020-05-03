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
		semi: 'warn',
		'no-undef': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/jsx-sort-props': [
			'warn',
			{
				noSortAlphabetically: true,
				shorthandLast: true,
				callbacksLast: true
			}
		],
		'react/button-has-type': 'warn',
		'react/no-deprecated': 'warn',
		'react/prefer-es6-class': ['warn', 'always'],
		'react/jsx-one-expression-per-line': ['warn', { allow: 'single-child' }]
	},
	overrides: [
		{
			files: ['*.js'],
			rules: {
				'@typescript-eslint/explicit-function-return-type': 'off'
			}
		}
	]
};
