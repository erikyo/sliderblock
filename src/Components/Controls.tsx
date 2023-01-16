const BlazeControls = (): JSX.Element => {
	return (
		<div className="controls">
			<button className="blaze-prev">prev</button>
			<div className="blaze-pagination"></div>
			<button className="blaze-next">next</button>
		</div>
	);
};
export default BlazeControls;
