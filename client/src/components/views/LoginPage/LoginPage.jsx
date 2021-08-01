import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './login.module.css'
import loginUser from '../../../_actions/user_action'

const LoginPage = (props) => {
	const dispatch = useDispatch()

	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const onEmailHandler = (event) => {
		setEmail(event.currentTarget.value)
	}

	const onPasswordHandler = (event) => {
		setPassword(event.currentTarget.value)
	}

	const onSubmitHandler = (event) => {
		event.preventDefault()

		let body = {
			email: email,
			password: password
		}
		
		dispatch(loginUser(body))
			.then(response => {
				if (response.payload.loginSuccess) {
					props.history.push('/')
				} else {
					alert('Error')
				}
			})
	}

	return(
		<div className={styles.container}>
			<form onSubmit={onSubmitHandler}>
				<div className={styles.inputBox}>
					<label htmlFor="email">Email</label>
					<input type="email" id="email" placeholder="email" value={email} onChange={onEmailHandler} />
				</div>
				<div className={styles.inputBox}>
					<label htmlFor="password">Password</label>
					<input  type="password" id="password" placeholder="password" value={password} onChange={onPasswordHandler} />
				</div>
				<div className={styles.inputBox}>
					<button>Login</button>
				</div>
			</form>
		</div>
	)
};

export default LoginPage;