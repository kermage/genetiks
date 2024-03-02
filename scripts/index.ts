export const one = ( selector: string, $context: ParentNode = document ): Element | null => {
	if ( ! selector ) {
		return null;
	}

	const element = $context.querySelector( selector );

	return element ? extend( element ) : null;
};

export const many = ( selector: string, $context: ParentNode = document ): Element[] | null => {
	if ( ! selector ) {
		return null;
	}

	const elements = $context.querySelectorAll( selector );

	return elements ? Array.from( elements ).map( element => extend( element ) ) : null;
};

export const extend = ( element: Element ): Element => {
	return Object.assign( element, {
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
	} );
};
