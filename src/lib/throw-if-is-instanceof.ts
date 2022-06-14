import {ClassType} from '../type';
import throwIfIsInstanceOf from './fp/throw-if-is-instanceof';

/**
 *
 * @param typeofClass The other instance to compare.
 * @param err Error message
 * @param instance The instance to compare.
 */
export default <T>(typeofClass: ClassType, err: Error, instance: T): T => {
  return throwIfIsInstanceOf<T>(typeofClass, err)(instance);
};
