import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home.js';

function App() {
	const backgroundStyle = {
		backgroundColor:'black',
		height:'100vh',
	}

	return (
		<div style={backgroundStyle}>
		<Routes>
			<Route path='/' element={<Home />} />
		</Routes>
		</div>
	);
}

export default App;