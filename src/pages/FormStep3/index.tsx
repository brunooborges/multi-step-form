import { ChangeEvent, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Theme } from '../../components/Theme';
import { FormActions, useForm } from '../../context/FormContext';
import * as C from './styles';

export const FormStep3 = () => {
	const navigate = useNavigate();
	const { state, dispatch } = useForm();

	useEffect(() => {
		dispatch({
			type: FormActions.setCurrentStep,
			payload: 3,
		});
		if (state.name === '') {
			navigate('/');
		}
	}, [dispatch, navigate, state.name]);

	const handleNextStep = () => {
		if (state.email !== '' && state.github !== '') {
			navigate('/step4');
		} else {
			alert('Preencha os dados.');
		}
	};

	const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch({
			type: FormActions.setEmail,
			payload: e.target.value,
		});
	};

	const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch({
			type: FormActions.setGithub,
			payload: e.target.value,
		});
	};

	return (
		<Theme>
			<C.Container>
				<p>Passo 3/4</p>
				<h1>Legal {state.name}, onde te achamos?</h1>
				<p>Preencha com seus dados para conseguirmos entrar em contato.</p>

				<hr />

				<label>
					Qual seu e-mail?
					<input
						type="email"
						value={state.email}
						onChange={handleEmailChange}
					/>
				</label>
				<label>
					Qual seu Github?
					<input
						type="url"
						value={state.github}
						onChange={handleGithubChange}
					/>
				</label>
				<Link
					className="backButton"
					to="/step2">
					Voltar
				</Link>
				<button onClick={handleNextStep}>Finalizar Cadastro</button>
			</C.Container>
		</Theme>
	);
};
