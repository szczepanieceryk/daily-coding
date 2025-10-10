import { describe, test, expect } from 'vitest';
import { validateEmailInput } from './validators';

// Newsletter form validation
describe('Newsletter form validation', () => {
  test('should return error message if email is empty', () => {
    const errors = validateEmailInput('');
    expect(errors).toContain('Email canot be empty');
  });

  test('should return error message if email is not valid', () => {
    const errors = validateEmailInput('jonfoemail.com');
    expect(errors).toContain('Please enter a valid email address');
  });
});
