export const BasicFunctions = () => {
	const addTwoNumber = (a: number, b: number): number => {
		return a + b;
	};

	return (
		<>
			<h3>Funciones</h3>
			<span>El resultado de sumar: {addTwoNumber(2, 9)}</span>
		</>
	);
};
