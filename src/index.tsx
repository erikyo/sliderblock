import React from 'react';
import { registerBlockVariation } from '@wordpress/blocks';
import { addFilter } from '@wordpress/hooks';

import { isActive, isSlider } from './utils';

/** add controls to manipulate attrs */
import withControls from './withControls';
import Save from './save';
import withEdit from './withEdit';

/** add styles to bundle */
import './style/style-admin.scss';

import {
	GALLERY_CORE_NAMESPACE,
	GALLERY_VARIATION_CLASSNAME,
	GALLERY_VARIATION_NAMESPACE,
} from './constants';

// get the default core gallery attributes
// const galleryCoreAttr =
// 	( registerBlockType( GALLERY_CORE_NAMESPACE, {} )?.attributes as any ) || {};

// console.log( galleryCoreAttr );

registerBlockVariation( GALLERY_CORE_NAMESPACE, {
	name: GALLERY_VARIATION_NAMESPACE,
	title: 'Slider block',
	description: 'A slider using the core gallery',
	isDefault: false,
	icon: 'universal-access-alt',
	keywords: [ 'slider' ],
	attributes: {
		className: GALLERY_VARIATION_CLASSNAME,
	},
	scope: [ 'inserter' ],
	isActive,
} );

/**
 * infiniteLoop editor block Editor scripts
 */
addFilter( 'editor.BlockEdit', GALLERY_CORE_NAMESPACE, withControls );

/** the edit function */
addFilter( 'editor.BlockListBlock', GALLERY_VARIATION_NAMESPACE, withEdit );

/**
 * infiniteLoop final markup
 */
addFilter( 'blocks.getSaveElement', GALLERY_VARIATION_NAMESPACE, Save );
