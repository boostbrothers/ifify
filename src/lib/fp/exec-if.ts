import {Predicate, Promisable} from '../../type';

export default <T>(predicate: Predicate<T>, fn: (v: T) => Promisable<T>) =>
  (value: T) => {
    if (predicate(value)) {
      return fn(value);
    }

    return value;
  };
