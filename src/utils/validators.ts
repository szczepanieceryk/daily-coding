export const validateEmailInput = (email: string): string => {
  if (!email) {
    return 'Email canot be empty';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return 'Please enter a valid email address';
  }
  return '';
};
