export default <T>(err: Error) => {
  return (value: T | null | undefined): T => {
    // eslint-disable-next-line eqeqeq
    if (value == null) {
      throw err;
    }

    return value;
  };
};
