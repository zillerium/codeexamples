import  {createHmac} from 'crypto';

const password = 'password';
const message = 'my message';

const hmac = createHmac('sha256', password).update(message).digest('hex');

console.log(hmac);
