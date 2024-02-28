import axios from 'axios';
import { useEffect } from 'react';
import { ReqResUserListResponse } from '../interfaces';

const loadUsers = async () => {
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
	useEffect(() => {
		// fetch('https://reqres.in/api/users?page=2')
		// 	.then((resp) => resp.json())
		// 	.then((data) => console.log(data));
		loadUsers().then((users) => console.log(users));
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
					<tr>
						<td>avatar</td>
						<td>nombre</td>
						<td>email</td>
					</tr>
				</tbody>
			</table>
		</>
	);
};
