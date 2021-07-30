import {throwIf} from './throw-if';

interface ThrowIfIs {
  <T>(other: unknown, err: Error, value: T): T;
  <T>(other: unknown, err: Error): (value: T) => T;
}

/**
 *
 * @param other The other value to compare.
 * @param err Error message
 * @param value The value to compare.
 */
export const throwIfIs: ThrowIfIs = <T>(
  other: unknown,
  err: Error,
  value?: T
) => {
  const exec = throwIf<T>(v => v === other, err);

  if (value) {
    return exec(value);
  }

  return exec;
};
