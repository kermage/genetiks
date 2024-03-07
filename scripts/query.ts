import { extend } from './element';


export const one = ( selector: string, $context: ParentNode = document ) => {
	if ( ! selector ) {
		return null;
	}

	const element = $context.querySelector( `:scope ${ selector }` );

	return element ? extend( element ) : null;
};


export const many = ( selector: string, $context: ParentNode = document ) => {
	if ( ! selector ) {
		return null;
	}

	const elements = $context.querySelectorAll( `:scope ${ selector }` );

	return elements ? Array.from( elements ).map( element => extend( element ) ) : null;
};
