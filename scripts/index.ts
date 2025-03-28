import { one, many } from './query';
import { extend, create } from './element';

const delegates: Map<string, Map<string, Function>> = new Map();

const delegator = ( event: Event ) => {
	if ( ! delegates.has( event.type ) ) {
		return;
	}

	delegates.get( event.type )!.forEach( ( callback, selector ) => {
		if ( event.target instanceof Element && event.target.matches( selector ) ) {
			callback( event );
		}
	} );
}

export const delegate = ( event: string, selector: string, callback: Function ) => {
	if ( ! delegates.has( event ) ) {
		delegates.set( event, new Map() );
		document.addEventListener( event, delegator );
	}

	delegates.get( event )!.set( selector, callback );
}

export const sleep = ( ms: number ) => new Promise( resolve => setTimeout( resolve, ms ) );

export const tick = () => new Promise( resolve => requestAnimationFrame( resolve ) );

export { one, many, extend, create }
