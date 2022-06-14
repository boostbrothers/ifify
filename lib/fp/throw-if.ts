import {Predicate, Returns} from '../type';

export default <T>(predicate: Predicate<T>, err: Error): Returns<T> =>
  (value: T): T => {
    if (predicate(value)) {
      throw err;
    }

    return value;
  };
