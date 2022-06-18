'use strict';

module.exports = {
	'extends': 'stylelint-config-standard-scss',
	'plugins': 'stylelint-scss',
	'rules': {
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
		'block-closing-brace-newline-after': [
			'always-multi-line',
			{
				'ignoreAtRules': [
					'if',
					'else'
				]
			}
		],
		'function-url-quotes': [
			'always',
			{
				'except': [
					'empty'
				]
			}
		],
		'indentation': 'tab',
		'max-empty-lines': 2,
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
		'string-quotes': 'single',
		'value-list-max-empty-lines': 1
	}
};
