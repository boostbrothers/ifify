import {Predicate} from '../type';
import throwIf from './fp/throw-if';

export default <T>(predicate: Predicate<T>, err: Error, value: T): T => {
  return throwIf(predicate, err)(value);
};
