export const create = ( html: string ) => {
	if ( ! html ) {
		return null;
	}

	const template = document.createElement( 'template' );

	template.innerHTML = html;

	return Array.from( template.content.childNodes );
}


export const extend = ( element: Element ) => {
	if ( '__genetiks__' in element ) {
		return element;
	}

	return Object.assign( element, {
		__genetiks__: performance.now(),
		on: ( ...args: Parameters<typeof element.addEventListener> ) => {
			args[ 0 ].split( ' ' ).forEach( ( eventName ) => {
				args[ 0 ] = eventName;

				element.addEventListener.apply( element, args );
			} );
		},
		off: ( ...args: Parameters<typeof element.removeEventListener> ) => {
			args[ 0 ].split( ' ' ).forEach( ( eventName ) => {
				args[ 0 ] = eventName;

				element.removeEventListener.apply( element, args );
			} );
		},
		attr: ( properties: Record<string, string> ) => {
			Object.entries( properties ).forEach( value => {
				element.setAttribute( ...value );
			} );
		},
		css: ( properties: Record<string, string> ) => {
			Object.assign( ( element as HTMLElement ).style, properties );
		}
	} );
};
