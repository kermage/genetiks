export const one = ( selector: string, $context: ParentNode = document ): Element | null => {
	if ( ! selector ) {
		return null;
	}

	return $context.querySelector( selector );
};

export const many = ( selector: string, $context: ParentNode = document ): Element[] | null => {
	if ( ! selector ) {
		return null;
	}

	const elements = $context.querySelectorAll( selector );

	return elements ? Array.from( elements ) : null;
};
