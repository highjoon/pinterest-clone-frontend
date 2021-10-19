import React, { useState } from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Flex, Text, Button, Input } from '../elements';
import { useDispatch } from 'react-redux';
import { actionCreators as userActions } from '../redux/modules/user';
import LoginForm from './LoginForm';

const SignupCard = () => {
	const [loginMode, setLoginMode] = useState(false);
	const dispatch = useDispatch();
	const formik = useFormik({
		initialValues: {
			userName: '',
			password: '',
			checkPassword: '',
		},

		validationSchema: Yup.object({
			userName: Yup.string()
				.email('올바른 이메일 주소가 아닙니다.')
				.required('빠뜨린 부분이 있네요! 잊지 말고 이메일을 추가하세요.'),
			password: Yup.string()
				.min(6, '비밀번호가 너무 짧네요! 6자 이상 입력하세요.')
				.matches(/[a-zA-Z]/, '더 강력한 비밀번호를 사용하세요.')
				.required('패스워드를 입력해주세요.'),
			checkPassword: Yup.string()
				.min(6, '비밀번호가 너무 짧네요! 6자 이상 입력하세요.')
				.matches(/[a-zA-Z]/, '더 강력한 비밀번호를 사용하세요.')
				.required('패스워드를 한번 더 입력해주세요.')
				.oneOf([Yup.ref('password'), null], '비밀번호가 일치하지 않아요.'),
		}),

		onSubmit: (values) => {
			console.log(values);
			dispatch(userActions.__signup(values));
			setLoginMode(true);
		},
	});

	return (
		<Container>
			<Flex mg='10px 0'>
				
			</Flex>
			<Text size='3.2rem' >
				Pinterest에 오신 것을 환영
			</Text>
			<Text size='3.2rem' margin='10px 0 10px 0'>
			     합니다.
			</Text>
			<Text size='1.6rem' color='var(--primary-gray)' mg='10px 0 32px 0'>
				시도해 볼 만한 새로운 아이디어 찾기
			</Text>
			{loginMode ? (
				<LoginForm />
			) : (
				<form onSubmit={formik.handleSubmit}>
					<div>
						<Input
							mg='5px 0'
							width='268px'
							name='userName'
							type='text'
							_onChange={formik.handleChange}
							value={formik.values.userName}
							placeholder='이메일'
						/>
						{formik.touched.userName && formik.errors.userName ? (
							<Text mg='5px 0' color='#e60023'>
								{formik.errors.userName}
							</Text>
						) : null}
					</div>
					<div>
						<Input
							mg='5px 0'
							width='268px'
							name='password'
							type='password'
							_onChange={formik.handleChange}
							value={formik.values.password}
							placeholder='비밀번호를 입력하세요'
						/>
						{formik.touched.password && formik.errors.password ? (
							<Text mg='5px 0' color='#e60023'>
								{formik.errors.password}
							</Text>
						) : null}
					</div>
					<div>
						<Input
							mg='5px 0'
							width='268px'
							name='checkPassword'
							type='password'
							_onChange={formik.handleChange}
							value={formik.values.checkPassword}
							placeholder='비밀번호를 한번 더 입력하세요'
						/>
						{formik.touched.checkPassword && formik.errors.checkPassword ? (
							<Text mg='5px 0' color='#e60023'>
								{formik.errors.checkPassword}
							</Text>
						) : null}
					</div>
					<Button type='submit' width='268px' height='40px' primary>
						계속하기
					</Button>
				</form>
			)}
			<Text mg='20px 0' size='1.6rem'>
				또는
			</Text>
			<Button
				width='268px'
				height='40px'
				bg='var(--secondary-blue)'
				color='var(--primary-white)'
				mg='5px 0'
			>
				Facebook으로 계속하기
			</Button>
			<Button width='268px' height='40px' mg='5px 0'>
				Google으로 계속하기
			</Button>
			<Text size='1.1rem' width='268px' mg='15px'>
				계속 진행하면 Pinterest 서비스 약관에 동의하고 개인정보 보호정책을
				읽었음을 인정하는 것으로 간주됩니다.
			</Text>
			{loginMode ? (
				<Text
					weight='700'
					pointer
					_onClick={() => {
						setLoginMode(false);
					}}
				>
					아직 Pinterest를 사용하고 있지 않으신가요? 가입하기
				</Text>
			) : (
				<Text
					weight='700'
					pointer
					_onClick={() => {
						setLoginMode(true);
					}}
				>
					이미 회원이신가요? 로그인하기
				</Text>
			)}
			<GoBusiness>무료 Business 계정 만들기</GoBusiness>
		</Container>
	);
};
const GoBusiness = styled.div`
	background-color: var(--primary-lightgray);
	position: absolute;
	font-size: 1.6rem;
	font-weight: 700;
	width: 100%;
	height: 62px;
	left: 0;
	bottom: 0;
	border-radius: 0 0 32px 32px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
`;

const Container = styled.section`
	background-color: #FFFFFF;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	width: 430px;
	height: 730px;
	box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
	border-radius: 32px;
	padding: 24px 10px 24px 10px;
`;

export default SignupCard;