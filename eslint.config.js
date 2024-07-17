/** @type {import('eslint').Linter.FlatConfig[]} */
module.exports = [
	{
		files: ['**/*.js'],
		languageOptions: {
			ecmaVersion: 2024,
			sourceType: 'module',
		},
		rules: {
			'no-unused-vars': 'off',
			semi: ['error', 'never'],
		},
	},
]
