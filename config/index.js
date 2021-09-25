'use strict';

module.exports = {
	'extends': 'stylelint-config-standard',
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
		'function-parentheses-space-inside': 'always',
		'function-url-quotes': [
			'always',
			{
				'except': [
					'empty'
				]
			}
		],
		'indentation': 'tab',
		'max-empty-lines': 3,
		'media-feature-parentheses-space-inside': 'always',
		"no-invalid-position-at-import-rule": null,
		'selector-pseudo-class-parentheses-space-inside': 'always',
		"scss/at-rule-no-unknown": [
			true,
			{
				"ignoreAtRules": [
					"tailwind",
					"apply",
					"layer",
					"variants",
					"responsive",
					"screen"
				]
			}
		],
		'value-list-max-empty-lines': 1
	}
};
