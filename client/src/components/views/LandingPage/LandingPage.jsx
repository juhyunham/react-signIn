import React , { useEffect } from 'react';
import axios from 'axios';
import styles from './landing.module.css'

const LandingPage = (props) => {
	return (
		<div className={styles.landing}>
			<h2>시작 페이지</h2>
		</div>
	)
};

export default LandingPage;