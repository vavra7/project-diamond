import { ReactElement } from 'react';

type Cols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface Props {
	children?: React.ReactNode;
	cols?: Cols;
	xs?: Cols;
	sm?: Cols;
	md?: Cols;
	lg?: Cols;
	xl?: Cols;
	id?: string;
	className?: string;
	style?: object;
}

function Col(props: Props): ReactElement {
	let classes = '';

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
		<div id={props.id} className={classes} style={props.style}>
			{props.children}
		</div>
	);
}

Col.defaultProps = {
	cols: 12
} as Partial<Props>;

export default Col;
