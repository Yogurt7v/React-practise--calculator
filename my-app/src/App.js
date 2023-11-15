import './App.css';
import React, { createContext, createElement } from 'react';

export const App = () => {
	return (
		<>
			<header className="App-header">Calculator</header>
			<div className="Container">
				<div className="Display">Display</div>
				<div className="TwoBox">
					<div className="Numbers">Numbers</div>
					<div className="Operators">Operators</div>
				</div>
			</div>
		</>
	);
};
