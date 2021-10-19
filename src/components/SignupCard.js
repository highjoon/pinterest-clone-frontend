import React, { useState } from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Flex, Text, Button, Input } from '../elements';
import { useDispatch } from 'react-redux';
import { actionCreators as userActions } from '../redux/modules/user';
import LoginForm from './LoginForm';
import { Pinterest } from '@material-ui/icons'
import { IconButton } from '@material-ui/core'
const SignupCard = () => {
	const [loginMode, setLoginMode] = useState(true);
	const dispatch = useDispatch();
	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
			age: '',
		},

		validationSchema: Yup.object({
			email: Yup.string()
				.email('올바른 이메일 주소가 아닙니다.')
				.required('빠뜨린 부분이 있네요! 잊지 말고 이메일을 추가하세요.'),
			password: Yup.string()
				.min(8, '비밀번호가 너무 짧네요! 8자 이상 입력하세요.')
				.matches(/[a-zA-Z]/, '더 강력한 비밀번호를 사용하세요.')
				.required('패스워드를 정확하게 입력해주세요.'),
			age: Yup.string()
				
				.matches(/[0-9]/, '숫자로 입력해 주시길 바랍니다')
				.required('나이를 숫자로 한번 더 입력해주세요.')
				
		}),

		onSubmit: (values) => {
			console.log(values);
			dispatch(userActions.signupAPI(values));
			setLoginMode(true);
		},
	});

	return (
		<Container>
			<Flex margin='10px 0'>
				<IconButton color="red">
				<Pinterest/>
				</IconButton>
			</Flex>
			<Text font_size='2.2rem' margin="0px" >
				Pinterest에 오신 것을 환영
			</Text>
			<Text font_size='2.2rem' margin='10px 0 10px 0'>
			     합니다.
			</Text>
			<Text size='1.6rem'  margin="0 0 30px 0">
				시도해 볼 만한 새로운 아이디어 찾기
			</Text>
			{loginMode ? (
				<LoginForm />
			) : (
				<form onSubmit={formik.handleSubmit}>
					<Flex>
						<Input
							margin='5px 0'
							width='268px'
							height='40px'
							name='email'
							type='text'
							_onChange={
							
								formik.handleChange
								}
							value={formik.values.email}
							placeholder='이메일'
						/>
						{formik.touched.email && formik.errors.email ? (
							<Text margin='5px 0' color='#e60023'>
								{formik.errors.email}
							</Text>
						) : null}
					
					
						<Input
							margin='5px 0'
							width='268px'
							height='40px'
							name='password'
							type='password'
							_onChange={formik.handleChange}
							value={formik.values.password}
							placeholder='비밀번호를 입력하세요'
						/>
						{formik.touched.password && formik.errors.password ? (
							<Text margin='5px 0' color='#e60023'>
								{formik.errors.password}
							</Text>
						) : null}
					
					
						<Input
						   
							margin='5px 0'
							height='40px'
							width='268px'
							name='age'
							type='text'
							_onChange={formik.handleChange}
							value={formik.values.age}
							placeholder='나이를 입력해주세요'
						/>
						{formik.touched.age && formik.errors.age? (
							<Text margin='5px 0' color='#e60023'>
								{formik.errors.age}
							</Text>
						) : null}
				
					<Button type='submit' width='268px' height='40px' background_color="#e60023" border_radius="20px" margin="10px 0 0 0">
						계속하기
					</Button>
					</Flex>
				</form>
			)}
			<Text mg='20px 0' size='1.6rem'>
				또는
			</Text>
			<Button
				width='268px'
				height='40px'
				border_radius="20px" background_color="blue"
				margin='5px 0'
			>
				Facebook으로 계속하기
			</Button>
			<Button width='268px' height='40px' margin='5px 0' border_radius="20px" background_color="white" color="black" border="1px solid">
				Google으로 계속하기
			</Button>
			<Text font_size='11px' width='268px' mg='15px'>
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
					font_weight='700'
					cursor="pointer"
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
	background-color: gainsboro;
	position: absolute;
	font-size: 1.6rem;
	font-weight: 700;
	width: 100%;
	height: 80px;
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