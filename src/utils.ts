import BlazeSlider, { BlazeConfig } from 'blaze-slider';
import { useEffect, useRef } from '@wordpress/element';
import {
	defaultConfig,
	GALLERY_VARIATION_CLASSNAME,
	GALLERY_VARIATION_NAMESPACE,
} from './constants';
import { BlockAttributes } from '@wordpress/blocks';

export function useBlazeSlider( config?: BlazeConfig ) {
	const sliderRef = useRef< BlazeSlider >();
	const elRef = useRef< HTMLDivElement | null >( null );

	useEffect( () => {
		if ( ! sliderRef.current ) {
			sliderRef.current = new BlazeSlider( elRef.current!, config );
		}
	}, [] );

	return elRef;
}

/**
 * Search into block attributes for an item "namespace" that matches the slider variation name
 *
 * @param  attribute
 * @param  attribute.className
 * @return {boolean} true if the block is the slider
 */
export const isActive = ( { className }: BlockAttributes ) => {
	return className === GALLERY_VARIATION_CLASSNAME;
};

/**
 * Determines if the active variation is the slider (the core/gallery variation)
 *
 * @param  props
 * @param  props.className
 * @return {boolean} true if the variation is the slider
 */
export const isSlider = ( { className }: { className: string } ) => {
	return className === GALLERY_VARIATION_NAMESPACE;
};

export const getBlazeConfig = ( config: Record< string, any > ) => {
	return {
		all: {
			...config,
		},
		...defaultConfig,
	} as BlazeConfig;
};
