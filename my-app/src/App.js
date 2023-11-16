import './App.css';
import { useState } from 'react';
// import React, { createContext, createElement } from 'react';

const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const ops = ['+', '-', '*', '/'];
let arr = [];
let res; // можно и без этого
export const App = () => {
	let [displayNum, setDisplayNum] = useState(0);

	const Result = (event) => {
		if (event.target.id === 'Clear') {
			setDisplayNum('0');
			arr = [];
		}
		if (nums.includes(event.target.id)) {
			setDisplayNum(event.target.id);
			arr.push(event.target.id);
		}
		if (ops.includes(event.target.id)) {
			arr.push(event.target.id);
		}
		if (event.target.id === 'Calculate') {
			switch (arr[1]) {
				case '+':
					res = Number(arr[0]) + Number(arr[2]);
					break;
				case '-':
					res = Number(arr[0]) - Number(arr[2]);
					break;
				case '*':
					res = Number(arr[0]) * Number(arr[2]);
					break;
				case '/':
					res = Math.floor(Number(arr[0]) / Number(arr[2]));
					break;
				default:
					setDisplayNum('Error');
					break;
			}
			setDisplayNum(res);
		}
	};

	return (
		<>
			<header className="App-header">
				Работает только одно действие. После результата обнулять!!{' '}
			</header>
			<div className="Calculator">
				<div className="Container" onClick={Result}>
					<div className="Display">{displayNum}</div>
					<div className="Clear">
						<button className="Clear" id="Clear">
							Clear
						</button>
					</div>
					<div className="TwoBox">
						<div className="Numbers">
							{nums.map((num) => (
								<button className="Number" id={num} key={num}>
									{num}
								</button>
							))}
						</div>
						<div className="Operators">
							{ops.map((op) => (
								<button className="Operator" id={op} key={op}>
									{op}
								</button>
							))}
						</div>
					</div>
					<div className="Result">
						<button className="Result" onClick={Result} id="Calculate">
							=
						</button>
					</div>
				</div>
			</div>
		</>
	);
};
