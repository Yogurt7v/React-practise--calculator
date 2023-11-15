import './App.css';
import { useState } from 'react';
// import React, { createContext, createElement } from 'react';

const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const ops = ['+', '-', '*', '/'];
export const App = () => {
	let op = null;
	let [displayNum, setDisplayNum] = useState(0);

	const resetNumber = () => {
		setDisplayNum(0);
	};

	const choseNumber = (event) => {
		if (event.target.id === '') {
			setDisplayNum(displayNum);
		} else {
			setDisplayNum(event.target.id);
		}
	};

	const choseOperator = (event) => {
		op = event.target.id;
		console.log(op);
		// switch (event.target.id) {
		// 	case '+':
		// 		startNum ;
		// 		break;
		// 	case '-':
		// 		setStartNum(startNum - event.target.id);
		// 		break;
		// 	case '*':
		// 		setStartNum(startNum * event.target.id);
		// 		break;
		// 	case '/':
		// 		setStartNum(startNum / event.target.id);
		// 		break;
		// }
	};

	return (
		<>
			<header className="App-header">Calculator</header>
			<div className="Calculator">
				<div className="Container">
					<div className="Display">{displayNum}</div>
					<div className="Clear" onClick={resetNumber}>
						<button className="Clear">C</button>
					</div>
					<div className="TwoBox">
						<div className="Numbers" onClick={choseNumber}>
							{nums.map((num) => (
								<button className="Number" id={num}>
									{num}
								</button>
							))}
						</div>
						<div className="Operators" onClick={choseOperator}>
							{ops.map((op) => (
								<button className="Operator" id={op}>
									{op}
								</button>
							))}
						</div>
					</div>
					<div className="Result">
						<button className="Result">=</button>
					</div>
				</div>
			</div>
		</>
	);
};
