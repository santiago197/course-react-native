export const BasicTypes = () => {
	const name: string = 'Santiago';

	const age: number = 24;
	const isActive: boolean = true;

	const powers: string[] = ['React', 'Javascript', 'Nextjs'];
	powers.push('NestJs');
	return (
		<>
			<h3>Tipos Básicos</h3>
			{name} {age} {isActive}
			<br />
			{powers.join(', ')}
		</>
	);
};
