import {throwIf} from './throw-if';

interface ThrowIfIsNil {
  <T>(err: Error, value: T | null | undefined): T;
  <T>(err: Error): (value: T | null | undefined) => T;
}

export const throwIfIsNil: ThrowIfIsNil = <T>(err: Error, value?: T | null) => {
  // eslint-disable-next-line eqeqeq
  const exec = throwIf<T>(v => v == null, err);

  if (value) {
    return exec(value);
  }

  return exec;
};
