import throwIfExists from './fp/throw-if-exists';

export default <T>(err: Error, value: T) => {
  return throwIfExists<T>(err)(value);
};
