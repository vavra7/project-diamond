import Layout1 from '../components/layouts/Layout1';
import {
	VictoryChart,
	VictoryTheme,
	VictoryZoomContainer,
	VictoryBrushContainer,
	VictoryScatter,
	VictoryLine,
	VictoryAxis,
	DomainPropType,
	DomainTuple
} from 'victory';
import { Component } from 'react';
import axios from 'axios';
import moment, { Moment } from 'moment';

interface ChartDomain {
	x: [number, number];
	y: [number, number];
}

interface DataSetItem {
	x: number;
	y: number;
}

interface Props {
	dataSet: object[];
}

interface State {
	zoomDomain: ChartDomain;
}

class Charts extends Component<Props, State> {
	private width: number;
	private entireDomain: ChartDomain;
	private entireDataSet: DataSetItem[];

	/**
	 * Initial props
	 */
	static async getInitialProps() {
		const res = await axios.get('http://localhost:3000/api/ticker/BA.US');

		return {
			dataSet: res.data.marketData.filter((item, index) => index < 1000000)
		};
	}

	/**
	 * Constructor
	 */
	public constructor(props: Props) {
		super(props);

		this.entireDataSet = this.props.dataSet.map((item: { date: Moment; close: number }) => ({
			x: moment(item.date, 'YYYY-MM-DD').valueOf(),
			y: item.close
		}));
		this.entireDomain = this.getEntireDomain();
		this.width = 1000;

		this.state = {
			zoomDomain: this.entireDomain
			// dataSet: this.getData()
		};
	}

	/**
	 * Returns original domain for full data set
	 */
	public getEntireDomain(): ChartDomain {
		const xValues = this.entireDataSet.map((item: DataSetItem) => item.x);
		const yValues = this.entireDataSet.map((item: DataSetItem) => item.y);

		return {
			x: [xValues[0], xValues[xValues.length - 1]],
			y: [Math.min(...yValues), Math.max(...yValues)]
		};
	}

	/**
	 * Callback on domain change calculating current domain
	 */
	public onDomainChange(domain): void {
		this.setState({ zoomDomain: domain });
	}

	/**
	 * Return reduced data set for graph render
	 */
	public getData(): DataSetItem[] {
		const { zoomDomain }: { zoomDomain: ChartDomain } = this.state;
		const chartAreaWidth: number = this.width - 150;
		let k: number;
		let reducedData: DataSetItem[];

		// only visible points
		reducedData = this.entireDataSet.filter((item: DataSetItem, index: number, arr: DataSetItem[]) => {
			switch (index) {
				case 0:
					return zoomDomain.x[0] <= arr[index + 1].x && item.x <= zoomDomain.x[1];
				case arr.length - 1:
					return zoomDomain.x[0] <= item.x && arr[index - 1].x <= zoomDomain.x[1];
				default:
					return zoomDomain.x[0] <= arr[index + 1].x && arr[index - 1].x <= zoomDomain.x[1];
			}
		});

		// reduce to maximum visible points
		if (reducedData.length > chartAreaWidth) {
			k = Math.ceil(reducedData.length / chartAreaWidth);
			reducedData = reducedData.filter((item: DataSetItem, index: number) => index % k === 0);
		}

		return reducedData;
	}

	/**
	 * Render fce
	 */
	public render() {
		const height1 = 500;
		const height2 = 100;

		return (
			<Layout1>
				<VictoryChart
					width={this.width}
					height={height1}
					domain={this.entireDomain}
					theme={VictoryTheme.material}
					scale={{ x: 'time' }}
					containerComponent={
						<VictoryZoomContainer
							responsive={false}
							zoomDimension="x"
							zoomDomain={this.state.zoomDomain}
							onZoomDomainChange={this.onDomainChange.bind(this)}
						/>
					}
				>
					<VictoryLine
						style={
							{
								// data: { stroke: 'tomato' }
							}
						}
						data={this.getData()}
					/>
				</VictoryChart>

				{/* <pre>{JSON.stringify(this.state.dataSet, null, 2)}</pre> */}
			</Layout1>
		);
	}
}

export default Charts;
