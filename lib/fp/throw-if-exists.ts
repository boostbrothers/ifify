export default <V>(err: Error) =>
  (value: V | null | undefined): null | undefined => {
    if (value === null) {
      return null;
    } else if (value === undefined) {
      return undefined;
    }

    throw err;
  };
