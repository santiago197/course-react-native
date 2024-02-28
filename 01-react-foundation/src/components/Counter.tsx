import React, { useState } from 'react';

export const Counter = () => {
	const [count, setCount] = useState<number>(10);

	const increaseBy = (value: number) => {
		setCount(count + value);
	};
	return (
		<>
			<h3>Contador</h3>
			<small>{count}</small>
			<div>
				<button onClick={() => increaseBy(1)}>+1</button>
				&nbsp;
				<button onClick={() => increaseBy(-1)}>-1</button>
			</div>
		</>
	);
};
