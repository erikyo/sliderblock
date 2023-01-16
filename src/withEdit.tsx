import React from 'react';
import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { isActive, isSlider, useBlazeSlider } from './utils';
import {
	defaultConfig,
	GALLERY_CORE_NAMESPACE,
	GALLERY_VARIATION_NAMESPACE,
} from './constants';
import { BlazeConfig } from 'blaze-slider';

/**
 * The save function defines the way in which the different attributes should be combined into the final markup, which is then serialized into post_content.
 *
 * @param  props
 * @param  props.attributes - the block attributes
 * @function Object() { [native code] }
 */
const withEdit = createHigherOrderComponent( ( BlockListBlock ) => {
	return ( props ) => {
		if ( ! isActive( props.attributes ) )
			return <BlockListBlock { ...props } />;

		const { attributes }: Record< string, any > = props;

		const { blazeconfig }: Record< string, any > =
			attributes || defaultConfig.all;

		const newProps = {
			...props,
			wrapperProps: {
				...props.wrapperProps,
				blazeconfig: { ...blazeconfig },
			},
		};

		return <BlockListBlock { ...newProps } className={ 'blaze-track' } />;
	};
}, 'withEdit' );

export default withEdit;
