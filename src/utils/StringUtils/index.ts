export const isStringEmpty = (value: string) => {
  if (!value || value.trim() === '') {
    return true;
  }

  return false;
};
