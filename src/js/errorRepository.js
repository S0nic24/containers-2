export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [1, 'Invalid input'],
      [2, 'Not found'],
      [3, 'Access denied'],
    ]);
  }

  translate(code) {
    return this.errors.get(code) ?? 'Unknown error';
  }
}