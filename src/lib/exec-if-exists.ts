import {Promisable} from '../type';
import execIfExists from './fp/exec-if-exists';

export default <T>(fn: (value: T) => Promisable<T>, value: T) => {
  return execIfExists(fn)(value);
};
