import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home.js';

function App() {
	const backgroundStyle = {
		backgroundColor:'black',
		height:'100vh',
	}

	return (
		<div style={backgroundStyle}>
		<Routes>
			<Route path='/portfolio-new' element={<Home />} />
		</Routes>
		</div>
	);
}

export default App;