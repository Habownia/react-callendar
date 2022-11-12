import { useState } from 'react';
import callendar from './callendar';

import AppStyle from './components/styles/AppStyle';
import CallendarPage from './components/CallendarPage';

function App() {
	const [monthIndex, setMonthIndex] = useState(0);

	const objectMap = () =>
		Object.fromEntries(
			Object.entries(callendar).map(([key, value], index) => {
				return [
					key,
					<CallendarPage
						value={value}
						monthName={key}
						index={index}
						setMonthIndex={setMonthIndex}
						monthIndex={monthIndex}
					/>,
				];
			})
		);

	const pages = objectMap();
	const month = Object.keys(callendar)[monthIndex];

	return <AppStyle>{pages[month]}</AppStyle>;
}

export default App;
