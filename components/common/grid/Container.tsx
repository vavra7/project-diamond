interface Props {
	children?: React.ReactNode;
	fluid?: boolean;
	id?: string;
	className?: string;
	style?: object;
}

function Container(props: Props) {
	let classes: string = '';

	if (!props.fluid) {
		classes = classes.concat('container');
	} else {
		classes = classes.concat('container-fluid');
	}
	if (props.className) classes = classes.concat(` ${props.className}`);

	return (
		<div id={props.id} className={classes} style={props.style}>
			{props.children}
		</div>
	);
}

export default Container;
