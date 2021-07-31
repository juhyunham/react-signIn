import { User } from "../models/User";

let auth = (req, rest, next) => {
	// 인증처리

	let token = req.cookies.x_auth;

	User.findByToken(token, (err, user) => {
		if (err) throw err;
		if (!user) return res.js({ isAuth : false, error: true })

		req.token = token;
		req.user = user;
		next();
	})
}

module export = { auth }