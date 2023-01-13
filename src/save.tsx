import './style/style.scss';

import React from 'react';
import { createHigherOrderComponent } from '@wordpress/compose';
import { useBlazeSlider } from './utils';

/**
 * The save function defines the way in which the different attributes should be combined into the final markup, which is then serialized into post_content.
 *
 * @param  props
 * @param  props.attributes - the block attributes
 * @function Object() { [native code] }
 */
const withSlider = createHigherOrderComponent( ( HocComponent ) => {
	return ( props ) => {
		if ( props.name !== 'core/gallery' )
			return <HocComponent { ...props } />;

		const {
			attributes: {
				className,
				columns,
				fixedHeight,
				ids,
				imageCrop,
				images,
				linkTo,
				slidesToShow,
				loop,
			},
			isSelected,
			setAttributes,
			name,
		} = props;

		const sliderRef = useBlazeSlider( {
			all: {
				slidesToShow: 3,
				loop,
			},
		} );

		return (
			<>
				<div
					id={ 'block-slider' }
					className="blaze-slider"
					ref={ sliderRef as React.RefObject< any > }
				>
					<div className="blaze-container">
						<div className="blaze-track-container">
							<div className="blaze-track">
								<HocComponent { ...props } />
							</div>
						</div>
					</div>
				</div>
				{ isSelected ? <p>Selected</p> : <p>Disabled</p> }
			</>
		);
	};
}, 'withSlider' );

export default withSlider;
