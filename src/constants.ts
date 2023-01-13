import { BlazeConfig } from 'blaze-slider';

export const GALLERY_VARIATION_NAMESPACE: string = 'core/slider';

export const defaultConfig: BlazeConfig = {
	all: {
		// layout
		slidesToShow: 1,
		slidesToScroll: 1,
		slideGap: '20px',
		draggable: true,

		// loop
		loop: true,

		// autoplay
		enableAutoplay: false,
		stopAutoplayOnInteraction: true,
		autoplayInterval: 3000,
		autoplayDirection: 'to left',

		// pagination
		enablePagination: true,

		// transition
		transitionDuration: 500,
		transitionTimingFunction: 'ease',
	},
};
