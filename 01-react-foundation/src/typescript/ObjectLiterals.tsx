interface Person {
	firstName: string;
	lastName: string;
	age: number;
	address: Address;
	isAlive?: boolean;
}
interface Address {
	country: string;
	houseNo: number;
}
export const ObjectLiterals = () => {
	const person: Person = {
		age: 24,
		firstName: '',
		lastName: '',
		address: {
			country: 'Bogota',
			houseNo: 76,
		},
		isAlive: true,
	};
	return (
		<div>
			<h3>Objetos literales</h3>
			<pre>{JSON.stringify(person, null, 2)}</pre>
		</div>
	);
};
