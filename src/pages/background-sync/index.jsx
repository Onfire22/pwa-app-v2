import { useState } from 'react';
import { createPost } from '../../api/index.js';
import './styles.css';

const BackgroundSync = () => {
	const [form, setForm] = useState({
		title: '',
		body: '',
	});

	const [isLoading, setIsLoading] = useState(false);

	const [data, setData] = useState([]);

	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!form.title || !form.body) return;

		try {
			setIsLoading(true);
			const post = await createPost(form);
			setData([...data, post]);
			setForm({
				title: '',
				body: '',
			});
		} catch (e) {
			console.log(e);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<>
			<form className="form" onSubmit={handleSubmit}>
				<h1 className="title">Создать заметку</h1>
				<input name="title" value={form.title} onChange={handleChange} />
				<input name="body" value={form.body} onChange={handleChange} />
				<button type="submit">Создать</button>
			</form>
			<div className="posts">
				{isLoading ? (
					<div>Loading...</div>
				) : (
					data.map((item) => {
						return (
							<div className="post" key={item.id}>
								<div>Заголовок {item.title}</div>
								<div>Описание {item.body}</div>
							</div>
						);
					})
				)}
			</div>
		</>
	);
};

export { BackgroundSync };
