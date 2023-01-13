import { __ } from '@wordpress/i18n';
import {
	PanelBody,
	PanelRow,
	RangeControl,
	TextControl,
	ToggleControl,
} from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';
import { useState } from '@wordpress/element';
import React from 'react';
import { GALLERY_VARIATION_NAMESPACE } from './constants';

/**
 * The edit function describes the structure of your block in the context of the editor.
 *
 * @param  props
 * @param  props.attributes    - the block attributes
 * @param  props.setAttributes - the setState function
 *
 */

const withSliderControls = ( BlockEdit: any ) => ( props: any ) => {
	/* get the current props */
	const { attributes }: Record< string, any > = props;
	const [ hasLoop, setHasLoop ] = useState( attributes?.loop || false );
	const [ slidePerScreen, setSlidePerScreen ] = useState(
		attributes?.slideToShow || 3
	);

	function isSlider( blockName: string ) {
		return blockName === GALLERY_VARIATION_NAMESPACE;
	}

	if ( ! isSlider( attributes.namespace ) ) return <BlockEdit { ...props } />;

	return (
		<>
			<div className={ 'block-slider-edit' }>
				<BlockEdit { ...props } />
				<p>mlllmmllmlm</p>
			</div>
			<InspectorControls>
				<PanelBody title="Slider" initialOpen={ true }>
					<PanelRow>
						<h1>Slider</h1>
						<ToggleControl
							label={ __( 'slidesToShow' ) }
							checked={ hasLoop }
							onClick={ ( state: boolean ) => {
								console.log( props );
								setHasLoop( ! state );
							} }
						/>
						<RangeControl
							label="Columns"
							value={ slidePerScreen }
							onChange={ ( value: number | undefined ) => {
								setSlidePerScreen( value || 1 );
							} }
							min={ 1 }
							max={ 10 }
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
		</>
	);
};

export default withSliderControls;
