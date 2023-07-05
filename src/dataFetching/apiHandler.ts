const baseUrl = process.env.NEXT_PUBLIC_BASEURL;

const get = async (url: string) => {
	const response = await fetch(url);
	const data = await response.json();
	return data;
};

const user = {};

export { user };
