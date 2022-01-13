import {Promisable} from '../type';
import {execIf} from './exec-if';

interface ExecuteIfIs {
  <T>(fn: () => Promisable<T>, value: T | null | undefined): Promisable<T>;
  <T>(fn: () => Promisable<T>): (value: T | null | undefined) => Promisable<T>;
}

export const execIfIsNil: ExecuteIfIs = <T>(
  fn: () => Promisable<T>,
  value?: T | null
) => {
  // eslint-disable-next-line eqeqeq
  const exec = execIf(v => v == null, fn);

  if (value) {
    return exec(value);
  }

  return exec;
};
