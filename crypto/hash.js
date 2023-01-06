import {createHash} from 'crypto'

const hash = (str) => createHash('sha256').update(str).digest('hex');

let password = 'password';

const hash1 = hash(password);
console.log(hash1);

password = 'new';
const hash2 = hash(password);

console.log(hash2);
console.log(hash1 === hash2 ? 'matched ===' : 'not matched ===');
console.log(hash1 == hash2 ? 'matched ==' : 'not matched ==');
