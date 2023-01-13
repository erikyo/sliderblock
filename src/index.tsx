import React from 'react';
import { registerBlockVariation } from '@wordpress/blocks';
import { addFilter } from '@wordpress/hooks';

/** add styles to bundle */
import './style/style-admin.scss';

/** the edit function */
import Edit from './edit';

import 'blaze-slider/dist/blaze.css';
import Save from './save';
import { GALLERY_VARIATION_NAMESPACE } from './constants';

// get the default core gallery attributes
// const galleryCoreAttr =
// 	( registerBlockType( 'core/gallery', {} )?.attributes as any ) || {};

// console.log( galleryCoreAttr );

registerBlockVariation( 'core/gallery', {
	name: GALLERY_VARIATION_NAMESPACE,
	title: 'Slider block',
	description: 'A slider using the core gallery',
	isDefault: false,
	keywords: [ 'slider' ],
	attributes: {
		namespace: GALLERY_VARIATION_NAMESPACE,
		className: 'block-slider',
		slidesToShow: 1,
		loop: true,
	},
	scope: [ 'inserter' ],
	isActive: ( { namespace } ) => {
		return namespace === GALLERY_VARIATION_NAMESPACE;
	},
} );

/**
 * infiniteLoop block Editor scripts
 */
addFilter( 'editor.BlockEdit', 'core/gallery', Edit );

/**
 * infiniteLoop final markup
 */
addFilter( 'editor.BlockEdit', GALLERY_VARIATION_NAMESPACE, Save );
