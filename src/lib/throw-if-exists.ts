import {throwIf} from './throw-if';

interface ThrowIfExists {
  <T>(err: Error, value: T): T;
  <T>(err: Error): (value: T) => T;
}

export const throwIfExists: ThrowIfExists = <T>(err: Error, value?: T) => {
  const exec = throwIf<T>(v => !!v, err);

  if (value) {
    return exec(value);
  }

  return exec;
};
