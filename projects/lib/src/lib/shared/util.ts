const notNullOrUndefined = <T>(value: T) => {
  return value !== null && value !== undefined;
};

export const waitFor = <T>(hasResult: () => T, waitLimit = 3000, intervalLength = 10): Promise<T> => {
  return new Promise((resolve, reject) => {
    let counter          = 0;

    const inter = setInterval(() => {
      counter += intervalLength;
      const waitLimitReached = counter === waitLimit;
      const result           = hasResult();

      if (notNullOrUndefined(result) || waitLimitReached) {

        if (!waitLimitReached) {
          resolve(result);
          clearInterval(inter);
        }

        reject();
      }
    }, intervalLength);
  });
};
