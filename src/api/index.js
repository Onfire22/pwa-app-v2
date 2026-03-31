export const getTodos = async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/users/1/posts');
	return await response.json();
};

export const requestLocation = async (lat, lon) => {
	const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`);
	return await response.json();
};

export const createPost = async (form) => {
	const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
		method: 'POST',
		body: JSON.stringify({
			...form,
			userId: 1,
		}),
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	});

	return await response.json();
};
