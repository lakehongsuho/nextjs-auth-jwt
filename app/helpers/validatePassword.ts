export default function validatePassword(password: string) {
  // Regular expression to validate password
  // Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
}
