export function getStorage(key, initialValue) {
  try {
    const tasks = window.localStorage.getItem(key);
    return tasks ? JSON.parse(tasks) : initialValue;
  } catch (error) {
    console.log(error);
    return initialValue;
  }
}

export function setStorage(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log(error);
  }
}
