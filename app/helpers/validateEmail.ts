export default function validateEmail(email: string) {
  // Regular expression to validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
