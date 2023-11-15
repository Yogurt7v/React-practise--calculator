import './App.css';
import React, { createContext, createElement } from 'react';

const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const ops = ['+', '-', '*', '/'];
export const App = () => {
	let startNum = 0;
	return (
		<>
			<header className="App-header">Calculator</header>
			<div className="Container">
				<div className="Display">{startNum}</div>
				<div className="TwoBox">
					<div className="Numbers">
						{nums.map((num) => (
							<button className="Number">{num}</button>
						))}
					</div>
					<div className="Operators">
						{ops.map((op) => (
							<button className="Operator">{op}</button>
						))}
					</div>
				</div>
			</div>
		</>
	);
};
