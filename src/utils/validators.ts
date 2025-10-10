export const validateEmailInput = (email: string): string[] => {
  const errors: string[] = [];

  if (!email) {
    errors.push('Email canot be empty');
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push('Please enter a valid email address');
  }
  return errors;
};
