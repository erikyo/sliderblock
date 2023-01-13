<?php
/**
 * Plugin Name: SliderBlock
 * Plugin URI: https://github.com/erikyo/typescript-wp-block
 * Description: WordPress block slider in typescript
 * Version: 0.0.1
 * Author: codekraft
 */

function SliderBlock_script() {
	$asset = include __DIR__ . '/build/slider.asset.php';
	wp_enqueue_script( 'slider-block', plugin_dir_url( __FILE__ ) . '/build/slider.js', $asset['dependencies'], false, true );
	wp_enqueue_style( 'slider-block-style', plugin_dir_url( __FILE__ ) . '/build/slider.css' );
	wp_enqueue_style( 'slider-block-custom-css', plugin_dir_url( __FILE__ ) . '/build/style-slider.css' );
}

add_action( 'enqueue_block_editor_assets', 'SliderBlock_script' );
add_action( 'wp_enqueue_scripts', 'SliderBlock_script' );
