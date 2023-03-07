import * as C from './styles';

type Props = {
	title: string;
	description: string;
	icon?: string;
};

export const RegisterInfo = ({ title, description, icon }: Props) => {
	return (
		<C.Container>
			<C.Title>{title}</C.Title>
			<C.Description>
				<p>{description}</p>
				<div>{icon}</div>
			</C.Description>
		</C.Container>
	);
};
