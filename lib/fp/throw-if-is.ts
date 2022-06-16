import throwIf from './throw-if';

/**
 *
 * @param other The other value to compare.
 * @param err Error message
 * @param value The value to compare.
 */
export default <T>(other: unknown, err: Error) => {
  return throwIf<T>(v => v === other, err);
};
