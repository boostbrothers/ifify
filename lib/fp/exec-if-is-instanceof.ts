/* eslint-disable @typescript-eslint/no-explicit-any */
import {ClassType, Promisable} from '../type';
import execIf from './exec-if';

export default <T>(
  typeofClass: ClassType,
  fn: (instance: T) => Promisable<T>
) => execIf(instance => instance instanceof typeofClass, fn);
