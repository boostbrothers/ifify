export type Task<T> = () => Promise<T>;

/**
 * 평평한 형태의 promise tasks를 순차적으로 nil이 아닌 값을 반환하는 함수.
 * @example
 * const user = await some([
 *   () => getUser(userId),
 *   () => getUserInCache(userId),
 * ]).catch(() => throw NotFoundError());
 */
export default async <T>(
  tasks: Task<T>[],
  error: Error = new Error('none')
): Promise<T> => {
  for (const task of tasks) {
    const result = await task();

    if (result ?? false) {
      return result;
    }
  }

  throw error;
};
