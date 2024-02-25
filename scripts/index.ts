export const one = ( selector: string ): Element | null => {
	if ( ! selector ) {
		return null;
	}

	return document.querySelector( selector );
}

export const many = ( selector: string ): Element[] | null => {
	if ( ! selector ) {
		return null;
	}

	const elements = document.querySelectorAll( selector );

	return elements ? Array.from( elements ) : null;
}
