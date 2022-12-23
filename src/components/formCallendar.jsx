import { useEffect } from 'react';
import { useFormik } from 'formik';

import { AiOutlineArrowLeft } from 'react-icons/ai';
import { TbDeviceFloppy } from 'react-icons/tb';
import { MdRemoveCircle } from 'react-icons/md';

import callendar from '../callendar';

import Skeleton from './styles/Skeleton';
import { Header, Arrow, Hidden } from './styles/Header';
import { Form, Input, ButtonContainer } from './styles/Input';

function FormCallendar({ inputPage, setInputPage, monthName, day }) {
	const dayPath = callendar[monthName][day - 1];

	const formik = useFormik({
		initialValues: {
			thing: '',
			volume: '',
		},
		onSubmit: (values) => {
			if (!(values.thing === '' && values.volume === '')) {
				callendar[monthName][day - 1] = {
					thing: values.thing,
					volume: values.volume,
				};
			}
			setInputPage(false);
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
			<Form onSubmit={formik.handleSubmit}>
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
				<ButtonContainer>
					<button type='submit' className='save'>
						<TbDeviceFloppy />
						Save
					</button>
					<button
						type='button'
						className='remove'
						onClick={() => {
							callendar[monthName][day - 1] = undefined;
							setInputPage(false);
						}}
					>
						<MdRemoveCircle />
						Remove
					</button>
					{/* <button type='button' onClick={() => setInputPage(false)}>
							Cancel
						</button> */}
				</ButtonContainer>
			</Form>
		</Skeleton>
	);
}

export default FormCallendar;
