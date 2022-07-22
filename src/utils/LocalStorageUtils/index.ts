export const setToken = (key: string, token: string) => {
  localStorage.setItem(key, token);
};

export const getToken = (key: string) => {
  return localStorage.getItem(key);
};

export const deleteToken = (key: string) => {
  return localStorage.removeItem(key);
};
