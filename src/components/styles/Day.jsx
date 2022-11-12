import styled, { keyframes } from 'styled-components';

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
		border-radius: 5%;
		border: 10px solid;
		// gradientowy border
		border-image-slice: 1;
		border-width: 4px;
		border-image-source: linear-gradient(to left, #5073b8, #1098ad);
		mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
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

const shine = keyframes`
	to {
		background-position: -200% center;
	}
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
		120deg,
		#f79533,
		#f37055,
		#ef4e7b,
		#a166ab,
		#5073b8,
		#1098ad,
		#07b39b,
		#6fba82,
		#f79533,
		#f37055
	);
	background-size: 200% auto;

	color: #000;
	background-clip: text;
	-webkit-text-fill-color: transparent;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;

	animation: ${shine} 5.5s linear infinite;
`;
