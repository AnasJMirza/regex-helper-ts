
export const patterns = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^\+?[1-9]\d{1,14}$/, // Simple international phone format
  url: /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-]*)*$/,
  date: /^\d{4}-\d{2}-\d{2}$/, // YYYY-MM-DD format
  password: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/, // At least 1 uppercase, 1 digit, 8 chars
  creditCard: /^\d{4}-?\d{4}-?\d{4}-?\d{4}$/,
};
