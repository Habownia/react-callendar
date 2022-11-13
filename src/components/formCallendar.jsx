import { useEffect } from 'react';
import { useFormik } from 'formik';

import { AiOutlineArrowLeft } from 'react-icons/ai';

import callendar from '../callendar';

import Skeleton from './styles/Skeleton';
import { Header, Arrow, Hidden } from './styles/Header';
import { InputsContainer, Input } from './styles/Input';

function FormCallendar({ inputPage, setInputPage, monthName, day }) {
	const dayPath = callendar[monthName][day - 1];

	const formik = useFormik({
		initialValues: {
			thing: '',
			volume: '',
		},
		onSubmit: (values) => {
			callendar[monthName][day - 1] = {
				thing: values.thing,
				volume: values.volume,
			};
			setInputPage(false);
			// formik.resetForm(); <-- chyba nie potrzebne ale zostawie
		},
	});

	// wpisywanie zawartości inputa dla każdego dnia z osobna
	useEffect(() => {
		formik.resetForm({
			values: {
				thing: dayPath ? dayPath.thing : '',
				volume: dayPath ? dayPath.volume : '',
			},
		});
	}, [inputPage]);

	return (
		<Skeleton>
			<Header>
				<Hidden />
				<h1>Enter your thing</h1>
				<Arrow visible>
					<AiOutlineArrowLeft size={40} onClick={() => setInputPage(false)} />
				</Arrow>
			</Header>
			<form onSubmit={formik.handleSubmit}>
				<InputsContainer>
					<Input>
						<label htmlFor='thing'>
							Thing <span>*</span>
						</label>
						<input
							type='text'
							id='thing'
							placeholder='Input text'
							onChange={formik.handleChange}
							value={formik.values.thing}
						/>
					</Input>
					<Input>
						<label htmlFor='volume'>
							Volume <span>*</span>
						</label>
						<input
							type='text'
							id='volume'
							placeholder='Input text'
							onChange={formik.handleChange}
							value={formik.values.volume}
						/>
					</Input>
					<button type='submit' onClick={() => {}}>
						Save
					</button>
					<button
						type='button'
						onClick={() => {
							callendar[monthName][day - 1] = undefined;
							setInputPage(false);
						}}
					>
						Remove
					</button>
					<button type='button' onClick={() => setInputPage(false)}>
						Cancel
					</button>
				</InputsContainer>
			</form>
		</Skeleton>
	);
}

export default FormCallendar;
