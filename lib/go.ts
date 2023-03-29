export class Go<A> {
  static of<A>(value: A) {
    return new Go(value);
  }

  private constructor(readonly value: A) {}

  $<Returns, Arguments extends unknown[]>(
    fn: (a: A, ...args: Arguments) => Returns,
    ...args: Arguments
  ) {
    return new Go(fn(this.value, ...args));
  }

  $$<Returns, Arg1, Arguments extends unknown[]>(
    fn: (a: Arg1, b: A, ...args: Arguments) => Returns,
    a: Arg1,
    ...args: Arguments
  ) {
    return new Go(fn(a, this.value, ...args));
  }

  $$$<Returns, Arg1, Arg2, Arguments extends unknown[]>(
    fn: (a: Arg1, b: Arg2, c: A, ...args: Arguments) => Returns,
    a: Arg1,
    b: Arg2,
    ...args: Arguments
  ) {
    return new Go(fn(a, b, this.value, ...args));
  }

  unwrap() {
    return this.value;
  }
}
