import {Promisable} from '../type';

export default <T>(fn: (value: T) => Promisable<T>) =>
  (value: T) => {
    if (value === null) {
      return null;
    } else if (value === undefined) {
      return undefined;
    }

    return fn(value);
  };
