import throwIfIs from './fp/throw-if-is';

/**
 *
 * @param other The other value to compare.
 * @param err Error message
 * @param value The value to compare.
 */
export default <T>(other: unknown, err: Error, value: T) => {
  return throwIfIs<T>(other, err)(value);
};
