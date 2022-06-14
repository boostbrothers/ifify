import {Promisable} from '../type';
import execIfIs from './fp/exec-if-is';

export default <T>(other: unknown, fn: (v: T) => Promisable<T>, value: T) => {
  return execIfIs(other, fn)(value);
};
