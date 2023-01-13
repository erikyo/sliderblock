import BlazeSlider, { BlazeConfig } from 'blaze-slider';
import { useEffect, useRef } from '@wordpress/element';
import React from 'react';

export function useBlazeSlider( config: BlazeConfig | undefined ) {
	const sliderRef = useRef() as React.RefObject< HTMLElement >;
	const elRef = useRef() as React.RefObject< HTMLElement >;

	useEffect( () => {
		// if not already initialized
		if ( sliderRef?.current !== null )
			new BlazeSlider( elRef.current as HTMLElement, config );
	}, [] );

	return elRef;
}
