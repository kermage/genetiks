export const create = ( html: string ) => {
	if ( ! html ) {
		return null;
	}

	const template = document.createElement( 'template' );

	template.innerHTML = html;

	return Array.from( template.content.childNodes );
}


export const extend = ( element: Element | ExtendedElement ): ExtendedElement => {
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
		reset: () => element.parentNode?.replaceChild( element.cloneNode( true ), element ),
		wrap: ( wrapper: string ) => {
			const $wrapper = create( wrapper )?.find((node) => node.firstChild) as Element | null;

			if ( ! $wrapper ) {
				return;
			}

			let $inner = $wrapper.firstElementChild || $wrapper;

			while ( $inner.firstElementChild ) {
				$inner = $inner.firstElementChild;
			}

			element.before( $wrapper );
			$inner.appendChild( element );
		},
		trigger: ( eventName: string, detail?: any ) => {
			element.dispatchEvent( new CustomEvent( eventName, {
				detail,
				bubbles: true,
				cancelable: true,
			} ) );
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


export interface ExtendedElement extends Element {
	__genetiks__: DOMHighResTimeStamp;
	on: ( ...args: Parameters<Element['addEventListener']> ) => void;
	off: ( ...args: Parameters<Element['removeEventListener']> ) => void;
	reset: () => void;
	wrap: ( wrapper: string ) => void;
	trigger: ( eventName: string, detail?: any ) => void;
	attr: ( properties: Record<string, string> ) => void;
	css: ( properties: Record<string, string> ) => void;
}
