import {Promisable} from '../type';

interface ExecuteIf {
  <T>(
    predicate: (v: T) => boolean,
    fn: () => Promisable<T>,
    value: T
  ): Promisable<T>;
  <T>(predicate: (v: T) => boolean, fn: () => Promisable<T>): (
    value: T
  ) => Promisable<T>;
}

export const execIf: ExecuteIf = <T>(
  predicate: (v: T) => boolean,
  fn: () => Promisable<T>,
  value?: T
) => {
  const exec = (value: T) => {
    if (predicate(value)) {
      return fn();
    }

    return value;
  };

  if (value) {
    return exec(value);
  }

  return exec;
};
