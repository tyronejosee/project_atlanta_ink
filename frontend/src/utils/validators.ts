export const validatePhone = (value: string) => {
  const phonePattern = /^[0-9]{10,15}$/;
  return phonePattern.test(value) || "Invalid phone number";
};

export const validateBudget = (value: string) => {
  return value === "" || /^\d+(\.\d{1,2})?$/.test(value) || "Invalid budget format";
};
