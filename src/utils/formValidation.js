export const validateRequired = (value) => {
  return value ? true : 'This field is required';
};

export const validateEmail = (email) => {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(String(email).toLowerCase()) ? true : 'Invalid email address';
};

export const validatePhone = (phone) => {
  const re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  return re.test(phone) ? true : 'Invalid phone number';
};

export const validateZipCode = (zipCode) => {
  const re = /^\d{5}(-\d{4})?$/;
  return re.test(zipCode) ? true : 'Invalid ZIP code';
};

export const validateFEIN = (fein) => {
  const re = /^\d{2}-\d{7}$/;
  return re.test(fein) ? true : 'Invalid FEIN (format: XX-XXXXXXX)';
};