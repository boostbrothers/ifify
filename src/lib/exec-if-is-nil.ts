import {Promisable} from '../type';
import execIf from './fp/exec-if-is-nil';

export default <T>(fn: () => Promisable<T>, value: T | null | undefined) => {
  return execIf(fn)(value);
};
