import {Promisable} from '../type';
import execIf from './exec-if';

export default <T>(other: unknown, fn: (v: T) => Promisable<T>) =>
  execIf(v => v === other, fn);
