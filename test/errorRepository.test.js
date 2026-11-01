import ErrorRepository from '../src/js/errorRepository.js';

describe('ErrorRepository', () => {
  let repo;

  beforeEach(() => {
    repo = new ErrorRepository();
  });

  test('конструктор создаёт Map с предустановленными ошибками', () => {
    expect(repo.errors).toBeInstanceOf(Map);
    expect(repo.errors.size).toBeGreaterThan(0);
  });

  test('translate возвращает описание по существующему коду', () => {
    expect(repo.translate(1)).toBe('Invalid input');
    expect(repo.translate(2)).toBe('Not found');
    expect(repo.translate(3)).toBe('Access denied');
  });

  test('translate возвращает "Unknown error" для несуществующего кода', () => {
    expect(repo.translate(999)).toBe('Unknown error');
  });

  test('translate возвращает "Unknown error" для нечислового кода', () => {
    expect(repo.translate('abc')).toBe('Unknown error');
  });
});