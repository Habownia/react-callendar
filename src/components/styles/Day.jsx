import styled from 'styled-components';

import { animatedgradient } from './Skeleton';

export const Day = styled.div`
	// jeśli w danym dniu znajdusie się jakaś zawartość to zmienia bgc
	background-color: ${(props) => (props.elem ? '#444' : '')};
	grid-column: ${(props) => (props.index == 0 ? props.whereToStart : '')};
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 25px;
	cursor: pointer;

	&:hover {
		border-radius: 10px;
		// gradientowy border z radiusem
		border: 3px double transparent;
		background-image: linear-gradient(var(--bgCallendar), var(--bgCallendar)),
			linear-gradient(to right, #5073b8, #1098ad);
		background-origin: border-box;
		background-clip: padding-box, border-box;
	}
`;

export const DayContainer = styled.div`
	display: grid;
	height: 30rem;
	grid-template-columns: repeat(7, 1fr);
	grid-template-rows: repeat(6, 1fr);
	grid-column-gap: 0px;
	grid-row-gap: 0px;
`;

export const DaysOfWeek = styled.div`
	display: grid;
	grid-template-columns: repeat(7, 1fr);
	grid-template-rows: 1fr;
	font-size: 1.4rem;
	font-weight: bold;

	p {
		display: flex;
		justify-content: center;
	}

	text-align: center;

	background: linear-gradient(
		60deg,
		#f79533,
		#f37055,
		#ef4e7b,
		#a166ab,
		#5073b8,
		#1098ad,
		#07b39b,
		#6fba82
	);
	background-size: 200% auto;

	color: #000;
	background-clip: text;
	-webkit-text-fill-color: transparent;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;

	animation: ${animatedgradient} 5s ease alternate infinite;
`;
