import React from 'react';
import { __ } from '@wordpress/i18n';
import { createHigherOrderComponent } from '@wordpress/compose';
import { useBlazeSlider, isSlider, isActive, getBlazeConfig } from './utils';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, RangeControl, ToggleControl } from '@wordpress/components';
import BlazeControls from './Components/Controls';

/**
 * The save function defines the way in which the different attributes should be combined into the final markup, which is then serialized into post_content.
 *
 * @param  props
 * @param  props.attributes - the block attributes
 * @function Object() { [native code] }
 */
const withControls = createHigherOrderComponent( ( HocComponent ) => {
	return ( props ) => {
		const { attributes, isSelected, setAttributes }: Record< string, any > =
			props;

		if ( ! isActive( attributes ) ) return <HocComponent { ...props } />;

		console.log( props );

		const blazeconfig: Record< string, any > =
			attributes?.blazeconfig ?? {};

		const config = getBlazeConfig( blazeconfig );

		return (
			<>
				<div className="blaze-slider" ref={ useBlazeSlider( config ) }>
					<div className="blaze-container">
						<div className="blaze-track-container">
							<HocComponent
								{ ...props }
								data-blaze={ JSON.stringify( config ) }
							/>
						</div>
					</div>
					<BlazeControls />
				</div>
				<InspectorControls>
					<PanelBody title="Slider" initialOpen={ true }>
						<ToggleControl
							label={ __( 'Loop' ) }
							checked={ blazeconfig.loop }
							onChange={ ( value: boolean ) => {
								setAttributes( {
									...attributes,
									blazeconfig: {
										...blazeconfig,
										loop: value,
									},
								} );
							} }
						/>
						<ToggleControl
							label={ __( 'Autoplay' ) }
							checked={ blazeconfig.enableAutoplay }
							onChange={ ( value: boolean ) => {
								setAttributes( {
									...attributes,
									blazeconfig: {
										...blazeconfig,
										enableAutoplay: value,
									},
								} );
							} }
						/>
						<RangeControl
							label={ __( 'Slides Displayed' ) }
							value={ blazeconfig.slidesToShow }
							onChange={ ( value: number | undefined ) => {
								setAttributes( {
									...attributes,
									blazeconfig: {
										...blazeconfig,
										slidesToShow: value,
									},
								} );
							} }
							min={ 1 }
							max={ 10 }
						/>
					</PanelBody>
				</InspectorControls>
			</>
		);
	};
}, 'Controls' );

export default withControls;
