"use client";
import { FormEvent, ChangeEvent, useState, useEffect } from "react";
import { Stack, FormControl, Input, Button, Heading, Container, Flex } from "@chakra-ui/react";
import { Users } from "@/dataFetching/apiHandler";
import { ICheckIn } from "@/models/user";

const CheckIn = () => {
	const [value, setValue] = useState<number>(0);

	const handleText = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(Number(e.target.value));
	};

	useEffect(() => {
		(async () => {
			const response = await Users.getCheckIns();
			const data = response.data;
			const lastCheckIn: ICheckIn = data.at(-1);
			setValue(lastCheckIn.weight);
		})();
	}, []);

	const handleSubmit = (e: FormEvent<HTMLInputElement>) => {
		e.preventDefault();
		const checkIn: ICheckIn = {
			submitted: new Date(),
			weight: value,
		};
		console.warn("The entered value is: ", value, " kg");
		(async () => {
			const response = await Users.checkIn(checkIn);
			console.log(response);
		})();
	};

	return (
		<Flex align={"center"} justify={"center"} marginTop={10}>
			<Container maxW={"lg"} boxShadow={"xl"} rounded={"lg"} p={6}>
				<Heading as="h2" fontSize={{ base: "xl", sm: "2xl" }} textAlign={"center"} mb={5}>
					Enter today's bodyweight
				</Heading>
				<Stack direction={{ base: "column", md: "row" }} as={"form"} spacing={"12px"} onSubmit={handleSubmit}>
					<FormControl>
						<Input
							variant={"solid"}
							borderWidth={1}
							_placeholder={{ color: "gray.400" }}
							borderColor={"gray.400"}
							color={"black"}
							type="number"
							placeholder="Bodyweight"
							aria-label="Your bodyweight today, in kilograms"
							onChange={handleText}
							value={value}
						/>
					</FormControl>
					<FormControl w={{ base: "100%", md: "40%" }}>
						<Button type="submit">Submit</Button>
					</FormControl>
				</Stack>
			</Container>
		</Flex>
	);
};

export default CheckIn;
