import {Promisable} from '../type';
import {execIf} from './exec-if';

interface ExecuteIfExists {
  <T>(fn: () => Promisable<T>, value: T): Promisable<T>;
  <T>(fn: () => Promisable<T>): (value: T) => Promisable<T>;
}

export const execIfExists: ExecuteIfExists = <T>(
  fn: () => Promisable<T>,
  value?: T
) => {
  const exec = execIf(v => !!v, fn);

  if (value) {
    return exec(value);
  }

  return exec;
};
