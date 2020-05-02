interface Props {
	children?: React.ReactNode;
	cols?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
	xs?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
	sm?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
	md?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
	lg?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
	xl?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
	className?: string;
	style?: object;
}

function Col(props: Props) {
	let classes: string = '';

	if (!props.xs) {
		classes = classes = classes.concat(`cols-xs-${props.cols}`);
	} else {
		classes = classes = classes.concat(`cols-xs-${props.xs}`);
	}
	if (props.sm) classes = classes.concat(` cols-sm-${props.sm}`);
	if (props.md) classes = classes.concat(` cols-md-${props.md}`);
	if (props.lg) classes = classes.concat(` cols-lg-${props.lg}`);
	if (props.xl) classes = classes.concat(` cols-xl-${props.xl}`);
	if (props.className) classes = classes.concat(` ${props.className}`);

	return (
		<div className={classes} style={props.style}>
			{props.children}
		</div>
	);
}

Col.defaultProps = {
	cols: 12
} as Partial<Props>;

export default Col;
