export const fakeRequest = (
  data = "No Data",
  delay = 1500,
  mustFail = false
) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mustFail) {
        reject("Default error");
      } else {
        resolve(data);
      }
    }, delay);
  });
};
