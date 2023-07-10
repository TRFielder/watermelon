import { ICheckIn, IUser } from "@/models/user";

const baseUrl = process.env.NEXT_PUBLIC_BASEURL;

const requests = {
	get: async (url: string) => {
		const response = await fetch(url);
		const data = await response.json();
		return data;
	},

	post: async (data: any, url: string) => {
		console.log(data);
		const response = await fetch(url, {
			method: "POST",
			mode: "cors",
			cache: "no-cache",
			credentials: "same-origin",
			headers: {
				"Content-Type": "application/json",
			},
			redirect: "follow",
			referrerPolicy: "no-referrer",
			body: JSON.stringify(data),
		});
		const json = await response.json();
		return json;
	},
};

const Users = {
	getUser: () => requests.get(`${baseUrl}/user`),
	addUser: (userData: IUser) => requests.post(userData, `${baseUrl}/user`),
	checkIn: (value: ICheckIn) => requests.post(value, `${baseUrl}/user/checkins`),
	getCheckIns: () => requests.get(`${baseUrl}/user/checkins`),
};

export { Users };
