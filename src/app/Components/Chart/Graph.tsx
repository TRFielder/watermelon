"use client";

import { useEffect, useState } from "react";
import { Users } from "@/dataFetching/apiHandler";
import { Flex, Container, Heading } from "@chakra-ui/react";
import { ICheckIn } from "@/models/user";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Line } from "react-chartjs-2";

Chart.register(CategoryScale);

const Graph = () => {
	const [data, setData] = useState<ICheckIn[]>([]);

	const chartData = {
		labels: data.map((checkin) => new Date(checkin.submitted).toLocaleDateString()),
		datasets: [{ label: "Bodyweight", data: data.map((checkin) => checkin.weight) }],
	};

	const chartOptions = {
		responsive: true,
		plugins: {
			legend: {
				position: "top" as const,
			},
			title: {
				display: false,
			},
		},
	};

	useEffect(() => {
		(async () => {
			const response = await Users.getCheckIns();

			setData(response.data);
		})();
	}, []);
	return (
		<Flex align={"center"} justify={"center"}>
			<Container maxW={"lg"} boxShadow={"xl"} rounded={"lg"} p={6}>
				<Heading as="h1" fontSize={{ base: "xl", sm: "2xl" }} textAlign="center" mb={5}>
					Your progress
				</Heading>
				<Container sx={{ backgroundColor: "white" }}>
					<Line options={chartOptions} data={chartData} />
				</Container>
			</Container>
		</Flex>
	);
};

export default Graph;
