export const validatePhone = (value: string) => {
  const phonePattern = /^\+1404\d{7}$/;
  return phonePattern.test(value) || "Invalid phone number";
};

export const validateBudget = (value: string) => {
  return (
    value === "" || /^\d+(\.\d{1,2})?$/.test(value) || "Invalid budget format"
  );
};
