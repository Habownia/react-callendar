import styled from 'styled-components';

export const Header = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 90%;
	padding: 1.5rem 0;
	margin: 10px auto;
	border-bottom: 3px solid #333;
`;

export const Arrow = styled.div`
	// zmienia widoczność gdy miesiąc jest pierwszy/ostatni
	visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
	cursor: pointer;
	// żeby nie było transiton na visible
	transition: scale linear 0.2s, color linear 0.2s;
	&:hover {
		scale: 1.2;
		color: #90b3d7;
	}
`;

export const Hidden = styled.div`
	width: 40px;
	height: 40px;
`;
