import ErrorRepository from './js/errorRepository.js';

const repo = new ErrorRepository();

console.log(repo.translate(1));
console.log(repo.translate(999));