import axios from 'axios';

const result = await axios.get('https://jsonplaceholder.typicode.com/users');

console.log(result);