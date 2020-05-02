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
	extends: ['plugin:react/recommended', 'plugin:@typescript-eslint/recommended'],
	rules: {
		semi: 'warn',
		'react/react-in-jsx-scope': 'off'
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
