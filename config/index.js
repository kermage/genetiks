/** @type {import('stylelint').Config} */
export default {
	extends: 'stylelint-config-standard-scss',
	plugins: 'stylelint-scss',
	rules: {
		'at-rule-empty-line-before': [
			'always',
			{
				'except': [
					'blockless-after-same-name-blockless',
					'first-nested'
				],
				'ignore': [
					'after-comment'
				],
				'ignoreAtRules': [
					'else'
				]
			}
		],
		'at-rule-no-unknown': null,
		'function-url-quotes': [
			'always',
			{
				'except': [
					'empty'
				]
			}
		],
		'no-invalid-position-at-import-rule': null,
		'scss/at-rule-no-unknown': [
			true,
			{
				'ignoreAtRules': [
					'tailwind',
					'apply',
					'layer',
					'variants',
					'responsive',
					'screen'
				]
			}
		],
		'scss/dollar-variable-colon-space-after': 'at-least-one-space',
	}
};
