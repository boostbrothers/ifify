import {Predicate, Promisable} from './type';
import execIf from './fp/exec-if';

export default <T>(
  predicate: Predicate<T>,
  fn: (v: T) => Promisable<T>,
  value: T
) => {
  return execIf(predicate, fn)(value);
};
