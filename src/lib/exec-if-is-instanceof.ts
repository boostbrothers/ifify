/* eslint-disable @typescript-eslint/no-explicit-any */
import {ClassType, Promisable} from '../type';
import execIfIsInstanceof from './fp/exec-if-is-instanceof';

export default <T>(
  typeofClass: ClassType,
  fn: (instance: T) => Promisable<T>,
  instance: T
) => {
  return execIfIsInstanceof(typeofClass, fn)(instance);
};
