import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from '@pages/home/Home';
import { Login } from '@pages/auth/Login';

const Router = () => {
  return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="*" element={<Navigate to='/' />} />
			<Route path="/login" element={<Login />} />
		</Routes>
	);
}

export default Router;
