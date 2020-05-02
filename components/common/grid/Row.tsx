interface Props {
	children?: React.ReactNode;
	justifyContent?: 'normal' | 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
	alignItems?: 'normal' | 'flex-start' | 'center' | 'flex-end' | 'baseline';
	className?: string;
	style?: object;
}

function Row(props: Props) {
	let classes: string = 'row';

	if (props.className) classes = classes.concat(` ${props.className}`);
	if (props.justifyContent) classes = classes.concat(` jc-${props.justifyContent}`);
	if (props.alignItems) classes = classes.concat(` ai-${props.alignItems}`);

	return (
		<div className={classes} style={props.style}>
			{props.children}
		</div>
	);
}

export default Row;
