import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RegisterInfo } from '../../components/RegisterInfo';
import { Theme } from '../../components/Theme';
import { FormActions, useForm } from '../../context/FormContext';
import * as C from './styles';

export const FormStep4 = () => {
	const navigate = useNavigate();
	const { state, dispatch } = useForm();

	useEffect(() => {
		dispatch({
			type: FormActions.setCurrentStep,
			payload: 4,
		});
		if (state.name === '') {
			navigate('/');
		}
	}, [dispatch, navigate, state.name]);

	return (
		<Theme>
			<C.Container>
				<p>Passo 4/4</p>
				<h1>Obrigado, {state.name}</h1>
				<p>Você finalizou seu cadastro com sucesso!</p>

				<hr />

				<RegisterInfo
					title={'Nome completo:'}
					description={state.name}
				/>
				{state.level === 0 && (
					<RegisterInfo
						title={'Nível profissional:'}
						description={'Sou iniciante. Comecei a programar há menos de 2 anos.'}
						icon={'🥳'}
					/>
				)}
				{state.level === 1 && (
					<RegisterInfo
						title={'Nível profissional:'}
						description={'Sou programador. Já programo há 2 anos ou mais.'}
						icon={'😎'}
					/>
				)}
				<RegisterInfo
					title={'E-mail:'}
					description={state.email}
				/>
				<RegisterInfo
					title={'Github:'}
					description={state.github}
				/>
			</C.Container>
		</Theme>
	);
};
