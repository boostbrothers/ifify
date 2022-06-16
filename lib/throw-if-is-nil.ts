import throwIfIsNil from './fp/throw-if-is-nil';

export default <T>(err: Error, value: T | null | undefined): T => {
  return throwIfIsNil<T>(err)(value);
};
