import {scryptSync, randomBytes, timingSafeEqual} from 'crypto';

const signup = (email, password) => {
        const salt = randomBytes(16).toString('hex');
	const hashedPassword = scryptSync(password, salt, 64).toString('hex');

	const user = {email, password: `${salt}:${hashedPassword}` }

	users.push(user);
	return user;

}

const login = (email, password) => {
  const user = users.find(v=>v.email===email);
	const [salt, key]=user.password.split(':');
	const hashedBuffer = scryptSync(password, salt, 64);
	const keyBuffer= Buffer.from(key, 'hex');
	return timingSafeEqual(hashedBuffer, keyBuffer) ? 'success' : 'failed';

}

const users=[];
const user = signup('email@example.com', 'pass');
console.log(user);

const res = login('email@example.com', 'pass2');
console.log(res);
