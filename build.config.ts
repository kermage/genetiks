import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig( {
	entries: [
		{
			input: 'scripts/index',
			name: 'index',
		}
	],
	outDir: './',
	clean: false,
	declaration: true,
	rollup: {
		emitCJS: true,
	}
} );
