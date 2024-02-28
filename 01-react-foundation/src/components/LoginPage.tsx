import React from 'react';
import { useAuthStore } from '../store/auth.store';

export const LoginPage = () => {
	const authState = useAuthStore((state) => state.status);
	return (
		<>
			<h3>Login Page</h3>
			<span>{authState}</span>
		</>
	);
};
