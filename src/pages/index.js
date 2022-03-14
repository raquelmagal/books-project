import React from 'react';
import { Route, Routes, Navigate, BrowserRouter, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Home } from './Home';
import { Login } from './Login';

function PrivateRoute() {
	const { isAuthenticated } = useSelector((state) => state.auth);
	return isAuthenticated ? <Outlet/> : <Navigate to="/login"/>
}

export default () => (
	<BrowserRouter>
		<Routes>
			<Route exact path='/' element={<PrivateRoute/>}>
				<Route exact path='/' element={<Home/>}/>
			</Route>
			<Route path="/login" element={<Login/>} />
		</Routes>
	</BrowserRouter>
);
