/** @type {import('eslint').Linter.FlatConfig[]} */
module.exports = [
	{
		files: ['**/*.js'],
		rules: {
			'no-unused-vars': 'warn',
			semi: ['error', 'always'],
		},
	},
]
