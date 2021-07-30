import {Promisable} from '../type';
import {execIf} from './exec-if';

interface ExecuteIfIs {
  <T>(other: unknown, fn: () => Promisable<T>, value: T): Promisable<T>;
  <T>(other: unknown, fn: () => Promisable<T>): (value: T) => Promisable<T>;
}

export const execIfIs: ExecuteIfIs = <T>(
  other: unknown,
  fn: () => Promisable<T>,
  value?: T
) => {
  const exec = execIf(v => v === other, fn);

  if (value) {
    return exec(value);
  }

  return exec;
};
