import axios from 'axios';
import { useEffect, useState } from 'react';
import type { ReqResUserListResponse, User } from '../interfaces';

const loadUsers = async (): Promise<User[]> => {
	try {
		const { data } = await axios.get<ReqResUserListResponse>(
			'https://reqres.in/api/users'
		);

		console.log(data.data);
		return data.data;
	} catch (error) {
		console.log(error);
		return [];
	}
};

export const UsersPage = () => {
	const [users, setUsers] = useState<User[]>([]);
	useEffect(() => {
		// fetch('https://reqres.in/api/users?page=2')
		// 	.then((resp) => resp.json())
		// 	.then((data) => console.log(data));

		loadUsers().then(setUsers);
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
						<UserRow user={user} />
					))}
				</tbody>
			</table>
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
