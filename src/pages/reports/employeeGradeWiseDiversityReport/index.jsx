import React, { useEffect, useState } from 'react';
import {
	Card,
	CardHeader,
	Text,
	Box,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
} from '@chakra-ui/react';
import EmpGradeWiseDiversityReportGraph from './empGradeWiseDiversityReportGraph';
import EmpGradeWiseDiversityReportTable from './empGradeWiseDiversityReportTable';

const EmpGradeWiseDiversityReportView = () => {
	let token = localStorage.getItem('token');
	const [listValue, setListValue] = useState();

	useEffect(() => {
		fetch(`${import.meta.env.VITE_API_URL}/diversity-grade`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
			method: 'GET',
		})
			.then((response) => response.json())
			.then((data) => setListValue(data.data))
			.catch((error) => console.error(error));
	}, []);

	return (
		<Card>
			<CardHeader
				w='100%'
				display='flex'
				justifyContent='space-between'
				alignItems='center'>
				<Box
					display='-webkit-inline-box'
					borderBottom='3px solid var(--chakra-colors-claimzBorderColor)'
					pb='10px'
					mb='15px'
					width='650px'
					pb='5px'>
					<Text
						background='linear-gradient(180deg, #2770AE 0%, #01325B 100%)'
						backgroundClip='text'
						fontWeight='700'
						fontSize='28px'
						lineHeight='36px'>
						Employee Grade Wise Diversity Report
					</Text>
				</Box>
			</CardHeader>

			<Tabs>
				<TabList p='0px 20px'>
					<Tab fontSize='1.5rem' fontWeight='600' p='10px' mr='15px'>
						Visual Representation
					</Tab>
					<Tab fontSize='1.5rem' fontWeight='600' p='10px'>
						Tabular Representation
					</Tab>
				</TabList>

				<TabPanels>
					<TabPanel>
						<EmpGradeWiseDiversityReportGraph
							graphData={listValue}
						/>
					</TabPanel>
					<TabPanel>
						<EmpGradeWiseDiversityReportTable
							dataList={listValue}
						/>
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Card>
	);
};

export default EmpGradeWiseDiversityReportView;
