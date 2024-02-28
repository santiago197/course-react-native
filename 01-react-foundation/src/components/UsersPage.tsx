import { useEffect } from 'react';
import type { User } from '../interfaces';
import { loadUsers, useUsers } from '../hooks/useUsers';

export const UsersPage = () => {
	const { users, currentPageRef, setUsers, previousPage, nextPage } =
		useUsers();
	useEffect(() => {
		// fetch('https://reqres.in/api/users?page=2')
		// 	.then((resp) => resp.json())
		// 	.then((data) => console.log(data));

		loadUsers(currentPageRef.current).then(setUsers);
		// loadUsers().then((users) => setUsuarios(users));
	}, []);

	return (
		<>
			<h3>Usuarios":</h3>
			<table>
				<thead>
					<tr>
						<th>Avatar</th>
						<th>Nombre</th>
						<th>Email</th>
					</tr>
				</thead>
				<tbody>
					{users?.map((user) => (
						<UserRow
							key={user.id}
							user={user}
						/>
					))}
				</tbody>
			</table>
			<div>
				<button onClick={previousPage}>Prev</button>
				<button onClick={nextPage}>Next</button>
			</div>
		</>
	);
};
interface Props {
	user: User;
}

export const UserRow = ({ user }: Props) => {
	const { avatar, first_name, last_name, email } = user;
	return (
		<tr>
			<td>
				<img
					src={avatar}
					alt={first_name}
					style={{ width: '50px' }}
				/>
			</td>
			<td>
				{first_name} {last_name}
			</td>
			<td>{email}</td>
		</tr>
	);
};
