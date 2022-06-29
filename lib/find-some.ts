export type Task<T> = () => Promise<T>;

/**
 * 평평한 형태의 promise tasks를 순차적으로 nil이 아닌 값을 반환하는 함수.
 * @example
 * const user = await findSome([
 *   () => getUser(userId),
 *   () => getUserInCache(userId),
 * ]).then(throwIfIsNil("snip"));
 */
export default async <T>(tasks: Task<T>[]): Promise<T | undefined> => {
  for (const task of tasks) {
    const result = await task();

    if (result ?? false) {
      return result;
    }
  }

  return undefined;
};
