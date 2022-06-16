export type ClassType = new (...args: any[]) => any;

export type Returns<T> = (value: T) => T;

export type Promisable<T> = T | PromiseLike<T>;

export type Predicate<Value> = (v: Value) => boolean;
