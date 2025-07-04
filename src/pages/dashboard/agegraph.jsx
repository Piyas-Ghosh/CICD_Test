import React, { useCallback, useState } from 'react';
import { Box, Image } from '@chakra-ui/react';
import { PieChart, Pie, Sector, Cell } from 'recharts';
import LoaderImg from '../../assets/images/loader.gif';

const renderActiveShape = (props) => {
	const RADIAN = Math.PI / 180;
	const {
		cx,
		cy,
		midAngle,
		innerRadius,
		outerRadius,
		startAngle,
		endAngle,
		fill,
		payload,
		percent,
		value,
	} = props;
	const sin = Math.sin(-RADIAN * midAngle);
	const cos = Math.cos(-RADIAN * midAngle);
	const sx = cx + (outerRadius + 10) * cos;
	const sy = cy + (outerRadius + 10) * sin;
	const mx = cx + (outerRadius + 30) * cos;
	const my = cy + (outerRadius + 30) * sin;
	const ex = mx + (cos >= 0 ? 1 : -1) * 22;
	const ey = my;
	const textAnchor = cos >= 0 ? 'start' : 'end';

	return (
		<g>
			<text x={cx} y={cy} dy={8} textAnchor='middle' fill={fill}>
				{payload.name}
			</text>
			<Sector
				cx={cx}
				cy={cy}
				innerRadius={innerRadius}
				outerRadius={outerRadius}
				startAngle={startAngle}
				endAngle={endAngle}
				fill={fill}
			/>
			<Sector
				cx={cx}
				cy={cy}
				startAngle={startAngle}
				endAngle={endAngle}
				innerRadius={outerRadius + 6}
				outerRadius={outerRadius + 10}
				fill={fill}
			/>
			<path
				d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
				stroke={fill}
				fill='none'
			/>
			<circle cx={ex} cy={ey} r={2} fill={fill} stroke='none' />
			<text
				x={ex + (cos >= 0 ? 1 : -1) * 12}
				y={ey}
				textAnchor={textAnchor}
				fill='#333'>{`Employee ${value}`}</text>
			<text
				x={ex + (cos >= 0 ? 1 : -1) * 12}
				y={ey}
				dy={18}
				textAnchor={textAnchor}
				fill='#999'>
				{`(Rate ${(percent * 100).toFixed(2)}%)`}
			</text>
		</g>
	);
};

const AgeGraph = ({ Age, Loader }) => {
	const COLORS = ['#1C6FAD', '#4781BF', '#14355D', '#1F5A85'];
	const [activeIndex, setActiveIndex] = useState(0);
	const onPieEnter = useCallback(
		(_, index) => {
			setActiveIndex(index);
		},
		[setActiveIndex]
	);

	return (
		<>
			{Loader ? (
				<Box
					width={600}
					height={600}
					margin='0 auto'
					display='flex'
					justifyContent='center'
					alignItems='center'>
					<Image src={LoaderImg} alt='Loader' />
				</Box>
			) : (
				<PieChart width={600} height={600} margin='0 auto'>
					<Pie
						activeIndex={activeIndex}
						activeShape={renderActiveShape}
						data={Age}
						cx={300}
						cy={300}
						innerRadius={40}
						outerRadius={100}
						fill='#8884d8'
						dataKey='COUNT(*)'
						onMouseEnter={onPieEnter}>
						{Age?.map((entry, index) => (
							<Cell
								key={`cell-${index}`}
								fill={COLORS[index % COLORS.length]}
							/>
						))}
					</Pie>
				</PieChart>
			)}
		</>
	);
};

export default AgeGraph;
