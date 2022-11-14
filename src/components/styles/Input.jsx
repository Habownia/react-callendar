import styled from 'styled-components';

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	/* justify-content: center; */
	padding: 4rem 3rem;
	gap: 3rem;

	button {
		font-size: 2.2em;
		padding: 0.5rem;
		border-radius: 10px;
		border: 0;
		outline: 0;
		cursor: pointer;
		transition: scale linear 0.1s;

		&:hover {
			scale: 1.05;
		}
	}
`;

export const Input = styled.div`
	--bgInput: #3c3c3c;
	position: relative;

	label {
		position: absolute;
		top: -1.9rem;
		font-size: 1.5rem;

		span {
			color: red;
		}
	}

	input {
		font-size: 1.7rem;
		padding: 0.8rem;
		outline: 0;
		border: double 3px transparent;
		border-radius: 5px;
		background-color: var(--bgInput);
		transition: scale linear 0.2s;

		&::placeholder {
			color: #cdcdcd;
		}

		&:focus {
			border: double 3px transparent;
			background-image: linear-gradient(var(--bgInput), var(--bgInput)),
				linear-gradient(to right, #fe5f75, #fc9842);
			background-origin: border-box;
			background-clip: padding-box, border-box;
			&::placeholder {
				color: #f3f3f3;
			}
		}

		&:hover {
			scale: 1.05;
		}
	}
`;

export const ButtonContainer = styled.div`
	display: flex;
	gap: 1rem;

	button {
		display: flex;
		align-items: center;
		justify-content: space-around;
		gap: 0.5rem;
		min-width: 10rem;
	}

	.save {
		background-color: green;
	}

	.remove {
		background-color: red;
	}
`;
