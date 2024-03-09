import { extend } from './element';


export const one = ( selector: string | Element | NodeListOf<Element> | Array<Element>, $context: ParentNode = document ) => {
	if ( ! selector || ! ( $context instanceof Node ) || ! [ 1, 9, 11 ].includes( $context.nodeType ) ) {
		return null;
	}

	if ( selector instanceof NodeList || Array.isArray( selector ) ) {
		return extend( selector[0] );
	}

	let element: Element | null;

	if ( selector instanceof Element ) {
		element = selector;
	} else {
		element = $context.querySelector( `:scope ${ selector }` );
	}

	return element ? extend( element ) : null;
};


export const many = ( selector: string | Element | NodeListOf<Element> | Array<Element>, $context: ParentNode = document ) => {
	if ( ! selector || ! ( $context instanceof Node ) || ! [ 1, 9, 11 ].includes( $context.nodeType ) ) {
		return null;
	}

	if ( selector instanceof Element ) {
		return [ extend( selector ) ];
	}

	let elements: NodeListOf<Element> | Element[] | null;

	if ( selector instanceof NodeList || Array.isArray( selector ) ) {
		elements = selector;
	} else {
		elements = $context.querySelectorAll( `:scope ${ selector }` );
	}

	return elements ? Array.from( elements ).map( element => extend( element ) ) : null;
};
