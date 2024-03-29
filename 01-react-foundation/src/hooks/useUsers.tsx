import { useEffect, useRef, useState } from 'react';
import type { ReqResUserListResponse, User } from '../interfaces';
import axios from 'axios';

export const useUsers = () => {
	const currentPageRef = useRef(1);
	const [users, setUsers] = useState<User[]>([]);
	const nextPage = async () => {
		currentPageRef.current++;
		const users = await loadUsers(currentPageRef.current);
		if (users.length > 0) {
			setUsers(users);
		} else {
			currentPageRef.current--;
		}
	};

	const previousPage = async () => {
		if (currentPageRef.current < 1) return;
		currentPageRef.current--;
		const users = await loadUsers(currentPageRef.current);
		setUsers(users);
	};
	useEffect(() => {
		// fetch('https://reqres.in/api/users?page=2')
		// 	.then((resp) => resp.json())
		// 	.then((data) => console.log(data));

		loadUsers(currentPageRef.current).then(setUsers);
		// loadUsers().then((users) => setUsuarios(users));
	}, []);
	return {
		users,
		currentPageRef,

		setUsers,
		previousPage,
		nextPage,
		loadUsers,
	};
};

export const loadUsers = async (page: number = 1): Promise<User[]> => {
	try {
		const { data } = await axios.get<ReqResUserListResponse>(
			'https://reqres.in/api/users',
			{
				params: {
					page: page,
				},
			}
		);

		console.log(data.data);
		return data.data;
	} catch (error) {
		console.log(error);
		return [];
	}
};
