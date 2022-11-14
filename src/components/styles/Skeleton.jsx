import styled, { keyframes } from 'styled-components';

export const animatedgradient = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`;

const Skeleton = styled.div`
	width: 50rem;
	min-height: 43rem;

	// kręcący się border
	--borderWidth: 3px;

	background: var(--bgCallendar);
	position: relative;
	border-radius: var(--borderWidth);

	&:after {
		content: '';
		position: absolute;
		top: calc(-1 * var(--borderWidth));
		left: calc(-1 * var(--borderWidth));
		height: calc(100% + var(--borderWidth) * 2);
		width: calc(100% + var(--borderWidth) * 2);
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
		border-radius: calc(2 * var(--borderWidth));
		z-index: -1;
		animation: ${animatedgradient} 5s ease alternate infinite;
		background-size: 300% 300%;
	}
`;

export default Skeleton;
