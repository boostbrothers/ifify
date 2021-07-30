interface ThrowIf {
  <T>(predicate: (v: T) => boolean, err: Error, value: T): T;
  <T>(predicate: (v: T) => boolean, err: Error): (value: T) => T;
}

export const throwIf: ThrowIf = <T>(
  predicate: (v: T) => boolean,
  err: Error,
  value?: T
) => {
  const exec = (value: T): T => {
    if (predicate(value)) {
      throw err;
    }

    return value;
  };

  if (value) {
    return exec(value);
  }

  return exec;
};
