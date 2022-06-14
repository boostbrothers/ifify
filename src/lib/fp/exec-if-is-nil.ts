import {Promisable} from '../../type';

export default <T>(fn: () => Promisable<T>) =>
  (value: T | null | undefined) => {
    // eslint-disable-next-line eqeqeq
    if (value == null) {
      return fn();
    }

    return value;
  };
