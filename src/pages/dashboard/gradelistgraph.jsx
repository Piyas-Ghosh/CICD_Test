import React from 'react';
import {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	ResponsiveContainer,
} from 'recharts';

const GradeListGraph = ({ Grade, Loader }) => {
	return (
		<div style={{ width: '100%', height: 400 }}>
			<ResponsiveContainer>
				<AreaChart
					data={Grade}
					margin={{
						top: 10,
						right: 30,
						left: 0,
						bottom: 0,
					}}>
					<CartesianGrid strokeDasharray='3 3' />
					<XAxis dataKey='grade_value' />
					<YAxis />

					<Area
						type='monotone'
						dataKey='COUNT(grade.grade_value)'
						stroke='#8884d8'
						fill='#8884d8'
					/>
				</AreaChart>
			</ResponsiveContainer>
		</div>
	);
};
export default GradeListGraph;
