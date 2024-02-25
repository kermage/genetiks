import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig( {
	entries: [ 'scripts/index' ],
	clean: true,
	declaration: true,
	rollup: {
		emitCJS: true,
	}
} );
