import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig( {
	entries: [ 'scripts/index' ],
	clean: true,
	declaration: true,
	failOnWarn: false,
	rollup: {
		emitCJS: true,
	}
} );
