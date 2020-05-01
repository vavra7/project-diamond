interface Props {
	children?: React.ReactNode;
	fluid?: boolean;
}

function Container(props: Props) {
	const type: string = !props.fluid ? 'container' : 'container-fluid';

	return <div className={type}>{props.children}</div>;
}

Container.defaultProps = {
	fluid: false
} as Partial<Props>;

export default Container;
