import {createCipheriv, randomBytes, createDecipheriv} from 'crypto';

const message='my message';
const key=randomBytes(32);
const iv=randomBytes(16);

const cipher = createCipheriv('aes256', key, iv);

const encMsg = cipher.update(message, 'utf8', 'hex') + cipher.final('hex');

console.log(encMsg);

const decipher = createDecipheriv('aes256', key, iv);
const decMsg = decipher.update(encMsg, 'hex', 'utf-8') +decipher.final('utf8');

console.log(decMsg);
