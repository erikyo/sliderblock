import { MediaConfig } from 'blaze-slider';

export interface TextDef {
	message: string;
}

export type Properties = {
	attributes: TextDef;
	setAttributes: any;
};

export type PropertiesSave = {
	attributes: TextDef;
	className?: string;
};

type BlazeConfig = Record< string, MediaConfig >;
