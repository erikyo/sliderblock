import './style/style.scss';

import React from 'react';
import { isActive } from './utils';
import BlazeControls from './Components/Controls';
import { BlockAttributes } from '@wordpress/blocks';

/**
 * The save function defines the way in which the different attributes should be combined into the final markup, which is then serialized into post_content.
 *
 * @param  element
 * @param  blockType
 * @param  attributes
 * @function Object() { [native code] }
 */
export const Save = (
	element: JSX.Element,
	blockType: string,
	attributes: BlockAttributes
) => {
	if ( ! isActive( attributes ) ) return element;

	const sliderProps = JSON.stringify( { ...attributes.blazeconfig } ) || null;

	// return the element wrapped in a div
	return (
		<div className="blaze-slider" data-blaze={ sliderProps }>
			<div className="blaze-container">
				<div className="blaze-track-container">{ element }</div>
			</div>
			<BlazeControls />
		</div>
	);
};

export default Save;
