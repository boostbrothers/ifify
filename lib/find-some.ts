import {Predicate} from './type';

/**
 * 평평한 형태의 promise tasks를 순차적으로 조건에 맞는 것을 돌려주는 함수.
 * @example
 * const user = await findOne(isUser, [
 *   () => getUser(userId), // null
 *   () => getUserInCache(userId), // null
 *   () => getUser(email), // UserC
 *   () => getUserInCache(email), // UserD
 * ]).then(throwIfIsNil("snip"));
 *
 * user === UserC
 */
export default async <T, E>(
  predicate: Predicate<T | E>,
  tasks: Array<() => Promise<T | E>>,
  defaults: E
): Promise<T | E> => {
  for (const task of tasks) {
    const result = await task();

    if (predicate(result)) {
      return result;
    }
  }

  return defaults;
};
