import { useState } from 'react';
import callendar from './callendar';

import GlobalStyles from './components/styles/GlobalStyles';
import AppStyle from './components/styles/AppStyle';
import CallendarPage from './components/CallendarPage';

function App() {
	const [monthIndex, setMonthIndex] = useState(0);

	const objectMap = () =>
		Object.fromEntries(
			Object.entries(callendar).map(([key, value], index) => [
				key,
				<CallendarPage
					value={value}
					monthName={key}
					index={index}
					setMonthIndex={setMonthIndex}
					monthIndex={monthIndex}
				/>,
			])
		);

	const pages = objectMap();
	const month = Object.keys(callendar)[monthIndex];

	return (
		<AppStyle>
			<GlobalStyles />
			{pages[month]}
		</AppStyle>
	);
}

export default App;
