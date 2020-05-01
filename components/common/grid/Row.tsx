interface Props {
	children?: React.ReactNode;
}

function Row(props: Props) {
	return <div className="row">{props.children}</div>;
}

export default Row;
