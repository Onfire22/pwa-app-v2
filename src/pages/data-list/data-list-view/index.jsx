import './styles.css';

const DataListView = ({ data, isLoading }) => {
	return (
		<div className="data">
			{isLoading ? (
				<div>Loading...</div>
			) : (
				data.map((item) => {
					return (
						<div className="data__item" key={item.id}>
							<div>{item.title}</div>
							<div>{item.body}</div>
						</div>
					);
				})
			)}
		</div>
	);
};

export { DataListView };
