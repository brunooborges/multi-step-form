import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const Title = styled.div`
	font-size: 20px;
	font-weight: bold;
	margin-bottom: 5px;
`;

export const Description = styled.div`
	color: #b8b8d4;
	margin-bottom: 5px;
	display: flex;
	align-items: center;

	p {
		font-size: 16px;
	}
`;
