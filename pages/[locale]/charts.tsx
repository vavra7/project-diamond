import { ReactElement } from 'react';
import Layout1 from '@components/layouts/Layout1';
import { VictoryChart, VictoryTheme, VictoryZoomContainer, VictoryLine } from 'victory';
import { Component } from 'react';
import axios from 'axios';
import moment from 'moment/moment';

interface Domain {
	x: [number, number];
	y: [number, number];
}

interface DataItem {
	x: number;
	y: number;
}

interface InitDataItem {
	date: string;
	open: number;
	close: number;
}

interface ChartsProps {
	dataSet: InitDataItem[];
}

interface ChartsState {
	zoomDomain: Domain;
}

class Charts extends Component<ChartsProps, ChartsState> {
	private width: number;
	private entireDomain: Domain;
	private entireDataSet: DataItem[];

	/**
	 * Initial props
	 */
	static async getInitialProps(): Promise<object> {
		const res = await axios.get('http://localhost:3000/api/ticker/BA.US');

		return {
			dataSet: res.data.marketData.filter((item: object, index: number) => index < 1000000)
		};
	}

	/**
	 * Constructor
	 */
	public constructor(props: ChartsProps) {
		super(props);

		this.entireDataSet = this.props.dataSet.map((item: InitDataItem) => ({
			x: moment(item.date, 'YYYY-MM-DD').valueOf(),
			y: item.close
		}));
		this.entireDomain = this.getEntireDomain();
		this.width = 1000;

		this.state = {
			zoomDomain: this.entireDomain
		};
	}

	/**
	 * Returns original domain for full data set
	 */
	public getEntireDomain(): Domain {
		const xValues = this.entireDataSet.map((item: DataItem) => item.x);
		const yValues = this.entireDataSet.map((item: DataItem) => item.y);

		return {
			x: [xValues[0], xValues[xValues.length - 1]],
			y: [Math.min(...yValues), Math.max(...yValues)]
		};
	}

	/**
	 * Callback on domain change calculating current domain
	 */
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	public onDomainChange(domain: any): void {
		this.setState({ zoomDomain: domain });
	}

	/**
	 * Return reduced data set for graph render
	 */
	public getData(): DataItem[] {
		const { zoomDomain }: { zoomDomain: Domain } = this.state;
		const chartAreaWidth: number = this.width - 100;
		let k: number;
		let reducedData: DataItem[];

		// only visible points
		reducedData = this.entireDataSet.filter((item: DataItem, index: number, arr: DataItem[]) => {
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
			reducedData = reducedData.filter((item: DataItem, index: number) => index % k === 0);
		}

		return reducedData;
	}

	/**
	 * Render fce
	 */
	public render(): ReactElement {
		const height1 = 500;

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
			</Layout1>
		);
	}
}

export default Charts;
