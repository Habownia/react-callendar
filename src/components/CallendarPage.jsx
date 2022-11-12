import { useState } from 'react';

import callendar from '../callendar';

import Skeleton from './styles/Skeleton';
import { Header, Arrow, Hidden } from './styles/Header';
import { Day, DayContainer, DaysOfWeek } from './styles/Day';
import { InputContainer } from './styles/Input';

import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

function CallendarPage(props) {
	const [inputPage, setInputPage] = useState(true);
	const [day, setDay] = useState(0);

	function addDay(e) {
		setInputPage(true);
		const dayNum = e.target.innerText;
		setDay(dayNum);
	}

	const firstDayInMonthIndex = (
		year = new Date().getFullYear(),
		monthIndex = props.index
	) => new Date(`${year}-${monthIndex + 1}-01`).getDay();

	const squares = [...props.value].map((elem, index) => {
		return (
			<Day
				key={index}
				elem={elem}
				index={index}
				onClick={addDay}
				whereToStart={firstDayInMonthIndex()}
			>
				{index + 1}
			</Day>
		);
	});

	return (
		<>
			{!inputPage && (
				<Skeleton>
					<Header>
						<Arrow visible={props.index > 0 ? true : false}>
							<AiOutlineArrowLeft
								size={40}
								onClick={() => {
									// przez ułamek sekundy można było zmienić miesiąc na -1
									props.monthIndex > 0
										? props.setMonthIndex((prev) => prev - 1)
										: '';
								}}
							/>
						</Arrow>
						<h1>
							{props.monthName} {new Date().getFullYear()}
						</h1>
						<Arrow visible={props.index < 11 ? true : false}>
							<AiOutlineArrowRight
								size={40}
								onClick={() => {
									props.monthIndex < 11
										? props.setMonthIndex((prev) => prev + 1)
										: '';
								}}
							/>
						</Arrow>
					</Header>
					<DaysOfWeek>
						<p>Mon</p>
						<p>Tue</p>
						<p>Wed</p>
						<p>Thu</p>
						<p>Fri</p>
						<p>Sat</p>
						<p>Sun</p>
					</DaysOfWeek>
					<DayContainer>{squares}</DayContainer>
				</Skeleton>
			)}
			{inputPage && (
				<Skeleton>
					<Header>
						<Hidden />
						<h1>Enter your thing</h1>
						<Arrow visible={true}>
							<AiOutlineArrowLeft
								size={40}
								onClick={() => setInputPage(false)}
							/>
						</Arrow>
					</Header>
					<InputContainer>
						<div>
							Thing: <input type='text' />
						</div>
						<div>
							Volume: <input type='text' />
						</div>
						<button
							onClick={() => {
								// nie można dodać do zmiennej bo już będzie zdefiniowana
								if (callendar[props.monthName][day - 1] !== undefined) {
									callendar[props.monthName][day - 1] = undefined;
								} else {
									callendar[props.monthName][day - 1] = 'Done';
								}
								setInputPage(false);
							}}
						>
							Save
						</button>
						<button
							onClick={() => {
								callendar[props.monthName][day - 1] = undefined;
								setInputPage(false);
							}}
						>
							Remove
						</button>
						<button onClick={() => setInputPage(false)}>Cancel</button>
					</InputContainer>
				</Skeleton>
			)}
		</>
	);
}

export default CallendarPage;
