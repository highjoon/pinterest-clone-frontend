import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Text, Button, Input } from '../elements';
import { useDispatch } from 'react-redux';
import { actionCreators as userActions  } from '../redux/modules/user';

const LoginForm = () => {
	const dispatch = useDispatch();
	const formik = useFormik({
		initialValues: {
			userName: '',
			password: '',
		},

		validationSchema: Yup.object({
			userName: Yup.string()
				.email('올바른 이메일 주소가 아닙니다.')
				.required('빠뜨린 부분이 있네요! 잊지 말고 이메일을 추가하세요.'),
			password: Yup.string()
				.min(6, '비밀번호가 너무 짧네요! 6자 이상 입력하세요.')
				.matches(/[a-zA-Z]/, '더 강력한 비밀번호를 사용하세요.')
				.required('패스워드를 입력해주세요.'),
		}),

		onSubmit: (values) => {
			dispatch(userActions.__login(values));
		},
	});

	return (
		<form onSubmit={formik.handleSubmit}>
			<div>
				<Input
					margin='5px 0;'
					width='268px;'
                    placeholder='이메일;'
					type='text'
					_onChange={formik.handleChange}
				
					
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
			<Text mg='20px 0' size='1.4rem' weight='500' pointer>
				비밀번호를 잊으셨나요?
			</Text>
			<Button type='submit' width='268px' height='40px' primary>
				로그인
			</Button>
		</form>
	);
};

export default LoginForm;