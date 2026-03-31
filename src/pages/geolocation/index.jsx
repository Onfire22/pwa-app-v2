import { useEffect, useState } from 'react';
import { requestLocation } from '../../api/index.js';

const Geolocation = () => {
	const [city, setCity] = useState(null);

	useEffect(() => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					requestLocation(position.coords.latitude, position.coords.longitude).then((data) => setCity(data));
				},
				(error) => error,
			);
		}
	}, []);

	return city ? (
		<div>
			<div>{`Координаты: ${city.lat} - ${city.lon}`}</div>
			<div>{`Страна: ${city.address.country}`}</div>
			<div>{`Город: ${city.address.city}`}</div>
			<div>{`Адрес: ${city.address.road} ${city.address.house_number}`}</div>
		</div>
	) : (
		<>Loading...</>
	);
};

export { Geolocation };
