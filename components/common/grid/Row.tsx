interface Props {
	children?: React.ReactNode;
	justifyContent?: 'normal' | 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
	alignItems?: 'normal' | 'flex-start' | 'center' | 'flex-end' | 'baseline';
	id?: string;
	className?: string;
	style?: object;
}

const Row: React.FC<Props> = props => {
	let classes = 'row';

	if (props.className) classes = classes.concat(` ${props.className}`);
	if (props.justifyContent) classes = classes.concat(` jc-${props.justifyContent}`);
	if (props.alignItems) classes = classes.concat(` ai-${props.alignItems}`);

	return (
		<div id={props.id} className={classes} style={props.style}>
			{props.children}
		</div>
	);
};

export default Row;
