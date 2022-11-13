import { useState } from 'react';

import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

import FormCallendar from './formCallendar';

import Skeleton from './styles/Skeleton';
import { Header, Arrow } from './styles/Header';
import { Day, DayContainer, DaysOfWeek } from './styles/Day';

function CallendarPage(props) {
	const [inputPage, setInputPage] = useState(false);
	const [day, setDay] = useState(0);

	// po kliknięciu w dzień ustawia się state
	function addDay(e) {
		setInputPage(true);
		const dayNum = e.target.innerText;
		setDay(dayNum);
	}

	// oblicza na jaki dzień tygodnia wypada 1 miesiąca
	const firstDayInMonthIndex = (
		year = new Date().getFullYear(),
		monthIndex = props.index
	) => new Date(`${year}-${monthIndex + 1}-01`).getDay();

	// tworzy kwadraty z dniami
	const squares = [...props.value].map((elem, index) => (
		<Day
			key={index}
			elem={elem}
			index={index}
			onClick={addDay}
			whereToStart={firstDayInMonthIndex()}
		>
			{index + 1}
		</Day>
	));

	return (
		<>
			{inputPage ? (
				<FormCallendar
					inputPage={inputPage}
					setInputPage={setInputPage}
					monthName={props.monthName}
					day={day}
				/>
			) : (
				<Skeleton>
					<Header>
						<Arrow visible={props.index > 0}>
							<AiOutlineArrowLeft
								size={40}
								onClick={() =>
									// przez ułamek sekundy można było zmienić miesiąc na -1
									props.monthIndex > 0
										? props.setMonthIndex((prev) => prev - 1)
										: ''
								}
							/>
						</Arrow>
						<h1>
							{props.monthName} {new Date().getFullYear()}
						</h1>
						<Arrow visible={props.index < 11}>
							<AiOutlineArrowRight
								size={40}
								onClick={() =>
									props.monthIndex < 11
										? props.setMonthIndex((prev) => prev + 1)
										: ''
								}
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
		</>
	);
}

export default CallendarPage;
